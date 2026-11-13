-- Estado del monitor de publicaciones (workflow n8n «RRSS — Monitor Éxito»).
-- Base: Postgres Social (credencial n8n «Postgres 2026»). Idempotente.
create table if not exists rrss_monitor_posts (
  id                    bigserial primary key,
  platform              text        not null,
  profile               text        not null,
  post_id               text        not null,
  url                   text        not null,
  text                  text,
  published_at          timestamptz,
  api_ref               text,          -- URN de LinkedIn o media id de Threads (habilita comentar por API)
  status                text        not null default 'nuevo',
                                       -- nuevo | notificado | borrador | publicando | publicado | manual | omitido
  tg_message_id         bigint,        -- mensaje de aviso en Telegram
  tg_prompt_message_id  bigint,        -- mensaje con el borrador de IA
  draft_text            text,
  comment_text          text,
  comment_external_id   text,
  last_error            text,
  created_at            timestamptz not null default now(),
  updated_at            timestamptz not null default now(),
  commented_at          timestamptz,
  unique (platform, post_id)
);
create index if not exists rrss_monitor_posts_tg_idx
  on rrss_monitor_posts (tg_message_id, tg_prompt_message_id);
