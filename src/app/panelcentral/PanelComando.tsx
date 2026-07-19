"use client";

import { useState, useEffect, useRef } from "react";
import { storage } from "./storageAdapter";

// ============================================================
// PANEL DE COMANDO H2-2026 · v6 «ENCENDIDO» — Johnny Celis / STRATT-ON
// Piel: brand kit oficial (carbón · grafito · humo · blanco · rojo señal ≤5%)
// Tipos: Archivo Black (display) · Archivo (texto) · JetBrains Mono (datos)
// Reposicionamiento: soluciones empresariales que DE VERDAD funcionan
// + escalada masiva de mentorías (Fundadora 10 → Cohorte 2 50+ → evergreen 2027)
// ============================================================

const STORAGE_KEY = "estrategia_h2_panel_v1";
const TODAY = new Date("2026-07-19T12:00:00");

// Paleta oficial — prohibido introducir colores fuera de ella
const C = {
  carbon: "#0E0F11",
  grafito: "#1C1E22",
  humo: "#9BA1A6",
  blanco: "#F5F6F4",
  rojo: "#FF3B2F",
  rojoP: "#C21F17",
  hair: "rgba(245,246,244,0.10)",
};

const PILLARS = {
  mon: { label: "MONETIZACIÓN", d: "Convertir atención en caja con la mentoría como motor de escala: Fundadora (10) → Cohorte 2 (50+) → evergreen 2027 (meta 500). Arriba, el ticket empresarial de Stratt-On respaldado por sistemas corriendo.", meta: "Mentoría escalando sin depender de tus horas + pipeline empresarial activo al cierre de diciembre." },
  aut: { label: "AUTOMATIZACIÓN", d: "Todo proceso repetitivo se convierte en flujo n8n sobre infraestructura propia — captación, publicación en 5 redes, dispersión a la comunidad y hasta la admisión de la mentoría. Si lo hiciste dos veces a mano, la tercera la hace el sistema.", meta: "Embudo, distribución, entrega de mentoría y enrutamiento corriendo sin intervención diaria." },
  pos: { label: "POSICIONAMIENTO", d: "Autoridad por evidencia: soluciones empresariales reales ocurriendo en pantalla. Sistema entregado, documentado y corriendo — no demos, no promesas. La producción confiesa lo que la demo miente.", meta: "Referente hispano de automatización en producción, con vitrina de casos empresariales verificables y 22 cápsulas distribuidas." },
  solo: { label: "EMPRESA DE 1", d: "Una persona + capa de IA y automatización como planta de personal. Del estado manual al estado encendido: decisiones con datos, cero dependencia de SaaS crítico, entrega que escala sin escalar tus horas.", meta: "Operación completa (captación → distribución → venta → entrega → control) sostenible con tus horas reales." },
};
const PIL_KEYS = ["mon", "aut", "pos", "solo"];

const SRC = {
  n8nDocs: { label: "n8n Docs", url: "https://docs.n8n.io" },
  n8nHost: { label: "n8n Self-Hosting", url: "https://docs.n8n.io/hosting/" },
  evo: { label: "Evolution API", url: "https://doc.evolution-api.com" },
  supa: { label: "Supabase Docs", url: "https://supabase.com/docs" },
  supaRLS: { label: "Supabase RLS", url: "https://supabase.com/docs/guides/database/postgres/row-level-security" },
  coolify: { label: "Coolify Docs", url: "https://coolify.io/docs" },
  waba: { label: "WhatsApp Business API", url: "https://developers.facebook.com/docs/whatsapp" },
  wabaTpl: { label: "Plantillas WABA", url: "https://developers.facebook.com/docs/whatsapp/message-templates" },
  calcom: { label: "Cal.com Self-Hosted", url: "https://cal.com/docs/self-hosting" },
  wompi: { label: "Wompi API", url: "https://docs.wompi.co" },
  chatwoot: { label: "Chatwoot Docs", url: "https://www.chatwoot.com/docs" },
  gemini: { label: "Gemini API", url: "https://ai.google.dev/gemini-api/docs" },
  ytStudio: { label: "YouTube Studio", url: "https://studio.youtube.com" },
  metaAds: { label: "Meta Ads", url: "https://www.facebook.com/business/ads" },
  ytApi: { label: "YouTube Data API v3", url: "https://developers.google.com/youtube/v3" },
  metaGraph: { label: "Meta Graph API", url: "https://developers.facebook.com/docs/graph-api" },
  igApi: { label: "IG Content Publishing", url: "https://developers.facebook.com/docs/instagram-api/guides/content-publishing" },
  liApi: { label: "LinkedIn API", url: "https://learn.microsoft.com/en-us/linkedin/" },
  tiktok: { label: "TikTok Content Posting API", url: "https://developers.tiktok.com/doc/content-posting-api-get-started" },
};

// ------------------------------------------------------------
// ACCIONES · why (por qué), how (cómo), pil (a qué apunta), xp, h, res
// ------------------------------------------------------------
const GROUPS = [
  { id: "identidad", name: "Identidad de marca", tasks: [
    { id: "id-1", date: "2026-07-22", xp: 25, h: 3, pil: ["pos"], title: "Adoptar el brand kit ENCENDIDO en todas las piezas",
      why: "El kit ya existe y es la fuente de verdad: carbón, rojo señal (≤5%), Archivo Black, radius 2 px. Sin código visual fijo, cada pieza compite contra las demás; la repetición disciplinada construye reconocimiento.",
      how: ["Instalar tokens y SVG oficiales en las plantillas de cápsula, carrusel y miniatura", "Auditar toda pieza contra el checklist del manual (rojo ≤5%, texto sobre rojo en carbón, cero emojis)", "Congelar: ninguna pieza sale fuera del sistema"],
      res: "Todas las plantillas de contenido sobre el brand kit oficial", sources: [], integrations: ["Brand kit"] },
    { id: "id-2", date: "2026-07-23", xp: 30, h: 4, pil: ["pos"], title: "Redactar el manifiesto de una página (voz de marca)",
      why: "El manifiesto es el filtro editorial: directo, técnico, con filo, frases cortas. Si una pieza no defiende una de las 3 verdades, no se publica.",
      how: ["Escribir 1 página en la voz del manual: imperativo, sin jerga corporativa, sin disculpas", "Validarlo leyéndolo a cámara: si suena a consultora de diapositivas, reescribir", "Fijarlo como publicación ancla en LinkedIn"],
      res: "Manifiesto publicado que fija la voz", sources: [], integrations: [] },
    { id: "id-3", date: "2026-07-25", xp: 30, h: 4, pil: ["pos"], title: "Firma visual: sistema corriendo como sello de cada pieza",
      why: "El sistema real en pantalla (flujo, dashboard, terminal) es el activo visual imposible de copiar: nadie puede firmar con producción que no tiene.",
      how: ["Plantilla con línea de estado roja + captura del sistema sobre carbón", "Exportar 3 muestras y verificar legibilidad en móvil", "Regla: toda pieza técnica incluye el sistema corriendo, tratado con el kit"],
      res: "Sello visual: te reconocen antes de leer el nombre", sources: [SRC.n8nDocs], integrations: ["n8n", "Brand kit"] },
    { id: "id-4", date: "2026-07-27", xp: 20, h: 3, pil: ["pos"], title: "Set de grabación: alto contraste, texturas industriales",
      why: "El manual manda: sombras duras, metal, pantallas, cero stock de oficina. El set comunica dominio antes de la primera palabra.",
      how: ["Montar fondo carbón + corte de luz duro (acento rojo puntual, nunca dominante)", "Grabar test de 2 min con encuadre pantalla + cámara", "Iterar hasta montaje repetible en menos de 15 min"],
      res: "Set validado y replicable", sources: [], integrations: [] },
  ]},
  { id: "bot", name: "Bot de captación (el embudo propio)", tasks: [
    { id: "bot-1", date: "2026-07-24", xp: 40, h: 4, pil: ["aut", "solo"], title: "Desplegar Evolution API en Coolify (número dedicado)",
      why: "El bot convierte audiencia en base propia; sin él, todo el contenido drena hacia algoritmos ajenos. Número separado = riesgo de baneo aislado del operativo de Stratt-On.",
      how: ["Crear servicio en Coolify con la imagen oficial de Evolution API", "Vincular número nuevo exclusivo de marketing (QR)", "Configurar webhook global hacia n8n y probar ida y vuelta"],
      res: "Instancia estable con webhook activo", sources: [SRC.evo, SRC.coolify], integrations: ["Evolution API", "Coolify"] },
    { id: "bot-2", date: "2026-07-25", xp: 35, h: 3, pil: ["aut", "solo"], title: "Esquema Supabase: tabla de leads con scoring",
      why: "Un lead sin estructura es un chat perdido. El score decide quién recibe oferta empresarial, quién entra a lista de mentoría y quién a nutrición.",
      how: ["Crear tabla leads: origen, palabra clave, rol, tamaño, dolor, score, canal", "Activar RLS con escritura solo vía service role", "Vista de leads calientes (score sobre umbral)"],
      res: "CRM propio con calificación automática", sources: [SRC.supa, SRC.supaRLS], integrations: ["Supabase"] },
    { id: "bot-3", date: "2026-07-26", xp: 60, h: 6, pil: ["aut", "pos"], title: "Flujo n8n v1: palabra clave → Blueprint → calificación → registro",
      why: "El corazón del giro meta: el primer sistema que tu audiencia experimenta es tu propio embudo funcionando. La captación es simultáneamente la demo del servicio.",
      how: ["Webhook → detección de palabra clave → envío del Blueprint #1", "3 preguntas de calificación con espera de respuesta", "Insert en Supabase con score calculado", "Grabar pantalla de todo: material de la cápsula 01"],
      res: "Bot en producción + material de la solución 01", sources: [SRC.n8nDocs, SRC.evo], integrations: ["n8n", "Evolution API", "Supabase"] },
    { id: "bot-4", date: "2026-07-30", xp: 25, h: 2, pil: ["solo"], title: "Captura de email como paso final del bot",
      why: "WhatsApp es rentado a Meta. El email es el seguro de la base: si cambian las reglas, la relación sigue siendo tuya.",
      how: ["Paso final: «para enviarte la versión extendida»", "Validar formato y guardar en Supabase", "Etiquetar el lead como doble canal"],
      res: "Cada lead con respaldo fuera de Meta", sources: [SRC.supa], integrations: ["n8n", "Supabase"] },
    { id: "bot-5", date: "2026-08-20", xp: 45, h: 6, pil: ["aut", "mon"], title: "Secuencia de nutrición de 5 correos en n8n",
      why: "La nutrición convierte curiosos en compradores de mentoría sin consumir tus horas. Hacerla en n8n elimina el SaaS de email y alimenta la tesis.",
      how: ["Redactar los 5 correos: recurso, dolor, caso con métricas, prueba, segmentación", "Orquestar con Wait/Schedule + SMTP propio o Resend", "Registrar aperturas y clics en Supabase"],
      res: "Nutrición automática sin SaaS de email", sources: [SRC.n8nDocs], integrations: ["n8n", "SMTP"] },
    { id: "bot-6", date: "2026-08-27", xp: 35, h: 4, pil: ["pos", "mon"], title: "Canal de difusión de WhatsApp (opt-in explícito)",
      why: "El altavoz unidireccional que complementa a la comunidad: anuncios semanales con apertura muy superior al email en LATAM.",
      how: ["Crear canal y flujo de opt-in desde el bot", "Aprobar plantillas WABA para reenganche fuera de la ventana de 24 h", "Cadencia fija: 1 envío semanal de valor puro"],
      res: "Canal de difusión activo y creciendo con permiso", sources: [SRC.waba, SRC.wabaTpl], integrations: ["WhatsApp API"] },
    { id: "bot-7", date: "2026-09-04", xp: 50, h: 6, pil: ["pos", "solo"], title: "Dashboard público de métricas del embudo",
      why: "Mostrar métricas reales cada mes es el argumento que ningún competidor imita: transparencia radical como diferenciación.",
      how: ["Vistas SQL en Supabase: leads/semana, conversión, costo del stack", "Panel simple leyendo esas vistas", "Ritual mensual: mostrarlo en pantalla en una cápsula"],
      res: "Métricas en vivo convertidas en contenido", sources: [SRC.supa], integrations: ["Supabase", "n8n"] },
  ]},
  { id: "difusion", name: "Distribución multicanal + Comunidad", tasks: [
    { id: "df-1", date: "2026-07-31", xp: 25, h: 3, pil: ["pos"], title: "Matriz de formatos por plataforma (YT · IG · FB · TT · LI)",
      why: "Cada red premia un formato distinto; republicar lo mismo en las cinco es ser invisible en todas. La matriz decide una vez para no decidir cada semana.",
      how: ["Definir pieza, formato, duración y gancho por red", "Documentar specs: proporciones, duraciones, subtítulos, primer renglón del caption", "Fijar la matriz en el manual de contenido"],
      res: "Matriz de distribución fija que alimenta al publicador", sources: [], integrations: ["Brand kit"] },
    { id: "df-2", date: "2026-08-06", xp: 35, h: 3, pil: ["pos", "mon"], title: "Crear la comunidad de WhatsApp de la marca",
      why: "La comunidad es la plaza central: la base recibe primero cada publicación sin depender del alcance orgánico. También es el semillero de la mentoría a escala.",
      how: ["Crear comunidad sobre el número de marketing (grupos: anuncios, builders, general)", "Reglas de convivencia y bienvenida automatizada vía Evolution API", "Opt-in desde el bot: todo lead calificado recibe invitación"],
      res: "Comunidad activa con onboarding automático", sources: [SRC.evo, SRC.waba], integrations: ["Evolution API", "n8n"] },
    { id: "df-3", date: "2026-08-07", xp: 40, h: 4, pil: ["aut", "pos"], title: "Flujo n8n: dispersión automática de publicaciones",
      why: "Cada publicación debe llegar a la base sin anunciarla a mano. La dispersión propia es el multiplicador que no depende de algoritmos.",
      how: ["Trigger: fila «publicado» en la cola de Supabase", "Componer mensaje con gancho + enlace según la pieza", "Enviar a comunidad y canal vía Evolution API (máx. 1 aviso/día)"],
      res: "Toda publicación anunciada a la base en minutos", sources: [SRC.evo], integrations: ["n8n", "Evolution API", "Supabase"] },
    { id: "df-4", date: "2026-08-22", xp: 45, h: 6, pil: ["aut"], title: "Credenciales y APIs: YouTube Data, Meta Graph (IG + FB), LinkedIn",
      why: "Publicar a mano en 5 redes mata la cadencia de una empresa de 1 persona. Las credenciales son el peaje que se paga una sola vez.",
      how: ["Crear apps y tokens: YouTube Data v3, Meta Graph (IG + Pages), LinkedIn", "Scopes mínimos y renovación de tokens", "Guardar credenciales en n8n y publicar prueba por red"],
      res: "4 redes publicables por API desde n8n", sources: [SRC.ytApi, SRC.metaGraph, SRC.igApi, SRC.liApi], integrations: ["n8n", "YouTube", "Meta Graph", "LinkedIn"] },
    { id: "df-5", date: "2026-08-25", xp: 30, h: 4, pil: ["aut"], title: "TikTok: Content Posting API o cola semiautomática",
      why: "La API de TikTok exige aprobación y la cadencia no puede esperar burocracia. Plan A (API) y plan B (cola con notificación) desde el día uno.",
      how: ["Solicitar acceso a la Content Posting API", "Mientras: flujo n8n que deja video + caption listos y notifica para publicar en 2 taps", "Migrar a publicación directa al aprobarse"],
      res: "TikTok dentro de la cadencia sin fricción", sources: [SRC.tiktok], integrations: ["n8n", "TikTok"] },
    { id: "df-6", date: "2026-09-02", xp: 70, h: 10, pil: ["aut", "solo"], title: "Publicador multicanal en n8n (extensión del pipeline)",
      why: "El cierre del sistema: una pieza madre entra y seis destinos se llenan solos. La distribución self-hosted es ventaja operativa y caso de estudio a la vez.",
      how: ["Cola aprobada en Supabase → adaptación por red con Gemini (caption, hashtags, gancho)", "Publicar vía APIs: YouTube, IG, FB, LinkedIn (+ TikTok según plan)", "Registrar IDs/URLs en Supabase y disparar dispersión a la comunidad", "Grabar el sistema funcionando: es una solución de la semana"],
      res: "1 sesión semanal → 6 destinos publicados y avisados", sources: [SRC.gemini, SRC.n8nDocs], integrations: ["n8n", "Gemini API", "Supabase", "Evolution API"] },
    { id: "df-7", date: "2026-09-09", xp: 35, h: 4, pil: ["solo", "mon"], title: "Atribución por red: palabras clave y UTMs",
      why: "Sin atribución no sabes qué red trae compradores y cuál solo vistas. La palabra clave de origen convierte al bot en tu analítica.",
      how: ["Palabra clave distinta por red (BLUEPRINT-YT, -TT, -IG, -LI, -FB)", "UTMs en todo enlace saliente", "Columna «origen» en Supabase + vista de conversión por plataforma"],
      res: "Cada lead con red de origen medible", sources: [SRC.supa], integrations: ["n8n", "Supabase"] },
    { id: "df-8", date: "2026-10-03", xp: 30, h: 3, pil: ["solo"], title: "Optimización por datos: matriz de rendimiento por red",
      why: "Una persona no sostiene 5 redes con el mismo esfuerzo. Los datos deciden dónde se duplica la apuesta y dónde se publica en piloto automático.",
      how: ["Vista en Supabase: leads, conversión y esfuerzo por red", "Clasificar: apostar / mantener / automatizar sin mirar", "Ajustar la matriz de formatos con el veredicto"],
      res: "Esfuerzo redistribuido según conversión real", sources: [], integrations: ["Supabase"] },
  ]},
  { id: "t1", name: "Temporada 1 · «Construyendo la máquina»", tasks: [
    { id: "t1-1", date: "2026-07-29", xp: 60, h: 8, pil: ["pos"], title: "Grabar soluciones 01 y 02 en lote",
      why: "Grabar por lotes protege la cadencia contra tus dos roles ejecutivos. Las dos primeras cápsulas fijan el estándar de toda la serie.",
      how: ["Guion con payoff en pantalla en los primeros 3 segundos", "Sesión única para ambas soluciones (cápsula + video soporte)", "Editar con plantillas del kit y dejar programadas"],
      res: "Soluciones 01 y 02 en cola de publicación", sources: [SRC.ytStudio], integrations: ["YouTube"] },
    { id: "t1-3", date: "2026-08-08", xp: 40, h: 4, pil: ["pos"], title: "Publicar la tabla de costos: stack propio vs SaaS en USD",
      why: "Una cifra concreta viaja más lejos que cualquier opinión. Es la tesis de soberanía convertida en número citable.",
      how: ["Calcular costo real mensual del stack (VPS + Coolify)", "Cotizar el equivalente SaaS en USD", "Publicar comparativa como carrusel + bitácora"],
      res: "La pieza de autoridad citable de la temporada", sources: [], integrations: [] },
    { id: "t1-4", date: "2026-08-30", xp: 70, h: 10, pil: ["aut", "solo"], title: "Pipeline editorial automatizado en n8n",
      why: "La prueba viviente de la empresa de 1 persona: la semana completa de contenido con ~2 horas humanas. Sin esto, la cadencia muere en octubre.",
      how: ["Transcribir cada video soporte vía API", "Generar borradores de derivados con Gemini", "Cola de revisión humana en Supabase + entrega al publicador"],
      res: "Cascada semanal en ~2 h humanas", sources: [SRC.gemini, SRC.n8nDocs], integrations: ["n8n", "Gemini API", "Supabase"] },
    { id: "t1-7", date: "2026-09-25", xp: 45, h: 6, pil: ["pos", "mon"], title: "Vitrina de casos empresariales: 3 sistemas de clientes corriendo",
      why: "La escalada de mentorías y el ticket empresarial se venden sobre una sola prueba: que ejecutas soluciones empresariales que de verdad funcionan. Entregado, documentado y corriendo — no promesas.",
      how: ["Seleccionar 3 sistemas entregados con autorización (cláusula de caso)", "Documentar cada uno: problema → sistema → métricas de operación real (horas ahorradas, plata, uptime)", "Publicarlos como página + cápsulas y usarlos en toda oferta comercial"],
      res: "3 casos empresariales verificables publicados", sources: [SRC.supa], integrations: ["Supabase", "Brand kit"] },
    { id: "t1-6", date: "2026-09-16", xp: 15, h: 1, pil: ["solo"], title: "Checkpoint de cadencia (regla dura)",
      why: "Las series mueren por inconsistencia, no por frecuencia baja. Esta regla decide con datos y sin culpa.",
      how: ["Revisar cadencia real de las primeras 8 semanas", "Decidir: sostener semanal o pasar a quincenal", "Documentar la decisión en la bitácora del panel"],
      res: "Decisión de cadencia tomada con datos", sources: [], integrations: [] },
    { id: "t1-5", date: "2026-10-10", xp: 50, h: 6, pil: ["pos", "mon"], title: "Cierre T1: la máquina completa, sus costos y sus fallos",
      why: "Cerrar el arco con métricas y fallos reales convierte la temporada en credencial comercial. La audiencia vio nacer el sistema donde está registrada.",
      how: ["Compilar métricas del dashboard", "Guion de retrospectiva: qué funcionó, qué falló, cuánto costó", "Publicar con CTA a Power Hour y lista de mentoría"],
      res: "Cierre de arco = prueba social estructural", sources: [], integrations: ["YouTube"] },
  ]},
  { id: "t2", name: "Temporada 2 · «Anatomía de Wabid»", tasks: [
    { id: "t2-1", date: "2026-10-17", xp: 35, h: 5, pil: ["pos"], title: "Guion del arco T2: de proyecto a producto",
      why: "Sin arco narrativo, T2 sería un demo largo. El guion convierte a Wabid en historia de producto con tensión real: ¿se licencia o no?",
      how: ["Mapear las 11 soluciones: pujas, catálogo, bidireccionalidad, carga", "Definir el cliffhanger de cada semana", "Calendarizar grabación por lotes quincenal"],
      res: "11 soluciones guionadas con tensión narrativa", sources: [], integrations: [] },
    { id: "t2-2", date: "2026-10-24", xp: 55, h: 6, pil: ["pos", "mon"], title: "Solución 12: WhatsApp operando una plataforma de subastas",
      why: "La pieza ancla instala la credencial empresarial definitiva: una interfaz familiar moviendo software complejo real, en producción.",
      how: ["Preparar demo con datos reales de Wabid", "Grabar el flujo completo: puja → sistema → confirmación", "Cerrar con la pregunta comercial: ¿qué sector lo necesita?"],
      res: "Wabid como credencial pública", sources: [SRC.evo], integrations: ["Evolution API", "Supabase", "n8n"] },
    { id: "t2-3", date: "2026-11-21", xp: 60, h: 8, pil: ["pos"], title: "Prueba de fuego: Wabid bajo carga",
      why: "El contenido técnico profundo es incopiable para quien no tiene el producto, y a la vez es QA real antes de licenciar.",
      how: ["Simular concurrencia de pujas y medir", "Documentar colas, integridad y decisiones de arquitectura", "Publicar hallazgos, incluidos los fallos"],
      res: "Autoridad incopiable + hallazgos de producto", sources: [SRC.supa], integrations: ["Supabase"] },
    { id: "t2-4", date: "2026-12-19", xp: 45, h: 4, pil: ["mon"], title: "Documentar primeras conversaciones de licenciamiento",
      why: "Mostrar la negociación (anonimizada) crea urgencia de mercado y valida el precio de la licencia en público.",
      how: ["Prospectar: remates ganaderos, casas de subastas, liquidadores", "Registrar objeciones y aprendizajes", "Publicar el estado del pipeline como contenido"],
      res: "3 o más conversaciones de licencia activas y visibles", sources: [], integrations: [] },
    { id: "t2-5", date: "2027-01-02", xp: 40, h: 5, pil: ["pos"], title: "Pieza especial: planeación pública 2027",
      why: "El accountability público es el gancho de retención hacia el próximo año: la audiencia vuelve a ver si cumpliste.",
      how: ["Compilar resultados del semestre", "Declarar compromisos medibles de H1-2027 (incluida la meta de 500 mentoreados)", "Publicar y fijar como pieza ancla"],
      res: "Compromisos 2027 publicados", sources: [], integrations: ["YouTube"] },
  ]},
  { id: "money", name: "Monetización · Mentoría a escala + Empresarial", tasks: [
    { id: "mo-1", date: "2026-09-23", xp: 50, h: 5, pil: ["mon"], title: "Lanzar Power Hour (diagnóstico pago)",
      why: "El primer peaje del embudo: valida que la audiencia paga por tu criterio antes de escalar. Filtra curiosos de compradores.",
      how: ["Oferta: 60 min de diagnóstico de operación + informe", "Cobro vía Wompi, agenda vía Cal.com", "Ofrecer solo a leads con score alto"],
      res: "3 o más diagnósticos vendidos: primer ingreso del embudo", sources: [SRC.wompi], integrations: ["Supabase", "Wompi"] },
    { id: "mo-2", date: "2026-09-30", xp: 45, h: 4, pil: ["mon"], title: "Oferta empresarial Stratt-On: sistema entregado y corriendo",
      why: "El decisor precalentado por la serie y la vitrina de casos cierra en una llamada. La promesa es la del manual: entregado, documentado y corriendo. Siguiente.",
      how: ["Definir paquete: diagnóstico → implementación → retainer, con casos verificables como respaldo", "El bot enruta perfil «decisor con presupuesto» a la agenda", "Guion de llamada de cierre (no de venta)"],
      res: "6 o más diagnósticos/mes agendados desde el bot", sources: [SRC.calcom], integrations: ["Cal.com", "n8n"] },
    { id: "mo-3", date: "2026-10-21", xp: 80, h: 15, pil: ["mon", "pos"], title: "MENTORÍA ON · Cohorte Fundadora (10 plazas)",
      why: "El primer eslabón de la escalada masiva: valida el programa, fabrica testimonios y define el material que luego se entregará a 50+ sin tus horas. Tu credencial pedagógica universitaria es la ventaja que el nicho no tiene.",
      how: ["Diseñar 6 semanas: del estado manual al estado encendido (despliegue, operación, costos, escalado)", "Lanzamiento semilla a comunidad y base con precio fundador", "Documentar TODO el programa: cada sesión es material de la versión a escala"],
      res: "10/10 plazas: programa validado y grabado", sources: [SRC.n8nHost, SRC.coolify], integrations: ["Coolify", "n8n"] },
    { id: "mo-7", date: "2026-12-02", xp: 85, h: 16, pil: ["mon", "solo"], title: "MENTORÍA ON · Cohorte 2 a escala (50+ plazas)",
      why: "La escalada masiva exige que la entrega no dependa de tus horas: contenido grabado, comunidad, sesiones grupales y seguimiento automatizado convierten la mentoría en producto escalable.",
      how: ["Empaquetar la Fundadora: grabaciones, guías y blueprints por módulo", "Entrega automatizada: acceso, onboarding, tareas y seguimiento vía bot + Supabase", "Lanzar 50+ plazas a lista de espera, comunidad y las 5 redes con testimonios"],
      res: "50+ mentoreados con entrega mayormente automatizada", sources: [SRC.supa], integrations: ["n8n", "Supabase", "Evolution API"] },
    { id: "mo-4", date: "2026-11-25", xp: 70, h: 12, pil: ["mon", "solo"], title: "Abrir La Bóveda en evergreen",
      why: "Ingreso que no consume tus horas y material de apoyo de la mentoría. La empresa de 1 persona necesita ingresos sin agenda.",
      how: ["Curar catálogo con los blueprints más pedidos + feedback de la Fundadora", "Acceso y cobro sobre Supabase + Wompi", "Regla: solo abre porque la demanda gratuita la validó"],
      res: "Primer MRR documentado", sources: [SRC.wompi, SRC.supa], integrations: ["Supabase", "Wompi"] },
    { id: "mo-5", date: "2026-12-09", xp: 30, h: 3, pil: ["mon", "pos"], title: "Testimonios en video de la Fundadora",
      why: "Sin prueba social, la Cohorte 2 y la Bóveda son landings frías. Los testimonios son el combustible de la escalada.",
      how: ["Grabar 5 o más testimonios mostrando el sistema de cada mentoreado corriendo", "Editar en formato corto con el kit", "Integrarlos en landing, las 5 redes y la comunidad"],
      res: "5 o más testimonios editados en la landing", sources: [], integrations: ["Brand kit"] },
    { id: "mo-8", date: "2026-12-23", xp: 60, h: 8, pil: ["mon", "aut"], title: "Mentoría evergreen 2027: lista de espera y admisión automatizada",
      why: "El objetivo no es una cohorte llena: es un sistema de admisión permanente. La lista de espera convierte cada cápsula en demanda futura medible.",
      how: ["Flujo de lista de espera en el bot: palabra clave MENTORIA por red", "Admisión automatizada: calificación, cupo, cobro (Wompi) y onboarding sin intervención", "Meta pública 2027: 500 mentoreados, declarada en el informe de cierre"],
      res: "Lista de espera creciendo sola + admisión lista para 2027", sources: [SRC.wompi], integrations: ["n8n", "Supabase", "Wompi"] },
    { id: "mo-6", date: "2026-12-25", xp: 35, h: 4, pil: ["mon"], title: "Pauta en Meta solo sobre las 3 cápsulas ganadoras",
      why: "Pautar sobre ganadores orgánicos compra alcance con riesgo mínimo. Destino: la lista de espera de mentoría, no el feed.",
      how: ["Identificar las 3 cápsulas con mejor conversión al bot (atribución por palabra clave)", "Campaña acotada de remarketing a la base + lookalike", "Medir CAC contra la línea base orgánica"],
      res: "CAC medido con datos, no con fe", sources: [SRC.metaAds], integrations: ["Meta Ads"] },
  ]},
  { id: "infra", name: "Infraestructura y soberanía", tasks: [
    { id: "in-1", date: "2026-08-04", xp: 25, h: 2, pil: ["solo"], title: "Cláusula «caso de estudio» en contratos nuevos",
      why: "Sin permiso contractual no hay vitrina de casos empresariales. Se firma antes de necesitarlo.",
      how: ["Redactar cláusula de uso anonimizado con revisión del cliente", "Incluirla en toda propuesta desde julio", "Registro de qué cliente autorizó qué"],
      res: "Riesgo de confidencialidad cubierto", sources: [], integrations: [] },
    { id: "in-2", date: "2026-09-20", xp: 40, h: 5, pil: ["aut", "solo"], title: "Desplegar Cal.com self-hosted",
      why: "Cada pieza de SaaS rentado que reemplazas es margen, contenido y coherencia. La agenda es la puerta del ticket empresarial: debe ser tuya.",
      how: ["Desplegar Cal.com en Coolify", "Conectar a n8n: confirmaciones, recordatorios y scoring", "Migrar todos los enlaces de agenda"],
      res: "Agenda soberana integrada al CRM", sources: [SRC.calcom, SRC.coolify], integrations: ["Cal.com", "Coolify", "n8n"] },
    { id: "in-3", date: "2026-09-27", xp: 40, h: 5, pil: ["mon", "solo"], title: "Integrar Wompi/Bold para cobros en pesos",
      why: "Cobrar en COP sobre pasarela local cierra el argumento de soberanía en la caja: facturas y cobras en pesos.",
      how: ["Crear cuenta y llaves de Wompi/Bold", "Flujo n8n: pago confirmado → acceso/agenda + registro en Supabase", "Probar el ciclo completo con un cobro real"],
      res: "Caja en COP de punta a punta", sources: [SRC.wompi], integrations: ["Wompi", "n8n"] },
    { id: "in-4", date: "2026-10-30", xp: 35, h: 4, pil: ["aut", "solo"], title: "Chatwoot como bandeja de leads calientes",
      why: "El bot escala; tu atención no. Chatwoot decide qué conversación merece a un humano.",
      how: ["Conectar Evolution API a Chatwoot", "Regla en n8n: score sobre umbral → bandeja humana", "SLA personal: leads calientes en menos de 4 h"],
      res: "Cero leads calientes perdidos", sources: [SRC.chatwoot], integrations: ["Chatwoot", "Evolution API", "n8n"] },
    { id: "in-5", date: "2026-12-30", xp: 30, h: 4, pil: ["solo", "pos"], title: "Auditoría semestral del stack",
      why: "Convierte la tesis self-hosted en cifra contable publicable. El argumento de soberanía cierra con tu propia contabilidad.",
      how: ["Inventariar consumos, licencias y costos reales", "Comparar contra el equivalente SaaS en USD", "Publicar la cifra en el informe de cierre"],
      res: "Cifra pública: costo real vs equivalente SaaS", sources: [], integrations: [] },
  ]},
  { id: "kpi", name: "Control mensual (KPIs)", tasks: [
    { id: "kp-1", date: "2026-08-15", xp: 20, h: 2, pil: ["solo"], title: "Revisión julio: bot + comunidad operando, soluciones 1–3 al aire",
      why: "La revisión mensual es el sistema operativo del fundador solitario: decide con datos. Julio fija la línea base del semestre.",
      how: ["Extraer métricas del dashboard y registrar el feedback de julio en el panel", "Registrar retención de video soporte (meta sobre 45%) y primeros leads", "Ajustar agosto con lo aprendido"],
      res: "Línea base documentada + feedback registrado", sources: [], integrations: [] },
    { id: "kp-2", date: "2026-09-15", xp: 20, h: 2, pil: ["solo"], title: "Revisión agosto: publicador multicanal + pipeline",
      why: "Agosto valida las automatizaciones críticas: si el publicador no ahorra horas y los blueprints no se importan, se corrige aquí.",
      how: ["Medir tasa de importación de blueprints (meta sobre 30%)", "Verificar publicación automática en 5 redes y dispersión a la comunidad", "Calcular costo del stack vs SaaS y publicarlo"],
      res: "Distribución verificada + primer informe de costos", sources: [], integrations: [] },
    { id: "kp-3", date: "2026-10-15", xp: 25, h: 2, pil: ["solo"], title: "Revisión septiembre: flujo comercial + vitrina",
      why: "Septiembre es donde la atención se convierte en caja. Sin diagnósticos y sin vitrina de casos, octubre no puede lanzar la Fundadora.",
      how: ["Verificar 250+ leads/mes y 6+ diagnósticos agendados", "Confirmar vitrina de 3 casos empresariales publicada", "Go/no-go de la Cohorte Fundadora"],
      res: "Embudo comercial medido de punta a punta", sources: [], integrations: [] },
    { id: "kp-4", date: "2026-11-15", xp: 25, h: 2, pil: ["solo"], title: "Revisión octubre: Fundadora 10/10",
      why: "Si la Fundadora no llena, la señal es de oferta o de audiencia. Diagnosticar con datos antes de intentar la escala de 50+.",
      how: ["Verificar plazas vendidas y asistencia real", "Registrar objeciones de quienes no compraron", "Veredicto documentado: ¿la Cohorte 2 va con 50+?"],
      res: "Veredicto del programa con datos", sources: [], integrations: [] },
    { id: "kp-5", date: "2026-12-15", xp: 25, h: 2, pil: ["solo"], title: "Revisión noviembre: Cohorte 2 + Bóveda",
      why: "Noviembre mide si la escalada nació sana: entrega automatizada funcionando y MRR inicial de la Bóveda.",
      how: ["Medir plazas de la Cohorte 2 y carga real de tus horas por mentoreado", "Documentar MRR inicial y conversión de landing (sobre 2.5%)", "Ajustar oferta o entrega con esos datos"],
      res: "Escalada medida: horas/mentoreado y MRR", sources: [], integrations: [] },
    { id: "kp-6", date: "2027-01-04", xp: 40, h: 4, pil: ["solo", "pos"], title: "Cierre H2: informe público de resultados",
      why: "La marca rinde cuentas en público: el acto final de transparencia radical y el contenido de mayor confianza del año.",
      how: ["Compilar todos los KPIs y el feedback acción por acción", "Informe honesto: cumplido, fallado, aprendido — y la meta de 500 mentoreados 2027", "Publicarlo en las 5 redes y la comunidad"],
      res: "Informe H2 publicado", sources: [], integrations: [] },
  ]},
];

const ALL_TASKS = GROUPS.flatMap((g) => g.tasks.map((t) => ({ ...t, groupId: g.id, groupName: g.name })));

function fridaysBetween(a, b) {
  const out = []; const d = new Date(a + "T12:00:00"); const end = new Date(b + "T12:00:00");
  while (d <= end) { if (d.getDay() === 5) out.push(d.toISOString().slice(0, 10)); d.setDate(d.getDate() + 1); }
  return out;
}
const EPISODES = []; let epN = 1;
const epTpl = (n, date, season) => ({
  id: `ep-${String(n).padStart(2, "0")}`, date, xp: 40, h: 5, pil: ["pos"], kind: "cadencia",
  groupId: season === 1 ? "t1" : "t2", groupName: season === 1 ? "Temporada 1" : "Temporada 2",
  title: `EP-${String(n).padStart(2, "0")} · Solución de la semana (${season === 1 ? "T1: soluciones micro de negocio" : "T2: procesos y negocio completo"})`,
  why: "La cadencia semanal es el activo compuesto: cada viernes una solución de negocio real ocurre en pantalla en menos de 45 s, y el video soporte de YouTube captura al que quiere profundizar — el futuro mentoreado. Romper la serie cuesta más que una cápsula floja.",
  how: ["Publicar la cápsula madre (<45 s): problema → solución en pantalla → impacto en plata → CTA a palabra clave", "Subir el video soporte a YouTube con el «cómo se hizo»", "Disparar el publicador multicanal (TikTok, IG, FB, LinkedIn) y la dispersión a la comunidad", "Cargar el blueprint de la semana en el bot"],
  res: "Cápsula en 4 redes + soporte en YouTube + comunidad avisada + blueprint alimentando el CRM", sources: [], integrations: ["YouTube", "n8n", "Evolution API"],
});
fridaysBetween("2026-08-01", "2026-10-10").forEach((d) => EPISODES.push(epTpl(epN++, d, 1)));
fridaysBetween("2026-10-24", "2027-01-02").forEach((d) => EPISODES.push(epTpl(epN++, d, 2)));

const TIMELINE = [...ALL_TASKS.map((t) => ({ ...t, kind: "accion" })), ...EPISODES].sort((a, b) => a.date.localeCompare(b.date) || (a.kind === "cadencia" ? 1 : -1));
const ITEM_BY_ID = Object.fromEntries(TIMELINE.map((t) => [t.id, t]));
const TOTAL_ITEMS = TIMELINE.length;
const TOTAL_XP = TIMELINE.reduce((a, t) => a + t.xp, 0);
const TOTAL_H = TIMELINE.reduce((a, t) => a + t.h, 0);

const RANKS = [
  { min: 0, name: "MODO MANUAL", d: "Todo depende de tus manos" },
  { min: 400, name: "PRIMER CIRCUITO", d: "Los primeros sistemas responden solos" },
  { min: 1000, name: "SISTEMA ENCENDIDO", d: "La máquina publica, capta y avisa sin ti" },
  { min: 1750, name: "OPERACIÓN AUTÓNOMA", d: "Venta y entrega escalan sin escalar tus horas" },
  { min: 2600, name: "NIVEL DIOS · TODO ENCENDIDO", d: "El sistema factura, distribuye, mentorea y se documenta solo" },
];
const rankFor = (xp) => RANKS.reduce((acc, r) => (xp >= r.min ? r : acc), RANKS[0]);
const nextRank = (xp) => RANKS.find((r) => r.min > xp) || null;

const epsDone = (d, a, b) => { let n = 0; for (let i = a; i <= b; i++) if (d[`ep-${String(i).padStart(2, "0")}`]) n++; return n; };
const grp = (id) => GROUPS.find((g) => g.id === id);
const ACHIEVEMENTS = [
  { id: "ac-1", name: "PRIMER DESPLIEGUE", d: "Bot v1 en producción (Evolution + Supabase + n8n)", test: (d) => d["bot-1"] && d["bot-2"] && d["bot-3"] },
  { id: "ac-2", name: "EN EL AIRE", d: "Solución 01 publicada con su cascada completa", test: (d) => d["ep-01"] },
  { id: "ac-3", name: "LA PLAZA CENTRAL", d: "Comunidad de WhatsApp activa con dispersión automática", test: (d) => d["df-2"] && d["df-3"] },
  { id: "ac-4", name: "SOBERANÍA CON CIFRAS", d: "Tabla de costos stack propio vs SaaS publicada", test: (d) => d["t1-3"] },
  { id: "ac-5", name: "LA MÁQUINA VIVE", d: "Bot de captación completo: embudo 100% propio", test: (d) => grp("bot").tasks.every((t) => d[t.id]) },
  { id: "ac-6", name: "RED DE DISTRIBUCIÓN", d: "Publicador multicanal operando en las 5 redes", test: (d) => d["df-4"] && d["df-6"] },
  { id: "ac-7", name: "CADENCIA DE HIERRO", d: "8 soluciones de T1 sin romper la serie", test: (d) => epsDone(d, 1, 11) >= 8 },
  { id: "ac-8", name: "PRUEBA EMPRESARIAL", d: "Vitrina de 3 casos de clientes corriendo, publicada", test: (d) => d["t1-7"] },
  { id: "ac-9", name: "FLUJO COMERCIAL", d: "Power Hour + oferta empresarial activas", test: (d) => d["mo-1"] && d["mo-2"] },
  { id: "ac-10", name: "TEMPORADA 1 COMPLETA", d: "Acciones y 11 soluciones de T1 ejecutadas", test: (d) => grp("t1").tasks.every((t) => d[t.id]) && epsDone(d, 1, 11) === 11 },
  { id: "ac-11", name: "FUNDADORA LLENA", d: "10/10 plazas de MENTORÍA ON vendidas y verificadas", test: (d) => d["mo-3"] && d["kp-4"] },
  { id: "ac-12", name: "ESCALA MASIVA", d: "Cohorte 2 con 50+ plazas y entrega automatizada", test: (d) => d["mo-7"] },
  { id: "ac-13", name: "ADMISIÓN ENCENDIDA", d: "Lista de espera evergreen + admisión automatizada 2027", test: (d) => d["mo-8"] },
  { id: "ac-14", name: "PRIMER MRR", d: "La Bóveda abierta con ingreso recurrente", test: (d) => d["mo-4"] },
  { id: "ac-15", name: "STACK SOBERANO", d: "Infraestructura completa: cero dependencias críticas", test: (d) => grp("infra").tasks.every((t) => d[t.id]) },
  { id: "ac-16", name: "TRANSPARENCIA RADICAL", d: "Las 6 revisiones mensuales con feedback registrado", test: (d) => grp("kpi").tasks.every((t) => d[t.id]) },
];

const MONTHS_META = [
  { key: "2026-07", label: "JULIO", foco: "Fundación: brand kit aplicado, bot en producción, comunidad abierta con dispersión automática y las primeras 3 soluciones al aire. Nada se vende: se enciende la máquina.", entrega: "Bot v1 capturando leads · Comunidad + dispersión activas · Soluciones 1–3" },
  { key: "2026-08", label: "AGOSTO", foco: "Automatización profunda: nutrición, publicador multicanal (5 redes), atribución por red y pipeline editorial. El sistema publica y avisa sin ti.", entrega: "Publicador en 5 redes · Pipeline editorial · Dashboard público" },
  { key: "2026-09", label: "SEPTIEMBRE", foco: "Prueba empresarial y apertura comercial: vitrina de 3 casos de clientes corriendo, cierre de T1 con costos y fallos reales, primeros cobros sobre agenda y pasarela propias.", entrega: "Vitrina empresarial · Primeros ingresos · Cal.com + Wompi" },
  { key: "2026-10", label: "OCTUBRE", foco: "MENTORÍA ON arranca: Cohorte Fundadora (10 plazas) validando el programa mientras T2 (Wabid) instala la credencial de producto. Todo el programa se documenta para la escala.", entrega: "Fundadora 10/10 · T2 al aire · Chatwoot enrutando" },
  { key: "2026-11", label: "NOVIEMBRE", foco: "Escalada masiva: Cohorte 2 con 50+ plazas y entrega automatizada, la Bóveda abre en evergreen con testimonios de la Fundadora, Wabid demuestra músculo bajo carga.", entrega: "Cohorte 2 (50+) · Primer MRR · Testimonios" },
  { key: "2026-12", label: "DICIEMBRE", foco: "Sistema de admisión permanente: lista de espera evergreen con meta pública de 500 mentoreados 2027, pipeline de licencias de Wabid visible y rendición de cuentas del semestre.", entrega: "Admisión evergreen · Informe H2 público · 3+ conversaciones de licencia" },
  { key: "2027-01", label: "ENERO 2027", foco: "Cierre y traspaso: última pieza especial de planeación pública y el informe H2 se publican ya iniciado el nuevo año. Arranca el ciclo evergreen de mentoría con la meta de 500.", entrega: "Pieza 2027 publicada · Informe H2 público" },
];

// ------------------------------------------------------------
// PARRILLA · ritmo semanal + temas + directrices + ángulos + redes
// ------------------------------------------------------------
const WEEK_RHYTHM = [
  { dia: "LUN", pieza: "Bitácora de negocio", destino: "LinkedIn · X", req: [], nota: "Una decisión o resultado de la semana en lenguaje de negocio (cifra incluida). 15 min, sin diseño." },
  { dia: "MAR", pieza: "Cápsula <45 s · variante A", destino: "TikTok · IG · FB", req: ["t1-4", "df-6"], nota: "La solución de la semana re-cortada: payoff primero, cortes rápidos, texto en pantalla." },
  { dia: "MIÉ", pieza: "Autopsia de la solución (carrusel)", destino: "LinkedIn", req: ["id-3", "t1-4"], nota: "El antes/después del negocio en 5 slides: problema → solución → cifra. Cero jerga." },
  { dia: "JUE", pieza: "Cápsula <45 s · variante B + historias", destino: "TikTok · IG · FB", req: ["t1-4", "df-6"], nota: "Otro gancho sobre la misma solución + detrás de escena en historias." },
  { dia: "VIE", pieza: "SOLUCIÓN DE LA SEMANA: cápsula madre + video soporte", destino: "Cápsula → TT/IG/FB/LI · Soporte → YouTube", req: ["bot-3", "df-3", "df-6"], nota: "La cápsula muestra la solución ocurriendo (<45 s). El video soporte explica el cómo. Blueprint al bot + aviso a la comunidad." },
  { dia: "SÁB", pieza: "Aviso semanal / pieza de conexión", destino: "Canal de difusión · Comunidad", req: ["bot-6", "df-2"], nota: "Resumen de la semana. 1 vez al mes: pieza de conexión (MTB o asado al barril) para humanizar." },
  { dia: "DOM", pieza: "Sin publicación", destino: "—", req: [], nota: "Quincenal: sesión de grabación por lotes (2 soluciones + variantes de cápsula)." },
];

const EP_TOPICS = {
  "ep-01": { tema: "Tu negocio responde WhatsApp a las 2 a.m. y cierra la venta (sin ti)", req: ["id-1", "id-4", "bot-1", "bot-2", "bot-3"] },
  "ep-02": { tema: "Preguntan el precio y la cotización llega en 30 segundos", req: ["bot-3"] },
  "ep-03": { tema: "Esto me cuesta $18 al mes; la versión «de agencia» cuesta $340", req: ["t1-3"] },
  "ep-04": { tema: "Cada cliente que escribe queda registrado y calificado solo", req: ["bot-2", "bot-4"] },
  "ep-05": { tema: "El seguimiento que nadie hace: 5 mensajes que venden solos", req: ["bot-5"] },
  "ep-06": { tema: "Grabo 1 video y aparece en 5 redes sin tocar nada", req: ["df-4", "df-6"] },
  "ep-07": { tema: "Los números reales de mi primer mes, en pantalla", req: ["bot-7", "df-7"] },
  "ep-08": { tema: "Una comunidad que se entera de todo antes que el algoritmo", req: ["df-2", "df-3"] },
  "ep-09": { tema: "Sistemas de empresa que de verdad funcionan: 3 clientes, 3 máquinas corriendo", req: ["t1-7", "in-1"] },
  "ep-10": { tema: "Qué red me trae clientes de verdad (los datos, no la moda)", req: ["df-7", "df-8"] },
  "ep-11": { tema: "La máquina completa: cuánto costó, cuánto ahorró, qué falló", req: ["t1-5", "kp-1", "kp-2"] },
  "ep-12": { tema: "Una subasta completa operada por WhatsApp (Wabid en vivo)", req: ["t2-1", "t2-2"] },
  "ep-13": { tema: "El remate no se cae: 200 pujas al mismo tiempo", req: ["t2-1"] },
  "ep-14": { tema: "El catálogo que se arma solo cada vez que subes un producto", req: ["t2-1"] },
  "ep-15": { tema: "Comprador y vendedor conectados sin un humano en el medio", req: ["t2-1", "in-4"] },
  "ep-16": { tema: "Prueba de fuego: reventé mi propio sistema a propósito", req: ["t2-3"] },
  "ep-17": { tema: "Dentro de MENTORÍA ON: 10 negocios pasando de manual a encendido", req: ["mo-3"] },
  "ep-18": { tema: "Los 7 errores que les cuestan plata a los negocios que automatizan", req: ["mo-3", "kp-4"] },
  "ep-19": { tema: "5 mentoreados, 5 sistemas corriendo: antes y después con números", req: ["mo-5"] },
  "ep-20": { tema: "Vendiendo el sistema: cómo se licencia un producto nacido en WhatsApp", req: ["t2-4"] },
  "ep-21": { tema: "Se abre la lista 2027: mentoría con admisión automática (meta: 500)", req: ["mo-7", "mo-8"] },
  "ep-22": { tema: "Rendición de cuentas: los números del semestre + plan 2027", req: ["t2-5", "kp-6", "in-5"] },
};

const BANK_GANCHOS = [
  "Son las 2 a.m. y mi negocio acaba de cerrar una venta",
  "El cliente pidió el precio hace 28 segundos: ya tiene la cotización",
  "Esto que ves cuesta $18 al mes, no $340",
  "Mira la hora: nadie está trabajando y el pedido se confirmó solo",
  "Deja de perder ventas por responder tarde (mira esto)",
  "Le pedí a mi negocio el reporte del día y me lo mandó al WhatsApp",
  "Este remate tiene 200 personas pujando y ningún empleado",
  "Una empresa real, un sistema real, corriendo ahora mismo",
  "Rompí mi propio sistema a propósito: esto pasó",
  "10 negocios entraron manuales; así van saliendo encendidos",
];
const BANK_BITACORAS = [
  "El problema de negocio que resolví esta semana y su cifra",
  "Lo que un cliente dejaba de ganar por hacer esto a mano",
  "Un costo oculto que encontré auditando un negocio",
  "Antes/después de la semana: minutos ahorrados, en plata",
  "Una objeción real de un dueño de negocio y mi respuesta",
  "Lo que aprendí (o la herramienta nueva que dominé) para resolver el caso",
  "Métricas de la semana: consultas, clientes nuevos, red de origen",
  "Lo que la mentoría me enseñó a mí esta semana",
];

const DIRECTRICES = [
  { k: "PÚBLICO", d: "Dueños de negocio, comerciantes e independientes — NO técnicos. Nunca abrir con la herramienta; abrir con su dolor: pedidos perdidos, cartera vencida, agenda vacía, responder a medianoche." },
  { k: "LA SOLUCIÓN ES LA PROTAGONISTA", d: "Se muestra ocurriendo en un teléfono real. La herramienta ni se nombra en la cápsula. El «cómo se hizo» completo vive en el video soporte de YouTube." },
  { k: "PRUEBA EMPRESARIAL", d: "El diferencial es ejecutar soluciones de empresa que de verdad funcionan: sistema entregado, documentado y corriendo. Cada caso publicado debe ser verificable (métrica real, cliente real bajo cláusula)." },
  { k: "ESTRUCTURA DE CÁPSULA (<45 S)", d: "1 problema, 1 solución, 1 resultado. 0–3 s: payoff o dolor · 3–25 s: la solución en pantalla · 25–40 s: el impacto en plata/tiempo · 40–45 s: CTA a la palabra clave." },
  { k: "DE LO MICRO A LO MACRO", d: "Primero soluciones de 1 tarea (responder, cotizar, cobrar), luego procesos completos, luego el negocio entero operando solo. La parrilla ya está ordenada así." },
  { k: "PRUEBA SIEMPRE VISIBLE", d: "Cifra en pesos, recibo, hora en pantalla, contador de mensajes. Regla dura: sin prueba visible, la cápsula no se publica." },
  { k: "SIN LÍMITE DE HERRAMIENTAS", d: "Si la mejor solución exige aprender algo nuevo, se aprende — y ese aprendizaje también es contenido. La entrega manda, no el stack conocido." },
  { k: "CERO JERGA", d: "Prohibido decir webhook, API, flujo, endpoint. Se dice: «el sistema avisa», «se conecta», «ocurre solo». Test: ¿lo entiende un tendero en la primera vista?" },
  { k: "TONO DE MARCA", d: "Directo, técnico, con filo. Frases cortas. Imperativo en el CTA. Prohibido: jerga corporativa, diminutivos, disculpas, emojis en piezas de marca." },
];

const ANGULOS = [
  { plano: "Pantalla de teléfono real", uso: "El héroe de la cápsula: la solución ocurriendo en WhatsApp con hora y notificaciones reales. Vertical nativo, nunca simulaciones." },
  { plano: "Doble teléfono (split o cenital)", uso: "El cliente escribe en el teléfono A; el sistema responde en el B, en vivo. ÁNGULO FIRMA: nadie del nicho puede grabarlo con sistemas reales." },
  { plano: "Cenital de escritorio", uso: "Manos + teléfono + laptop sobre metal, sombras duras (fotografía del manual). Para transiciones y antes/después." },
  { plano: "Talking head 3/4, fondo carbón", uso: "Solo para el tramo de impacto (25–40 s): la cifra, mirando a cámara. Subtítulos siempre — la mayoría ve sin sonido." },
  { plano: "Punch-in / reveal al dato", uso: "Zoom o corte seco al recibo, la cifra, la fila nueva apareciendo. El momento más rebobinado de la cápsula." },
  { plano: "POV del cliente", uso: "La cámara es el cliente: escribe, recibe, paga. Identificación inmediata del espectador no técnico." },
  { plano: "B-roll de vida real", uso: "Negocio del cliente, montaña (MTB), asado al barril. Máximo 1 pieza/mes: humaniza sin diluir la promesa." },
];

const PLATFORM_DIF = [
  { red: "TikTok",
    funciona: "Payoff primero y cortes cada 0.5–1.5 s en los primeros 5 s; texto en pantalla que refuerza el gancho; funciona como buscador: decir la palabra clave en voz alta al inicio; crudo y nativo gana a lo sobreproducido.",
    aborda: "Soluciones micro con dolor universal: responder tarde, perder pedidos, cobrar cartera. Demostraciones en vivo y respuestas en video a comentarios reales.",
    materiales: "Screen records reales · toma de doble teléfono · cifras del dashboard · subtítulos grandes (plantilla del kit) · audios en tendencia como contenedor. Fuentes: TikTok Creative Center y los comentarios propios como banco de temas.",
    cta: "«Comenta SOLUCIÓN y te escribe el sistema» o «Escribe BLUEPRINT-TT al WhatsApp del perfil». Secundario: seguir para la serie. Nunca link externo en caption.",
    dif: "Demo de doble teléfono EN VIVO con cifras en pesos. El nicho muestra plantillas; tú muestras sistemas empresariales facturando con la hora en pantalla." },
  { red: "Instagram",
    funciona: "Reels con estética más limpia que TikTok, portada cuidada para el grid; las series numeradas construyen más que un viral suelto; guardados y envíos pesan más que likes.",
    aborda: "La serie «Solución N.º X» completa, antes/después de negocios reales, autopsias en carrusel y detrás de escena en historias.",
    materiales: "La misma cápsula con overlays limpios + portada del kit · carrusel desde la plantilla de firma · historias crudas del set. Fuentes: casos reales anonimizados (cláusula in-1) y métricas del dashboard.",
    cta: "«Guárdalo y envíaselo a tu socio» · sticker de enlace en historias al bot · «Comenta X» con DM automatizado vía Graph API · palabra clave BLUEPRINT-IG.",
    dif: "Serie fija «Solución N.º X» con el sello visual del kit + cierre que pide guardar o enviárselo a un socio." },
  { red: "LinkedIn",
    funciona: "Video vertical nativo con impulso de distribución; subtítulos obligatorios; el perfil personal recibe ~65% del feed frente a ~5% de páginas; responder comentarios en los primeros 15 min amplifica; cara real = confianza.",
    aborda: "El caso como decisión de negocio: costo, retorno, riesgo evitado. La vitrina empresarial, cifras del dashboard, la tesis self-hosted y la bitácora de los lunes.",
    materiales: "Cápsula reusada con caption cuyo primer renglón es el gancho · autopsia como documento PDF nativo · texto de bitácora. Fuentes: feedback del panel, Supabase y objeciones reales de llamadas.",
    cta: "«Agenda el diagnóstico — enlace en el primer comentario» · «Sígueme para la serie» · DM directo para decisores. Palabra clave BLUEPRINT-LI.",
    dif: "El mismo caso contado como decisión de negocio con retorno en cifras y casos verificables. Publicar SIEMPRE desde tu perfil personal." },
  { red: "Facebook",
    funciona: "Reels heredan el alcance de Meta; fuerte en audiencias regionales y grupos locales; comentarios y compartidos en grupos de comercio mueven más que el feed.",
    aborda: "Los casos locales en lenguaje llano: el remate, la tienda, el edificio La Cumbre. El ángulo regional que las cuentas globales no pueden tocar.",
    materiales: "La misma cápsula de IG (crossposting Meta) + publicación de texto nativa para grupos de comerciantes. Fuentes: casos regionales y cifras en pesos.",
    cta: "«Escribe BLUEPRINT-FB al WhatsApp» + compartir en el grupo. En grupos: ofrecer el caso completo por palabra clave, nunca vender directo.",
    dif: "Sembrar las cápsulas en grupos de comerciantes de Antioquia/LATAM; el caso local rinde más que el consejo genérico." },
  { red: "YouTube",
    funciona: "El espectador de Shorts salta al canal a ver el contenido largo: el puente de intención más fuerte; título y descripción optimizados para búsqueda.",
    aborda: "El «cómo se hizo» completo de cada solución, con capítulos; casos extendidos; Shorts = la cápsula reusada con título buscable.",
    materiales: "Grabación completa de la sesión (pantalla + cámara) · guion · miniatura con el kit · capítulos. Fuentes: la construcción real + docs oficiales para rigor.",
    cta: "Descripción y comentario fijado con BLUEPRINT-YT · suscripción para la serie · tarjeta final al siguiente episodio. En piezas de mentoría: palabra clave MENTORIA.",
    dif: "Aquí —y solo aquí— vive el «cómo se hizo». La cápsula promete; el soporte cumple y captura al futuro mentoreado." },
];

const REUSE_MAP = [
  { mat: "Cápsula madre <45 s", origen: "Grabación del viernes", destinos: "TikTok → IG/FB Reels → LinkedIn → YouTube Shorts", ajuste: "TikTok es la versión maestra (ritmo máximo). IG/FB: overlays más limpios + portada. LinkedIn: caption de negocio. Shorts: título buscable. Mismo corte base: 4 destinos, 1 edición." },
  { mat: "Video soporte (cómo se hizo)", origen: "Misma sesión", destinos: "YouTube (único destino largo)", ajuste: "Capítulos + palabra clave en descripción y comentario fijado. No se fragmenta: la cápsula ya es su tráiler." },
  { mat: "Transcripción del soporte", origen: "Pipeline editorial (t1-4)", destinos: "Bitácora del lunes + captions de todas las redes", ajuste: "Gemini genera borradores por red; revisión humana en la cola de Supabase." },
  { mat: "Autopsia (problema → solución → cifra)", origen: "Plantilla de firma", destinos: "LinkedIn (documento PDF) + IG (carrusel)", ajuste: "Mismo diseño; en IG el texto se recorta a la mitad y la última slide pide guardar/enviar." },
  { mat: "Cifras del dashboard", origen: "Supabase (bot-7)", destinos: "Ganchos y cierres de toda cápsula + informe mensual", ajuste: "Siempre en pantalla como prueba. La misma cifra abre en TikTok y cierra el argumento en LinkedIn." },
  { mat: "Casos empresariales (vitrina t1-7)", origen: "Entregas de Stratt-On", destinos: "Cápsulas + LinkedIn + landing de mentoría y empresarial", ajuste: "El mismo caso: cápsula de 45 s para redes, decisión de negocio en LinkedIn, prueba de venta en toda oferta." },
  { mat: "Comentarios y preguntas", origen: "Las 5 redes + comunidad", destinos: "Temas de próximas cápsulas + respuestas en video", ajuste: "El comentario es materia prima: se responde en video citándolo y alimenta el banco de temas." },
  { mat: "Detrás de escena del set", origen: "Clips crudos al grabar", destinos: "Historias IG/FB + comunidad de WhatsApp", ajuste: "Sin edición: lo crudo humaniza. La comunidad lo recibe primero (exclusividad de la plaza)." },
];

const MESES = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
const DIAS = ["DOM", "LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"];
const fmtDate = (iso) => { const d = new Date(iso + "T12:00:00"); return `${DIAS[d.getDay()]} ${String(d.getDate()).padStart(2, "0")} ${MESES[d.getMonth()]}`; };
const monthOf = (iso) => iso.slice(0, 7);
const isOverdue = (iso) => new Date(iso + "T23:59:59") < TODAY;
const diffOf = (xp) => (xp >= 60 ? { t: "DIFICULTAD ALTA", c: C.rojo } : xp >= 35 ? { t: "DIFICULTAD MEDIA", c: C.blanco } : { t: "DIFICULTAD BAJA", c: C.humo });

// ------------------------------------------------------------
// Componentes
// ------------------------------------------------------------
const Led = ({ on = true }) => (
  <span aria-hidden="true" style={{ width: 9, height: 9, borderRadius: "50%", background: on ? C.rojo : C.humo, boxShadow: on ? "0 0 8px rgba(255,59,47,.8)" : "none", display: "inline-block", flexShrink: 0 }} />
);

function PrereqChips({ req, done }) {
  if (!req.length) return <span style={{ ...S.mono, color: C.blanco }}>SIN PREVIAS · PUBLICABLE SIEMPRE</span>;
  const missing = req.filter((id) => !done[id]);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ ...S.mono, color: missing.length ? C.rojo : C.blanco, fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}>
        {!missing.length && <Led />} {missing.length ? `FALTAN ${missing.length} PREVIAS PARA MÁXIMO IMPACTO` : "ESTRATEGIA LISTA · PUBLICAR CON TODO"}
      </span>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {req.map((id) => {
          const ok = !!done[id];
          const it = ITEM_BY_ID[id];
          return (
            <span key={id} title={it ? it.title : id}
              style={{ ...S.badge, borderColor: ok ? "rgba(245,246,244,0.4)" : C.rojo, color: ok ? C.blanco : C.rojo }}>
              {ok ? "✓ " : "○ "}{it ? (it.title.length > 34 ? it.title.slice(0, 34) + "…" : it.title) : id}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function TemaEditor({ epId, value, fallback, onSave }) {
  const [text, setText] = useState(value || fallback);
  useEffect(() => { setText(value || fallback); }, [epId, value, fallback]);
  const commit = () => { const v = text.trim(); onSave(epId, v && v !== fallback ? v : null); };
  return (
    <input className="pc-input" style={{ ...S.input, fontWeight: 600, fontSize: 14, padding: "8px 10px", width: "100%" }}
      value={text} onChange={(e) => setText(e.target.value)} onBlur={commit}
      onKeyDown={(e) => { if (e.key === "Enter") e.currentTarget.blur(); }} aria-label="Tema de la solución (editable)" />
  );
}

function FeedbackBox({ taskId, value, onSave }) {
  const [text, setText] = useState(value || "");
  const [saved, setSaved] = useState(false);
  useEffect(() => { setText(value || ""); }, [taskId, value]);
  return (
    <div style={S.fbBox}>
      <span style={{ ...S.blockK, color: C.blanco }}>FEEDBACK · RESULTADO REAL</span>
      <textarea className="pc-input" style={S.fbArea} value={text} rows={3}
        onChange={(e) => { setText(e.target.value); setSaved(false); }}
        placeholder="Qué pasó realmente: métricas obtenidas, desviaciones vs lo esperado, bloqueos, aprendizajes…"
        aria-label="Feedback de la acción" />
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <button className="pc-primary" style={{ ...S.primaryBtn, padding: "8px 16px" }} onClick={() => { onSave(taskId, text.trim()); setSaved(true); }}>
          GUARDAR FEEDBACK
        </button>
        {saved && <span style={{ ...S.mono, color: C.blanco, display: "inline-flex", gap: 6, alignItems: "center" }}><Led />GUARDADO</span>}
        {value && !saved && <span style={{ ...S.mono, color: C.humo }}>HAY FEEDBACK PREVIO</span>}
      </div>
    </div>
  );
}

function ActionCard({ t, isDone, open, invVal, fbVal, onToggle, onExpand, onBump, onSaveFb }) {
  const late = !isDone && isOverdue(t.date);
  const dif = diffOf(t.xp);
  return (
    <article className="pc-card" style={{ ...S.card, borderLeft: `3px solid ${late ? C.rojo : isDone ? "rgba(245,246,244,0.5)" : C.hair}`, opacity: isDone && !open ? 0.6 : 1 }}>
      <div style={S.cardTop}>
        <button className="pc-check" onClick={() => onToggle(t.id)} aria-pressed={isDone} aria-label={isDone ? "Marcar pendiente" : "Marcar hecha"}
          style={{ ...S.check, background: isDone ? C.blanco : "transparent", borderColor: isDone ? C.blanco : C.humo }}>
          {isDone ? <span style={S.checkMark}>✓</span> : null}
        </button>
        <div style={{ flex: 1, minWidth: 0, cursor: "pointer" }} onClick={() => onExpand(t.id)}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "baseline" }}>
            <span style={{ ...S.mono, fontSize: 11, color: late ? C.rojo : C.humo }}>{fmtDate(t.date)}{late ? " · VENCIDA" : ""}</span>
            {t.pil.map((k) => <span key={k} style={S.pilChip}>{PILLARS[k].label}</span>)}
            {fbVal && <span style={{ ...S.badge, borderColor: "rgba(245,246,244,0.4)", color: C.blanco }}>FEEDBACK ✓</span>}
          </div>
          <h3 style={{ ...S.cardTitle, textDecoration: isDone ? "line-through" : "none" }}>{t.title}</h3>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 7 }}>
            <span style={{ ...S.badge, borderColor: dif.c === C.rojo ? C.rojo : C.hair, color: dif.c }}>{dif.t}</span>
            <span style={S.badge}>{t.h}H EST.</span>
            <span style={S.badge}>+{t.xp} XP</span>
            {t.integrations.map((x) => <span key={x} style={S.badge}>{x}</span>)}
          </div>
        </div>
        <button className="pc-expand" style={S.expandBtn} onClick={() => onExpand(t.id)} aria-expanded={open}>
          {open ? "CERRAR" : "POR QUÉ Y CÓMO"}
        </button>
      </div>

      {open && (
        <div style={S.cardBody}>
          <div style={S.whyBlock}>
            <span style={S.blockK}>POR QUÉ ESTE PASO</span>
            <p style={S.blockP}>{t.why}</p>
          </div>
          <div style={S.whyBlock}>
            <span style={{ ...S.blockK, color: C.rojo }}>A QUÉ APUNTA</span>
            <p style={S.blockP}>{t.pil.map((k) => PILLARS[k].label).join(" + ")} · <strong style={{ color: C.blanco }}>{t.res}</strong></p>
          </div>
          <div style={S.whyBlock}>
            <span style={S.blockK}>CÓMO REALIZARLO</span>
            <ol style={S.howList}>{t.how.map((s, i) => <li key={i} style={S.howItem}>{s}</li>)}</ol>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
            {t.sources.length > 0 && (<>
              <span style={S.mono}>FUENTES →</span>
              {t.sources.map((s) => <a key={s.url} className="pc-link" href={s.url} target="_blank" rel="noopener noreferrer" style={S.srcLink}>{s.label}</a>)}
            </>)}
            {isDone && (
              <span style={{ ...S.badge, borderColor: "rgba(245,246,244,0.4)", color: C.blanco, display: "inline-flex", alignItems: "center", gap: 8 }}>
                TIEMPO REAL:
                <button className="pc-mini" style={S.miniBtn} onClick={() => onBump(t.id, -1)} aria-label="Restar hora">−</button>
                {invVal ?? t.h}H
                <button className="pc-mini" style={S.miniBtn} onClick={() => onBump(t.id, 1)} aria-label="Sumar hora">+</button>
              </span>
            )}
          </div>
          <FeedbackBox taskId={t.id} value={fbVal} onSave={onSaveFb} />
        </div>
      )}
    </article>
  );
}

function Sec({ title, children }) {
  return (
    <section style={{ marginBottom: 30 }}>
      <div style={S.secHead}><div style={S.secRule} /><span style={S.secTitle}>{title}</span></div>
      {children}
    </section>
  );
}

// ============================================================
export default function PanelComandoH2() {
  const [view, setView] = useState("ruta");
  const [done, setDone] = useState({});
  const [inv, setInv] = useState({});
  const [fb, setFb] = useState({});
  const [temas, setTemas] = useState({});
  const [notes, setNotes] = useState({});
  const [expanded, setExpanded] = useState({});
  const [filterPil, setFilterPil] = useState(null);
  const [onlyPending, setOnlyPending] = useState(false);
  const [draft, setDraft] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [saveState, setSaveState] = useState("—");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const first = useRef(true);
  const prevAch = useRef(new Set());

  useEffect(() => {
    (async () => {
      try {
        const res = await storage.get(STORAGE_KEY);
        if (res && res.value) { const p = JSON.parse(res.value); setDone(p.done || {}); setNotes(p.notes || {}); setInv(p.inv || {}); setFb(p.fb || {}); setTemas(p.temas || {}); }
      } catch (e) { /* primer uso */ }
      setLoaded(true);
    })();
  }, []);

  useEffect(() => {
    if (!loaded) return;
    if (first.current) { first.current = false; prevAch.current = new Set(ACHIEVEMENTS.filter((a) => a.test(done)).map((a) => a.id)); return; }
    (async () => {
      try { setSaveState("guardando"); await storage.set(STORAGE_KEY, JSON.stringify({ done, notes, inv, fb, temas })); setSaveState("sincronizado"); }
      catch (e) { setSaveState("error de guardado"); }
    })();
    const now = ACHIEVEMENTS.filter((a) => a.test(done));
    const fresh = now.find((a) => !prevAch.current.has(a.id));
    prevAch.current = new Set(now.map((a) => a.id));
    if (fresh) { setToast(`LOGRO DESBLOQUEADO · ${fresh.name}`); setTimeout(() => setToast(null), 3500); }
  }, [done, notes, inv, fb, temas, loaded]);

  const toggle = (id) => setDone((p) => {
    const next = { ...p, [id]: !p[id] };
    if (!p[id]) setInv((iv) => (iv[id] == null ? { ...iv, [id]: ITEM_BY_ID[id].h } : iv));
    return next;
  });
  const bumpInv = (id, delta) => setInv((p) => ({ ...p, [id]: Math.max(0, (p[id] ?? ITEM_BY_ID[id].h) + delta) }));
  const toggleExpand = (id) => setExpanded((p) => ({ ...p, [id]: !p[id] }));
  const saveFb = (id, text) => setFb((p) => { const n = { ...p }; if (text) n[id] = text; else delete n[id]; return n; });
  const saveTema = (id, text) => setTemas((p) => { const n = { ...p }; if (text) n[id] = text; else delete n[id]; return n; });

  const doneItems = TIMELINE.filter((t) => done[t.id]);
  const xpNow = doneItems.reduce((a, t) => a + t.xp, 0);
  const hInv = doneItems.reduce((a, t) => a + (inv[t.id] ?? t.h), 0);
  const rank = rankFor(xpNow);
  const nRank = nextRank(xpNow);
  const achUnlocked = ACHIEVEMENTS.filter((a) => a.test(done));
  const fbCount = Object.keys(fb).length;

  const addNote = () => {
    const text = draft.trim(); if (!text) return;
    setNotes((p) => ({ ...p, global: [...(p.global || []), { id: Date.now(), text, ts: new Date().toISOString() }] }));
    setDraft("");
  };
  const allNotes = Object.values(notes).flat().sort((a, b) => b.id - a.id);

  const pilProgress = (k) => {
    const items = TIMELINE.filter((t) => t.pil.includes(k));
    const d = items.filter((t) => done[t.id]);
    return { total: items.length, done: d.length, xpT: items.reduce((a, t) => a + t.xp, 0), xpD: d.reduce((a, t) => a + t.xp, 0) };
  };

  const cardProps = (t) => ({
    t, isDone: !!done[t.id], open: !!expanded[t.id], invVal: inv[t.id], fbVal: fb[t.id],
    onToggle: toggle, onExpand: toggleExpand, onBump: bumpInv, onSaveFb: saveFb,
  });

  const visibleTimeline = TIMELINE.filter((t) => (!filterPil || t.pil.includes(filterPil)) && (!onlyPending || !done[t.id]));

  return (
    <div style={S.root}>
      <style>{CSS_TEXT}</style>
      {toast && <div style={S.toast}><Led /> {toast}</div>}

      {/* ===== SIDEBAR ===== */}
      <aside className={`pc-sidebar${sidebarOpen ? " open" : ""}`} style={S.sidebar}>
        <div style={S.brand}>
          <Led />
          <div>
            <div style={S.brandTitle}>PANEL DE COMANDO</div>
            <div style={S.brandSub}>STRATT-ON · H2-2026 · ENCENDIDO</div>
          </div>
        </div>

        <div style={S.viewSwitch} role="tablist" aria-label="Vistas">
          {[["ruta", "LA RUTA", "Calendario global: cada paso explicado"], ["parrilla", "PARRILLA", "Qué publicar, cuándo y qué debe estar listo"], ["pilares", "LOS 4 PILARES", "A qué apunta todo"], ["estrategia", "ESTRATEGIA", "El porqué global + distribución"], ["progreso", "PROGRESO", "XP, horas, logros y feedback"]].map(([id, label, sub]) => (
            <button key={id} role="tab" aria-selected={view === id} className="pc-tab" onClick={() => { setView(id); setSidebarOpen(false); }}
              style={{ ...S.tabBtn, ...(view === id ? S.tabActive : {}) }}>
              <span style={{ fontWeight: 700 }}>{label}</span>
              <span style={{ fontSize: 10, color: C.humo, letterSpacing: 0, textTransform: "none", fontFamily: "'Archivo', sans-serif" }}>{sub}</span>
            </button>
          ))}
        </div>

        <div style={S.rankBox}>
          <div style={S.progRow}>
            <span style={{ ...S.mono, color: C.blanco, fontWeight: 700 }}>{rank.name}</span>
            <span style={S.mono}>{xpNow}/{TOTAL_XP} XP</span>
          </div>
          <div style={S.progTrack}><div style={{ ...S.progFill, width: `${(xpNow / TOTAL_XP) * 100}%` }} /></div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 9 }}>
            <span style={S.mono}>{hInv}/{TOTAL_H}H</span>
            <span style={S.mono}>{doneItems.length}/{TOTAL_ITEMS} OK</span>
            <span style={S.mono}>{fbCount} FB</span>
          </div>
        </div>

        <div style={{ padding: "12px 14px", borderBottom: `1px solid ${C.hair}` }}>
          <div style={{ ...S.mono, marginBottom: 9 }}>AVANCE POR PILAR</div>
          {PIL_KEYS.map((k) => {
            const p = pilProgress(k);
            return (
              <button key={k} className="pc-chan" onClick={() => { setView("pilares"); setSidebarOpen(false); }} style={S.pilRow}>
                <span style={{ flex: 1, textAlign: "left", fontSize: 11.5, color: C.blanco, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.06em" }}>{PILLARS[k].label}</span>
                <span style={{ ...S.mono, fontSize: 10 }}>{p.done}/{p.total}</span>
              </button>
            );
          })}
        </div>

        <div style={{ flex: 1 }} />
        <div style={S.sideFoot}>
          <span style={{ ...S.mono, display: "inline-flex", alignItems: "center", gap: 7 }}>
            <Led on={saveState === "sincronizado"} /> GUARDADO: {saveState.toUpperCase()}
          </span>
        </div>
      </aside>

      {/* ===== MAIN ===== */}
      <main style={S.main}>
        <header style={S.topbar}>
          <button className="pc-burger" style={S.burger} onClick={() => setSidebarOpen((v) => !v)} aria-label="Abrir menú">≡</button>
          <div style={{ flex: 1, minWidth: 0 }}>
            {view === "ruta" && (<><div style={S.viewTitle}>LA RUTA · JULIO → DICIEMBRE 2026</div><div style={S.viewSub}>Del estado manual al estado encendido. Toca una acción: por qué, a qué apunta, cómo, feedback</div></>)}
            {view === "parrilla" && (<><div style={S.viewTitle}>PARRILLA DE CONTENIDO</div><div style={S.viewSub}>Ritmo semanal, 22 temas editables y semáforo de estrategia previa por publicación</div></>)}
            {view === "pilares" && (<><div style={S.viewTitle}>LOS 4 PILARES</div><div style={S.viewSub}>Toda acción del semestre empuja al menos uno de estos frentes</div></>)}
            {view === "estrategia" && (<><div style={S.viewTitle}>ESTRATEGIA · ENCENDIDO</div><div style={S.viewSub}>Tesis, distribución, escalera de monetización con mentoría a escala, reglas</div></>)}
            {view === "progreso" && (<><div style={S.viewTitle}>PROGRESO · {rank.name}</div><div style={S.viewSub}>{rank.d}</div></>)}
          </div>
        </header>

        {/* ============ LA RUTA ============ */}
        {view === "ruta" && (
          <div style={S.feed}>
            <div style={S.guide}>
              <strong style={{ color: C.blanco }}>Cómo leer esta ruta:</strong> {TOTAL_ITEMS} acciones fechadas llevan la operación del estado manual al estado encendido: una empresa de 1 persona con capa de IA, distribución automatizada en 5 redes, comunidad de WhatsApp como plaza central, vitrina de soluciones empresariales que de verdad funcionan y una mentoría escalando de 10 a 50+ plazas con admisión evergreen. Cada acción declara su porqué, pilar, método, herramientas, tiempo y dificultad. Al ejecutarla: marca, ajusta el tiempo real y registra el feedback — ese registro alimenta las revisiones mensuales y el informe público de diciembre.
            </div>
            <div style={S.filterRow}>
              <span style={S.mono}>FILTRAR:</span>
              <button className="pc-chip" onClick={() => setFilterPil(null)} style={{ ...S.chip, ...(filterPil === null ? S.chipOn : {}) }}>TODOS</button>
              {PIL_KEYS.map((k) => (
                <button key={k} className="pc-chip" onClick={() => setFilterPil(filterPil === k ? null : k)}
                  style={{ ...S.chip, ...(filterPil === k ? S.chipOn : {}) }}>
                  {PILLARS[k].label}
                </button>
              ))}
              <button className="pc-chip" onClick={() => setOnlyPending((v) => !v)} style={{ ...S.chip, ...(onlyPending ? S.chipOn : {}) }}>SOLO PENDIENTES</button>
            </div>

            {MONTHS_META.map((m) => {
              const items = visibleTimeline.filter((t) => monthOf(t.date) === m.key);
              if (!items.length) return null;
              const allMonth = TIMELINE.filter((t) => monthOf(t.date) === m.key);
              const md = allMonth.filter((t) => done[t.id]).length;
              return (
                <section key={m.key} style={{ marginBottom: 36 }}>
                  <div style={S.monthHead}>
                    <span style={S.monthLabel}>{m.label}</span>
                    <div style={S.divLine} />
                    <span style={{ ...S.mono, color: md === allMonth.length ? C.blanco : C.humo, display: "inline-flex", alignItems: "center", gap: 7 }}>
                      {md === allMonth.length && allMonth.length > 0 && <Led />} {md}/{allMonth.length} EJECUTADAS
                    </span>
                  </div>
                  <div style={S.monthMeta}>
                    <div style={S.metaCell}><span style={S.metaK}>FOCO DEL MES</span><span style={S.metaV}>{m.foco}</span></div>
                    <div style={{ ...S.metaCell, borderLeft: `1px solid ${C.hair}` }}><span style={S.metaK}>ENTREGA</span><span style={S.metaV}>{m.entrega}</span></div>
                  </div>
                  {items.map((t, i) => {
                    const prev = items[i - 1];
                    const showToday = m.key === "2026-07" && (!prev || prev.date <= "2026-07-19") && t.date > "2026-07-19";
                    return (
                      <div key={t.id}>
                        {showToday && <div style={S.todayRow}><div style={S.todayLine} /><span style={S.todayLabel}>ESTÁS AQUÍ · DOM 19 JUL</span><div style={S.todayLine} /></div>}
                        <ActionCard {...cardProps(t)} />
                      </div>
                    );
                  })}
                </section>
              );
            })}
          </div>
        )}

        {/* ============ PARRILLA ============ */}
        {view === "parrilla" && (
          <div style={S.feed}>
            <div style={S.guide}>
              <strong style={{ color: C.blanco }}>Cómo usar la parrilla:</strong> el público NO es técnico — son dueños de negocio que quieren ver soluciones rápidas, reales y monetizables ocurriendo en pantalla. La pieza central es la cápsula de menos de 45 segundos; el video soporte con el «cómo se hizo» queda en YouTube. Los temas van de lo micro a lo macro, cada tema es editable y tiene un semáforo que muestra qué acciones de LA RUTA deben estar ejecutadas antes de publicar para el máximo impacto.
            </div>

            <Sec title="DIRECTRICES DE CONTENIDO (NO NEGOCIABLES)">
              {DIRECTRICES.map((d) => (
                <div key={d.k} style={{ display: "flex", gap: 14, padding: "11px 0", borderBottom: `1px solid ${C.hair}` }}>
                  <span style={{ ...S.blockK, minWidth: 200, color: C.rojo }}>{d.k}</span>
                  <span style={{ fontSize: 13.5, color: C.blanco, lineHeight: 1.55, opacity: 0.9 }}>{d.d}</span>
                </div>
              ))}
            </Sec>

            <Sec title="RITMO SEMANAL FIJO">
              <div style={S.tableWrap}>
                <table style={S.table}>
                  <thead><tr>{["DÍA", "PIEZA", "DESTINO", "ESTRATEGIA REQUERIDA", "NOTA"].map((h) => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
                  <tbody>{WEEK_RHYTHM.map((r) => {
                    const missing = r.req.filter((id) => !done[id]);
                    return (
                      <tr key={r.dia}>
                        <td style={{ ...S.td, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, whiteSpace: "nowrap", color: C.blanco }}>{r.dia}</td>
                        <td style={{ ...S.td, fontWeight: 600, color: C.blanco }}>{r.pieza}</td>
                        <td style={{ ...S.td, whiteSpace: "nowrap" }}>{r.destino}</td>
                        <td style={S.td}>
                          {r.req.length === 0 ? <span style={S.mono}>NINGUNA</span> : (
                            <span style={{ ...S.mono, color: missing.length ? C.rojo : C.blanco, fontWeight: 700 }}>
                              {missing.length ? `FALTAN ${missing.length}: ${missing.join(", ")}` : "LISTA"}
                            </span>
                          )}
                        </td>
                        <td style={S.td}>{r.nota}</td>
                      </tr>
                    );
                  })}</tbody>
                </table>
              </div>
              <p style={{ ...S.blockP, marginTop: 10 }}>Frecuencia total: <strong style={{ color: C.blanco }}>1 solución, 2 cápsulas variantes, 1 carrusel, 2 bitácoras y 1 aviso a la comunidad por semana</strong> — producidos en la sesión quincenal de lotes + pipeline automatizado. Carga humana objetivo: ~2 h/semana con pipeline (t1-4) y publicador (df-6) activos.</p>
            </Sec>

            <Sec title="SOLUCIÓN DE LA SEMANA · 22 CÁPSULAS (<45 S) DE LO MICRO A LO MACRO">
              {EPISODES.map((e) => {
                const topic = EP_TOPICS[e.id] || { tema: "", req: [] };
                const isDone = !!done[e.id];
                const missing = topic.req.filter((id) => !done[id]);
                return (
                  <div key={e.id} style={{ ...S.card, borderLeft: `3px solid ${isDone ? "rgba(245,246,244,0.5)" : missing.length ? C.rojo : "rgba(245,246,244,0.5)"}`, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 10, opacity: isDone ? 0.65 : 1 }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                      <button className="pc-check" onClick={() => toggle(e.id)} aria-pressed={isDone} aria-label={isDone ? "Marcar pendiente" : "Marcar publicado"}
                        style={{ ...S.check, background: isDone ? C.blanco : "transparent", borderColor: isDone ? C.blanco : C.humo, marginTop: 0 }}>
                        {isDone ? <span style={S.checkMark}>✓</span> : null}
                      </button>
                      <span style={{ ...S.mono, fontSize: 12, fontWeight: 700, color: C.blanco }}>{e.id.toUpperCase()}</span>
                      <span style={{ ...S.mono, fontSize: 11 }}>{fmtDate(e.date)}</span>
                      <span style={S.badge}>{e.groupId === "t1" ? "T1 · SOLUCIONES MICRO" : "T2 · PROCESO Y NEGOCIO"}</span>
                      {isDone && <span style={{ ...S.badge, borderColor: "rgba(245,246,244,0.4)", color: C.blanco }}>PUBLICADO</span>}
                    </div>
                    <TemaEditor epId={e.id} value={temas[e.id]} fallback={topic.tema} onSave={saveTema} />
                    <div style={S.mono}>
                      FORMATO: CÁPSULA &lt;45 S (TT · IG · FB · LI) · VIDEO SOPORTE EN YOUTUBE · BLUEPRINT AL BOT · AVISO A COMUNIDAD
                    </div>
                    <PrereqChips req={topic.req} done={done} />
                  </div>
                );
              })}
            </Sec>

            <Sec title="ÁNGULOS DE GRABACIÓN (SHOT LIST)">
              <div style={S.tableWrap}>
                <table style={S.table}>
                  <thead><tr>{["PLANO", "USO Y REGLA"].map((h) => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
                  <tbody>{ANGULOS.map((a) => (
                    <tr key={a.plano}>
                      <td style={{ ...S.td, fontWeight: 700, whiteSpace: "nowrap", color: C.blanco }}>{a.plano}</td>
                      <td style={S.td}>{a.uso}</td>
                    </tr>
                  ))}</tbody>
                </table>
              </div>
            </Sec>

            <Sec title="QUÉ FUNCIONA POR RED (2026): ABORDAJE, MATERIALES, CTA Y DIFERENCIACIÓN">
              {PLATFORM_DIF.map((p) => (
                <div key={p.red} style={{ ...S.card, padding: "16px 18px", display: "flex", flexDirection: "column", gap: 10 }}>
                  <span style={{ ...S.mono, fontSize: 12, fontWeight: 700, color: C.blanco, letterSpacing: "0.18em" }}>{p.red.toUpperCase()}</span>
                  <div><span style={S.blockK}>QUÉ FUNCIONA</span><p style={{ ...S.blockP, marginTop: 4 }}>{p.funciona}</p></div>
                  <div><span style={S.blockK}>QUÉ ABORDAR</span><p style={{ ...S.blockP, marginTop: 4 }}>{p.aborda}</p></div>
                  <div><span style={S.blockK}>MATERIALES Y FUENTES</span><p style={{ ...S.blockP, marginTop: 4 }}>{p.materiales}</p></div>
                  <div><span style={{ ...S.blockK, color: C.rojo }}>CTA ADECUADO</span><p style={{ ...S.blockP, marginTop: 4 }}>{p.cta}</p></div>
                  <div><span style={S.blockK}>CÓMO DIFERENCIARSE</span><p style={{ ...S.blockP, marginTop: 4 }}>{p.dif}</p></div>
                </div>
              ))}
              <div style={{ ...S.guide, marginTop: 6 }}>
                <strong style={{ color: C.blanco }}>Escalera de CTA (todo converge al bot):</strong> frío → seguir/guardar la serie · tibio → palabra clave por red (BLUEPRINT-TT, -IG, -LI, -FB, -YT) que entrega el blueprint y registra el origen (df-7) · caliente → diagnóstico empresarial (Cal.com) o palabra clave MENTORIA para la lista de espera. Un solo destino final, atribución medible por red, cero enlaces que maten el alcance.
              </div>
            </Sec>

            <Sec title="MATRIZ DE REUTILIZACIÓN · QUÉ SE REUSA ENTRE REDES">
              <div style={S.tableWrap}>
                <table style={S.table}>
                  <thead><tr>{["MATERIAL", "ORIGEN", "SE REUSA EN", "AJUSTE POR DESTINO"].map((h) => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
                  <tbody>{REUSE_MAP.map((r) => (
                    <tr key={r.mat}>
                      <td style={{ ...S.td, fontWeight: 700, whiteSpace: "nowrap", color: C.blanco }}>{r.mat}</td>
                      <td style={{ ...S.td, whiteSpace: "nowrap" }}>{r.origen}</td>
                      <td style={S.td}>{r.destinos}</td>
                      <td style={S.td}>{r.ajuste}</td>
                    </tr>
                  ))}</tbody>
                </table>
              </div>
              <p style={{ ...S.blockP, marginTop: 10 }}>Regla de economía: <strong style={{ color: C.blanco }}>una sesión de grabación produce todo el material de la semana</strong>. Nada se crea desde cero para una sola red; el publicador (df-6) hace los ajustes por destino.</p>
            </Sec>

            <Sec title="BANCO DE GANCHOS (CÁPSULAS) · ROTAR Y ADAPTAR">
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {BANK_GANCHOS.map((g, i) => <span key={i} style={{ ...S.badge, textTransform: "none", fontSize: 12, padding: "6px 10px", letterSpacing: 0 }}>{g}</span>)}
              </div>
            </Sec>
            <Sec title="BANCO DE BITÁCORAS (LUN) · UNA POR SEMANA">
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {BANK_BITACORAS.map((g, i) => <span key={i} style={{ ...S.badge, textTransform: "none", fontSize: 12, padding: "6px 10px", letterSpacing: 0 }}>{g}</span>)}
              </div>
            </Sec>
            <div style={{ height: 20 }} />
          </div>
        )}

        {/* ============ LOS 4 PILARES ============ */}
        {view === "pilares" && (
          <div style={S.feed}>
            <div style={S.guide}>
              <strong style={{ color: C.blanco }}>La lógica:</strong> monetización sin posicionamiento no tiene demanda; posicionamiento sin automatización no es sostenible para una persona; y nada de esto construye empresa si no queda operando solo. La mentoría a escala es el multiplicador: convierte la autoridad en ingreso que no depende de tus horas. Los cuatro pilares se empujan entre sí.
            </div>
            {PIL_KEYS.map((k) => {
              const p = pilProgress(k);
              const items = TIMELINE.filter((t) => t.pil.includes(k));
              return (
                <section key={k} style={{ marginBottom: 32 }}>
                  <div style={{ ...S.pilHero }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8 }}>
                      <span style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 20, color: C.blanco, letterSpacing: "-0.01em", textTransform: "uppercase" }}>{PILLARS[k].label}</span>
                      <span style={S.mono}>{p.xpD}/{p.xpT} XP · {p.done}/{p.total} ACCIONES</span>
                    </div>
                    <p style={{ ...S.blockP, marginTop: 8 }}>{PILLARS[k].d}</p>
                    <p style={{ ...S.blockP, marginTop: 6 }}><strong style={{ color: C.blanco }}>Meta del semestre:</strong> {PILLARS[k].meta}</p>
                    <div style={{ ...S.progTrack, marginTop: 12 }}><div style={{ ...S.progFill, width: `${p.xpT ? (p.xpD / p.xpT) * 100 : 0}%` }} /></div>
                  </div>
                  {items.map((t) => <ActionCard key={t.id} {...cardProps(t)} />)}
                </section>
              );
            })}
          </div>
        )}

        {/* ============ ESTRATEGIA ============ */}
        {view === "estrategia" && (
          <div style={S.feed}>
            <div style={S.tesisBlock}>
              <div style={{ ...S.mono, color: C.rojo, marginBottom: 12 }}>TESIS CENTRAL</div>
              <div style={S.tesisText}>NO ENSEÑO AUTOMATIZACIÓN. MUESTRO LAS ENTRAÑAS DE SISTEMAS QUE FACTURAN.</div>
              <p style={{ ...S.blockP, marginTop: 14 }}>Llevamos negocios del estado manual al estado encendido — y lo mostramos en público. El único referente hispano que crea contenido desde soluciones empresariales reales en producción: Wabid procesando subastas, sistemas de clientes entregados, documentados y corriendo, y el propio embudo de la marca sobre n8n + Supabase + Evolution API. Sistemas de producción, no demos. Esa prueba alimenta el motor de escala: una mentoría que pasa de 10 a 50+ plazas y a admisión evergreen con meta pública de 500 mentoreados en 2027.</p>
            </div>

            <Sec title="EL GIRO META">
              <p style={S.blockP}>El sistema comercial de la marca es el primer producto que la audiencia ve funcionando. El lead magnet lo entrega un bot propio; los leads viven en Supabase; la publicación en YouTube, Instagram, Facebook, TikTok y LinkedIn la hace un publicador propio en n8n; cada pieza nueva se dispersa automáticamente a la comunidad de WhatsApp; y hasta la admisión de la mentoría corre sola. Todo documentado en público: la máquina de marketing es simultáneamente la demostración del servicio, y la construcción de cada componente es contenido.</p>
            </Sec>

            <Sec title="SISTEMA DE DISTRIBUCIÓN · CREAR UNA VEZ, PUBLICAR EN SIETE LUGARES">
              <div style={S.tableWrap}>
                <table style={S.table}>
                  <thead><tr>{["DESTINO", "PIEZA", "FUNCIÓN"].map((h) => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
                  <tbody>{[
                    ["YouTube", "Video soporte (cómo se hizo) + Shorts", "Autoridad profunda, SEO y captura del futuro mentoreado"],
                    ["LinkedIn", "Cápsula + autopsia (PDF) + bitácoras", "Captación B2B: decisores que compran el ticket empresarial"],
                    ["Instagram", "Cápsulas de la serie + historias", "Alcance medio y humanización de la marca"],
                    ["TikTok", "Cápsulas con ritmo máximo", "Descubrimiento frío masivo hacia el bot"],
                    ["Facebook", "Cápsulas + texto nativo en grupos", "Alcance regional (Antioquia/LATAM) y remarketing"],
                    ["Comunidad WhatsApp", "PLAZA CENTRAL: aviso de toda publicación", "La base recibe primero; semillero de la mentoría"],
                    ["Canal de difusión", "Anuncio unidireccional semanal", "Altavoz de opt-in con apertura superior al email"],
                  ].map((r) => (
                    <tr key={r[0]}>
                      <td style={{ ...S.td, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.blanco, whiteSpace: "nowrap" }}>{r[0]}</td>
                      <td style={S.td}>{r[1]}</td>
                      <td style={S.td}>{r[2]}</td>
                    </tr>
                  ))}</tbody>
                </table>
              </div>
              <p style={{ ...S.blockP, marginTop: 10 }}>Flujo: pieza madre → pipeline editorial (transcripción + Gemini) → cola de revisión en Supabase → publicador multicanal por API → dispersión a la comunidad → atribución por palabra clave en el bot. Todo corre en n8n self-hosted: <strong style={{ color: C.blanco }}>la distribución también es soberana y también es caso de estudio.</strong></p>
            </Sec>

            <Sec title="LAS TRES VERDADES INCÓMODAS">
              {[["Si no es self-hosted, no es tuyo", "En un país que paga SaaS en dólares y factura en pesos, poseer el stack es margen operativo, no preferencia técnica."],
                ["La demo miente; la producción confiesa", "Todo se muestra corriendo con datos, costos y errores reales. Sistema entregado, documentado y corriendo. Siguiente."],
                ["WhatsApp es el sistema operativo del negocio latinoamericano", "La interfaz conversacional como frontend de software complejo. Por eso el hub es el bot y la plaza es la comunidad, no una newsletter."]].map(([t, d], i) => (
                <div key={i} style={S.verdad}>
                  <span style={{ ...S.mono, color: C.rojo, fontSize: 12 }}>{String(i + 1).padStart(2, "0")}</span>
                  <div><div style={{ fontWeight: 800, fontSize: 15, marginBottom: 4, color: C.blanco }}>{t}</div><div style={S.blockP}>{d}</div></div>
                </div>
              ))}
            </Sec>

            <Sec title="ESCALERA DE MONETIZACIÓN · LA MENTORÍA COMO MOTOR DE ESCALA">
              {[["0", "BLUEPRINT SEMANAL · GRATIS", "JSON de n8n importable entregado por el bot. Software funcional que califica leads solo."],
                ["1", "LA BÓVEDA · BAJO TICKET", "Catálogo de blueprints de producción sobre hosting y pasarela propios. Material de apoyo de la mentoría."],
                ["2", "MENTORÍA ON · ESCALA MASIVA", "El motor de crecimiento: Cohorte Fundadora (10, valida y graba) → Cohorte 2 (50+, entrega automatizada) → evergreen 2027 con admisión automática y meta pública de 500. Tus horas no escalan; el sistema sí."],
                ["3", "STRATT-ON EMPRESARIAL · ALTO TICKET", "Soluciones de empresa que de verdad funcionan: diagnóstico → implementación → retainer, respaldado por la vitrina de casos verificables corriendo."],
                ["4", "WABID · LICENCIA", "White-label para subastas, remates ganaderos y comercio por chat. La T2 es su campaña encubierta."]].map(([n, t, d]) => (
                <div key={n} style={S.escalon}>
                  <span style={S.escalonN}>{n}</span>
                  <div><div style={{ fontWeight: 800, fontSize: 14, color: C.blanco }}>{t}</div><div style={{ ...S.blockP, marginTop: 4 }}>{d}</div></div>
                </div>
              ))}
              <p style={{ ...S.blockP, marginTop: 8 }}>El bot enruta: builder → Bóveda/mentoría · dueño de negocio → mentoría · decisor con presupuesto → diagnóstico empresarial. Palabra clave MENTORIA activa la lista de espera desde cualquier red.</p>
            </Sec>

            <Sec title="REGLAS DE DECISIÓN">
              {["La validación precede al desarrollo: nada se construye antes de que el escalón anterior lo demande. La Cohorte 2 solo existe si la Fundadora llenó.",
                "Filtro de foco: ¿esto demuestra un sistema en producción que de verdad funciona? Si no, no se publica.",
                "Número de marketing separado del operativo; plantillas WABA aprobadas; email como respaldo; máx. 1 aviso/día a la comunidad.",
                "Producción por lotes quincenal; si la cadencia no se sostiene en 8 semanas, se baja a quincenal antes que degradar calidad.",
                "La escala de mentoría nunca sacrifica la entrega: horas/mentoreado se mide cada mes; si sube, se automatiza más antes de vender más.",
                "Toda acción ejecutada registra su feedback en el panel: sin resultado real documentado, la revisión mensual no cierra."].map((r, i) => (
                <div key={i} style={{ display: "flex", gap: 12, padding: "9px 0", borderBottom: `1px solid ${C.hair}` }}>
                  <span style={{ ...S.mono, color: C.rojo, fontSize: 11, paddingTop: 2 }}>R{i + 1}</span>
                  <span style={{ fontSize: 13.5, color: C.blanco, opacity: 0.9, lineHeight: 1.55 }}>{r}</span>
                </div>
              ))}
            </Sec>
            <div style={{ height: 20 }} />
          </div>
        )}

        {/* ============ PROGRESO ============ */}
        {view === "progreso" && (
          <div style={S.feed}>
            <div style={S.rankHero}>
              <div>
                <div style={S.mono}>RANGO ACTUAL</div>
                <div style={S.rankName}>{rank.name}</div>
                <div style={{ fontSize: 13.5, color: C.humo, marginTop: 4 }}>{rank.d}</div>
              </div>
              <div style={{ flex: 1, minWidth: 220 }}>
                <div style={S.progRow}><span style={S.mono}>XP</span><span style={{ ...S.mono, color: C.blanco }}>{xpNow} / {TOTAL_XP}</span></div>
                <div style={{ ...S.progTrack, height: 6 }}><div style={{ ...S.progFill, width: `${(xpNow / TOTAL_XP) * 100}%` }} /></div>
                <div style={{ ...S.mono, fontSize: 9, marginTop: 6 }}>{nRank ? `${nRank.min - xpNow} XP PARA ${nRank.name}` : "RANGO MÁXIMO"}</div>
              </div>
            </div>

            <div style={S.statGrid}>
              {[["ACCIONES EJECUTADAS", `${doneItems.length}/${TOTAL_ITEMS}`],
                ["HORAS INVERTIDAS", `${hInv}h / ${TOTAL_H}h est.`],
                ["SOLUCIONES AL AIRE", `${TIMELINE.filter((t) => t.kind === "cadencia" && done[t.id]).length}/${EPISODES.length}`],
                ["FEEDBACK REGISTRADO", `${fbCount} acciones`],
                ["LOGROS", `${achUnlocked.length}/${ACHIEVEMENTS.length}`]].map(([k, v]) => (
                <div key={k} style={S.statCell}><span style={S.metaK}>{k}</span><span style={S.statV}>{v}</span></div>
              ))}
            </div>

            <Sec title="RESULTADOS: ESPERADO VS REAL (FEEDBACK REGISTRADO)">
              {fbCount === 0 && <p style={S.blockP}>Aún no hay feedback registrado. Abre cualquier acción en LA RUTA y usa «FEEDBACK · RESULTADO REAL» — ese registro alimenta las revisiones mensuales y el informe público de diciembre.</p>}
              {TIMELINE.filter((t) => fb[t.id]).map((t) => (
                <div key={t.id} style={S.fbLog}>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "baseline" }}>
                    <span style={{ ...S.mono, fontSize: 10 }}>{fmtDate(t.date)}</span>
                    <span style={{ fontWeight: 700, fontSize: 13.5, color: C.blanco }}>{t.title}</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12, marginTop: 8 }}>
                    <div><span style={S.blockK}>ESPERADO</span><p style={{ ...S.blockP, marginTop: 4 }}>{t.res}</p></div>
                    <div><span style={{ ...S.blockK, color: C.rojo }}>REAL</span><p style={{ ...S.blockP, marginTop: 4, whiteSpace: "pre-wrap" }}>{fb[t.id]}</p></div>
                  </div>
                </div>
              ))}
            </Sec>

            <Sec title="LOGROS">
              <div style={S.achGrid}>
                {ACHIEVEMENTS.map((a) => {
                  const ok = a.test(done);
                  return (
                    <div key={a.id} style={{ ...S.achCard, borderColor: ok ? "rgba(245,246,244,0.4)" : C.hair, opacity: ok ? 1 : 0.55 }}>
                      <Led on={ok} />
                      <div>
                        <div style={{ fontWeight: 800, fontSize: 12.5, color: ok ? C.blanco : C.humo, letterSpacing: "0.04em" }}>{a.name}</div>
                        <div style={{ fontSize: 12, color: C.humo, marginTop: 3, lineHeight: 1.45 }}>{a.d}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Sec>

            <Sec title="BITÁCORA DE DECISIONES">
              <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
                <input style={S.input} className="pc-input" value={draft} onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") addNote(); }} placeholder="Registrar decisión, bloqueo o resultado…" aria-label="Nueva entrada" />
                <button className="pc-primary" style={S.primaryBtn} onClick={addNote}>REGISTRAR</button>
              </div>
              {allNotes.map((n) => {
                const d = new Date(n.ts);
                return (
                  <div key={n.id} style={{ display: "flex", gap: 12, padding: "9px 0", borderBottom: `1px solid ${C.hair}` }}>
                    <span style={{ ...S.mono, fontSize: 10, paddingTop: 3, whiteSpace: "nowrap" }}>{String(d.getDate()).padStart(2, "0")} {MESES[d.getMonth()]} {String(d.getHours()).padStart(2, "0")}:{String(d.getMinutes()).padStart(2, "0")}</span>
                    <span style={{ fontSize: 13.5, color: C.blanco, opacity: 0.9, lineHeight: 1.5, whiteSpace: "pre-wrap" }}>{n.text}</span>
                  </div>
                );
              })}
            </Sec>
            <div style={{ height: 20 }} />
          </div>
        )}
      </main>
    </div>
  );
}

// ============================================================
// TOKENS · Brand kit STRATT-ON «ENCENDIDO»
// Carbón base · grafito superficies · humo secundario · blanco principal
// Rojo señal SOLO para señalar (≤5%) · radius 2 px · hairlines
// ============================================================
const S = {
  root: { display: "flex", height: "100vh", width: "100%", background: C.carbon, color: C.blanco, fontFamily: "'Archivo', system-ui, sans-serif", overflow: "hidden", position: "relative" },
  mono: { fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: "0.14em", color: C.humo },
  toast: { position: "absolute", top: 18, right: 22, zIndex: 60, background: C.grafito, border: `1px solid ${C.hair}`, color: C.blanco, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.1em", padding: "12px 18px", borderRadius: 2, display: "flex", alignItems: "center", gap: 10 },

  sidebar: { width: 272, minWidth: 272, background: C.carbon, borderRight: `1px solid ${C.hair}`, display: "flex", flexDirection: "column", zIndex: 30 },
  brand: { display: "flex", alignItems: "center", gap: 12, padding: "16px", borderBottom: `1px solid ${C.hair}` },
  brandTitle: { fontFamily: "'Archivo Black', sans-serif", fontSize: 13, letterSpacing: "-0.01em", color: C.blanco },
  brandSub: { fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.18em", color: C.humo, marginTop: 3 },

  viewSwitch: { display: "flex", flexDirection: "column", borderBottom: `1px solid ${C.hair}` },
  tabBtn: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2, background: "transparent", border: "none", borderLeft: "3px solid transparent", color: C.humo, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.12em", padding: "11px 14px", cursor: "pointer", textAlign: "left", width: "100%" },
  tabActive: { color: C.blanco, borderLeft: `3px solid ${C.rojo}`, background: C.grafito },

  rankBox: { padding: "13px 16px", borderBottom: `1px solid ${C.hair}` },
  progRow: { display: "flex", justifyContent: "space-between", marginBottom: 7 },
  progTrack: { height: 4, background: C.grafito, borderRadius: 2 },
  progFill: { height: "100%", background: C.rojo, borderRadius: 2, transition: "width 200ms cubic-bezier(0.4,0,0.2,1)" },
  pilRow: { display: "flex", alignItems: "center", gap: 9, width: "100%", padding: "7px 2px", background: "transparent", border: "none", cursor: "pointer", fontFamily: "inherit" },
  sideFoot: { padding: "12px 16px", borderTop: `1px solid ${C.hair}` },

  main: { flex: 1, display: "flex", flexDirection: "column", minWidth: 0 },
  topbar: { display: "flex", alignItems: "center", gap: 14, padding: "14px 22px", borderBottom: `1px solid ${C.hair}`, background: C.carbon },
  burger: { display: "none", background: "transparent", border: `1px solid ${C.hair}`, color: C.blanco, width: 34, height: 34, fontSize: 16, cursor: "pointer", flexShrink: 0, borderRadius: 2 },
  viewTitle: { fontFamily: "'Archivo Black', sans-serif", fontSize: 16, letterSpacing: "-0.01em", textTransform: "uppercase", color: C.blanco },
  viewSub: { fontSize: 13, color: C.humo, marginTop: 3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },

  feed: { flex: 1, overflowY: "auto", padding: "22px 24px" },
  guide: { background: C.grafito, border: `1px solid ${C.hair}`, borderRadius: 4, padding: "16px 18px", fontSize: 13.5, color: C.blanco, opacity: 0.95, lineHeight: 1.6, marginBottom: 20 },
  filterRow: { display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", marginBottom: 24 },
  chip: { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.1em", border: `1px solid ${C.hair}`, background: "transparent", color: C.humo, padding: "6px 11px", cursor: "pointer", borderRadius: 2 },
  chipOn: { background: C.rojo, color: C.carbon, borderColor: C.rojo, fontWeight: 700 },

  monthHead: { display: "flex", alignItems: "center", gap: 14, marginBottom: 12 },
  monthLabel: { fontFamily: "'Archivo Black', sans-serif", fontSize: 20, letterSpacing: "-0.01em", color: C.blanco },
  divLine: { flex: 1, height: 1, background: C.hair },
  monthMeta: { display: "grid", gridTemplateColumns: "2fr 1fr", background: C.grafito, border: `1px solid ${C.hair}`, borderRadius: 4, marginBottom: 14 },
  metaCell: { padding: "13px 15px", display: "flex", flexDirection: "column", gap: 5 },
  metaK: { fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.18em", color: C.humo },
  metaV: { fontSize: 13, color: C.blanco, opacity: 0.9, lineHeight: 1.55 },

  card: { background: C.grafito, border: `1px solid ${C.hair}`, borderRadius: 4, marginBottom: 10 },
  cardTop: { display: "flex", gap: 14, padding: "15px 17px", alignItems: "flex-start" },
  cardBody: { borderTop: `1px solid ${C.hair}`, padding: "17px", background: C.carbon, display: "flex", flexDirection: "column", gap: 14, borderRadius: "0 0 4px 4px" },
  check: { width: 21, height: 21, minWidth: 21, border: "1.5px solid", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2, flexShrink: 0, borderRadius: 2, background: "transparent" },
  checkMark: { color: C.carbon, fontWeight: 900, fontSize: 12, lineHeight: 1 },
  cardTitle: { fontSize: 15, fontWeight: 800, margin: "6px 0 0", lineHeight: 1.4, color: C.blanco },
  pilChip: { fontFamily: "'JetBrains Mono', monospace", fontSize: 8.5, letterSpacing: "0.12em", color: C.humo, border: `1px solid ${C.hair}`, padding: "2px 8px", whiteSpace: "nowrap", borderRadius: 2 },
  badge: { fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.1em", border: `1px solid ${C.hair}`, color: C.humo, padding: "2px 8px", textTransform: "uppercase", whiteSpace: "nowrap", borderRadius: 2 },
  expandBtn: { fontFamily: "'JetBrains Mono', monospace", fontSize: 9.5, letterSpacing: "0.1em", background: "transparent", color: C.blanco, border: `1px solid rgba(245,246,244,0.35)`, padding: "7px 12px", cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0, alignSelf: "flex-start", borderRadius: 2, fontWeight: 600 },
  whyBlock: { display: "flex", flexDirection: "column", gap: 5 },
  blockK: { fontFamily: "'JetBrains Mono', monospace", fontSize: 9.5, letterSpacing: "0.18em", color: C.humo, fontWeight: 700 },
  blockP: { fontSize: 13.5, color: C.blanco, opacity: 0.85, lineHeight: 1.6, margin: 0 },
  howList: { margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 5 },
  howItem: { fontSize: 13.5, color: C.blanco, opacity: 0.85, lineHeight: 1.55 },
  miniBtn: { background: "transparent", border: "none", color: C.blanco, fontSize: 13, cursor: "pointer", padding: "0 2px", lineHeight: 1, fontWeight: 700 },
  srcLink: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.blanco, textDecoration: "none", borderBottom: `1px solid rgba(245,246,244,0.4)`, paddingBottom: 1 },
  todayRow: { display: "flex", alignItems: "center", gap: 12, margin: "10px 0" },
  todayLine: { flex: 1, height: 3, background: C.rojo, borderRadius: 2 },
  todayLabel: { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.18em", color: C.rojo, fontWeight: 700 },

  fbBox: { border: `1px solid ${C.hair}`, background: C.grafito, borderRadius: 4, padding: "13px 15px", display: "flex", flexDirection: "column", gap: 8 },
  fbArea: { width: "100%", background: C.carbon, border: `1px solid ${C.hair}`, color: C.blanco, padding: "10px 12px", fontSize: 13.5, fontFamily: "'Archivo', sans-serif", outline: "none", resize: "vertical", borderRadius: 2 },
  fbLog: { background: C.grafito, border: `1px solid ${C.hair}`, borderLeft: `3px solid rgba(245,246,244,0.35)`, borderRadius: 4, padding: "14px 16px", marginBottom: 10 },

  pilHero: { background: C.grafito, border: `1px solid ${C.hair}`, borderRadius: 4, padding: "18px 20px", marginBottom: 12 },
  tesisBlock: { border: `1px solid ${C.hair}`, background: C.grafito, borderRadius: 4, padding: "26px 28px", marginBottom: 28, position: "relative" },
  tesisText: { fontFamily: "'Archivo Black', sans-serif", fontSize: 26, lineHeight: 1.05, letterSpacing: "-0.01em", color: C.blanco, textTransform: "uppercase" },
  secHead: { display: "flex", alignItems: "center", gap: 14, marginBottom: 16 },
  secRule: { width: 56, height: 3, background: C.rojo, borderRadius: 2, flexShrink: 0 },
  secTitle: { fontFamily: "'Archivo Black', sans-serif", fontSize: 13, letterSpacing: "0", color: C.blanco, textTransform: "uppercase" },
  verdad: { display: "flex", gap: 14, padding: "13px 0", borderBottom: `1px solid ${C.hair}` },
  escalon: { display: "flex", gap: 16, padding: "14px 16px", background: C.grafito, border: `1px solid ${C.hair}`, borderRadius: 4, marginBottom: 8 },
  escalonN: { fontFamily: "'Archivo Black', sans-serif", fontSize: 22, color: C.rojo, width: 26, flexShrink: 0 },
  tableWrap: { overflowX: "auto", border: `1px solid ${C.hair}`, borderRadius: 4, background: C.grafito },
  table: { width: "100%", borderCollapse: "collapse", fontSize: 13 },
  th: { textAlign: "left", fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.18em", color: C.humo, padding: "10px 13px", borderBottom: `1px solid ${C.hair}` },
  td: { padding: "10px 13px", borderBottom: `1px solid ${C.hair}`, color: C.blanco, opacity: 0.85, lineHeight: 1.5, verticalAlign: "top" },

  rankHero: { display: "flex", gap: 26, alignItems: "center", flexWrap: "wrap", border: `1px solid ${C.hair}`, background: C.grafito, borderRadius: 4, padding: "22px 26px", marginBottom: 18 },
  rankName: { fontFamily: "'Archivo Black', sans-serif", fontSize: 24, letterSpacing: "-0.01em", color: C.blanco, marginTop: 4, textTransform: "uppercase" },
  statGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 1, background: C.hair, border: `1px solid ${C.hair}`, borderRadius: 4, overflow: "hidden", marginBottom: 28 },
  statCell: { background: C.grafito, padding: "14px 15px", display: "flex", flexDirection: "column", gap: 6 },
  statV: { fontFamily: "'JetBrains Mono', monospace", fontSize: 15, fontWeight: 700, color: C.blanco },
  achGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 10 },
  achCard: { display: "flex", gap: 12, alignItems: "flex-start", border: "1px solid", background: C.grafito, borderRadius: 4, padding: "14px 15px" },

  input: { flex: 1, background: C.grafito, border: `1px solid ${C.hair}`, color: C.blanco, padding: "11px 14px", fontSize: 13.5, fontFamily: "inherit", outline: "none", borderRadius: 2 },
  primaryBtn: { fontFamily: "'Archivo', sans-serif", fontSize: 12, letterSpacing: "0.06em", background: C.rojo, border: "none", color: C.carbon, fontWeight: 800, padding: "0 22px", cursor: "pointer", borderRadius: 2, textTransform: "uppercase" },
};

const CSS_TEXT = `
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;600;800&family=JetBrains+Mono:wght@400;700&display=swap');
* { box-sizing: border-box; }
::-webkit-scrollbar { width: 9px; height: 9px; }
::-webkit-scrollbar-track { background: #0E0F11; }
::-webkit-scrollbar-thumb { background: #1C1E22; border: 1px solid rgba(245,246,244,0.10); }
.pc-chan:hover { background: #1C1E22; }
.pc-tab:hover { background: #1C1E22; color: #F5F6F4; }
.pc-card:hover { border-color: rgba(245,246,244,0.25); }
.pc-chip:hover { border-color: rgba(245,246,244,0.4); color: #F5F6F4; }
.pc-link:hover { color: #FF3B2F; border-bottom-color: #FF3B2F; }
.pc-expand:hover { background: rgba(245,246,244,0.08); }
.pc-primary:hover { background: #C21F17; }
.pc-mini:hover { color: #FF3B2F; }
.pc-input:focus { border-color: rgba(245,246,244,0.45); }
button:focus-visible, a:focus-visible, input:focus-visible, textarea:focus-visible { outline: 2px solid #FF3B2F; outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) { * { transition: none !important; } }
@media (max-width: 780px) {
  .pc-sidebar { position: fixed; height: 100vh; transform: translateX(-100%); transition: transform 200ms cubic-bezier(0.4,0,0.2,1); box-shadow: 0 0 40px rgba(0,0,0,0.6); }
  .pc-sidebar.open { transform: translateX(0); }
  .pc-burger { display: flex !important; align-items: center; justify-content: center; }
}
`;
