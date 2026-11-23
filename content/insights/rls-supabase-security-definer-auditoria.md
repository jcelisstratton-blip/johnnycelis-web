---
title: "RLS mal configurado en Supabase: el agujero que nadie ve hasta que es tarde"
description: "Una función SECURITY DEFINER mal expuesta puede saltarse todo tu RLS en Supabase. Así se produce, así se audita y así se cierra."
tag: "Seguridad"
date: "2026-11-23"
---

Row Level Security en Supabase da una falsa sensación de seguridad cuando hay funciones `SECURITY DEFINER` en el esquema `public`. El mecanismo es correcto. El problema está en cómo se configura, o más exactamente, en lo que no se configura.

## Cómo funciona el vector de ataque

Una función `SECURITY DEFINER` corre con los privilegios del usuario que la creó, no del que la llama. Si la creó el rol `postgres` (superusuario), la función tiene acceso total a la base de datos, independientemente de las políticas RLS que hayas definido.

El error clásico:

```sql
CREATE OR REPLACE FUNCTION public.get_user_data(user_id uuid)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN (SELECT row_to_json(u) FROM users u WHERE u.id = user_id);
END;
$$;
```

Esta función vive en el esquema `public`. Supabase, por defecto, otorga `EXECUTE` en `public` al rol `anon`. Resultado: cualquier request sin autenticar puede llamarla directamente desde la API de PostgREST y obtener datos de cualquier usuario. RLS no interviene porque la función corre como superusuario.

## Por qué no lo notas

Tus políticas RLS están activas. Las pruebas manuales pasan. El dashboard de Supabase no tiene un alerta que diga "esta función ignora tus políticas". El problema solo aparece cuando alguien prueba llamar a la función directamente como `anon`, lo cual no forma parte del flujo normal de desarrollo.

Además, muchos tutoriales oficiales y de terceros muestran `SECURITY DEFINER` como el patrón estándar para funciones auxiliares, sin mencionar el scope del esquema ni los permisos de ejecución.

## Cómo auditar tu base de datos ahora

Ejecuta esto contra tu instancia de Supabase (en el SQL Editor o desde cualquier cliente con acceso):

```sql
SELECT
  n.nspname AS schema,
  p.proname AS function_name,
  r.rolname AS owner,
  array_agg(grantee.rolname) AS executable_by
FROM pg_proc p
JOIN pg_namespace n ON n.oid = p.pronamespace
JOIN pg_roles r ON r.oid = p.proowner
JOIN LATERAL (
  SELECT acl.grantee::regrole::text AS rolname
  FROM aclexplode(COALESCE(p.proacl, acldefault('f', p.proowner))) acl
) grantee ON TRUE
WHERE p.prosecdef = TRUE
  AND n.nspname = 'public'
GROUP BY n.nspname, p.proname, r.rolname;
```

Busca cualquier función donde `executable_by` incluya `anon` o `authenticated` y el `owner` sea `postgres`. Esas son las que necesitan revisión inmediata.

## Tres formas de cerrar el agujero

**Revocar EXECUTE del rol anon:**
```sql
REVOKE EXECUTE ON FUNCTION public.get_user_data(uuid) FROM anon;
```

Simple, pero frágil. Si alguien recrea la función o Supabase la resetea, el permiso puede volver.

**Mover la función a un esquema privado:**
```sql
CREATE SCHEMA internal;
CREATE OR REPLACE FUNCTION internal.get_user_data(user_id uuid)
...
```

Los roles `anon` y `authenticated` no tienen acceso a esquemas distintos de `public` por defecto. Esta es la opción más limpia.

**Cambiar a SECURITY INVOKER cuando sea posible:**

Si la función no necesita elevar privilegios, elimina `SECURITY DEFINER`. La función corre con los permisos del caller y RLS se aplica normalmente.

```sql
CREATE OR REPLACE FUNCTION public.get_user_data(user_id uuid)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY INVOKER  -- o simplemente omite SECURITY DEFINER
AS $$
...
$$;
```

## Qué incluir en el proceso de revisión

- Audita con la query anterior antes de cada despliegue que modifique funciones.
- Documenta qué funciones necesitan `SECURITY DEFINER` y por qué. Si no hay razón técnica, no la uses.
- Revisa los permisos después de cualquier restauración o migración: Supabase puede resetear grants al reconstruir el esquema.
- Si usas n8n o cualquier cliente externo para operaciones de base de datos, verifica qué rol usa la conexión. Un nodo de Supabase corriendo como `service_role` tiene el mismo problema si llama funciones mal configuradas.

RLS es una capa de seguridad real. Pero una función `SECURITY DEFINER` expuesta públicamente la rodea por completo. La auditoría tarda diez minutos. No esperes a que alguien la haga por ti desde afuera.
