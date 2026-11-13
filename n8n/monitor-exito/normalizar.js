// Unifica la salida de cada scraper a { platform, profile, post_id, url, text, published_at, api_ref }.
// Los nombres de campo cambian entre actores y versiones: se prueba una lista de candidatos por dato.
const cfg = $('Config').first().json;
const fuentes = $('Fuentes').all().map((i) => i.json);
const crudos = $('Scrape Apify').all().map((i) => i.json);
const oficial = $input.first()?.json ?? {};

const pick = (o, ...rutas) => {
  for (const r of rutas) {
    const v = r.split('.').reduce((a, k) => (a == null ? a : a[k]), o);
    if (v != null && v !== '') return v;
  }
  return null;
};
const fecha = (v) => {
  if (v == null) return null;
  if (typeof v === 'number' || /^\d+$/.test(String(v))) {
    const x = Number(v);
    return new Date(x < 1e12 ? x * 1000 : x);
  }
  const d = new Date(v);
  return isNaN(d) ? null : d;
};
const lista = (r) => (Array.isArray(r?.body) ? r.body : Array.isArray(r) ? r : null);

const mapas = {
  facebook: (o) => ({
    post_id: pick(o, 'postId', 'post_id', 'id'), url: pick(o, 'url', 'postUrl', 'facebookUrl'),
    text: pick(o, 'text', 'message', 'postText'), f: pick(o, 'time', 'timestamp', 'date'),
  }),
  instagram: (o) => ({
    post_id: pick(o, 'shortCode', 'shortcode', 'id'), url: pick(o, 'url', 'postUrl'),
    text: pick(o, 'caption', 'text'), f: pick(o, 'timestamp', 'takenAt', 'date'),
  }),
  tiktok: (o) => ({
    post_id: pick(o, 'id', 'videoId'), url: pick(o, 'webVideoUrl', 'url', 'postUrl'),
    text: pick(o, 'text', 'desc', 'description'), f: pick(o, 'createTimeISO', 'createTime', 'createdAt'),
  }),
  x: (o) => {
    const id = pick(o, 'id', 'id_str', 'tweetId', 'rest_id');
    return {
      post_id: id, url: pick(o, 'url', 'twitterUrl', 'tweetUrl') || (id ? `https://x.com/almacenesexito/status/${id}` : null),
      text: pick(o, 'text', 'fullText', 'full_text'), f: pick(o, 'createdAt', 'created_at', 'timestamp'),
      omitir: !!pick(o, 'isRetweet', 'isReply'),
    };
  },
  linkedin: (o) => {
    const url = pick(o, 'post_url', 'url', 'postUrl', 'link');
    const urn = [pick(o, 'activity_urn', 'full_urn', 'urn.activity_urn', 'urn', 'activityUrn', 'entityUrn'), url]
      .map((v) => (typeof v === 'object' ? JSON.stringify(v) : String(v ?? '')))
      .map((s) => s.match(/(activity|ugcPost|share)[-:](\d{10,})/))
      .find(Boolean);
    return {
      post_id: urn ? urn[2] : url, url, api_ref: urn ? `urn:li:${urn[1]}:${urn[2]}` : null,
      text: pick(o, 'text', 'commentary', 'content', 'post_text'),
      f: pick(o, 'posted_at.timestamp', 'posted_at.date', 'postedAtTimestamp', 'postedAtISO', 'posted_at', 'publishedAt'),
    };
  },
  threads: (o) => {
    const url = pick(o, 'permalink', 'canonical_url', 'url', 'postUrl', 'threadUrl');
    const code = pick(o, 'code', 'shortcode') || (String(url ?? '').match(/\/post\/([^/?#]+)/) || [])[1];
    return {
      post_id: code, url: url || (code ? `https://www.threads.com/@exito/post/${code}` : null),
      text: pick(o, 'text', 'caption.text', 'caption', 'content'), f: pick(o, 'timestamp', 'taken_at', 'publishedAt', 'createdAt'),
    };
  },
};

const posts = new Map();
const fallos = [];
const agregar = (fuente, o, extra = {}) => {
  const m = { ...mapas[fuente.platform](o), ...extra };
  if (!m.post_id || !m.url || m.omitir) return false;
  const k = `${fuente.platform}|${m.post_id}`;
  const previo = posts.get(k) || {};
  const d = fecha(m.f);
  posts.set(k, {
    platform: fuente.platform, profile: fuente.profile, post_id: String(m.post_id), url: String(m.url),
    text: String(m.text ?? previo.text ?? '').slice(0, 3000),
    published_at: d ? d.toISOString() : previo.published_at ?? null,
    api_ref: m.api_ref ?? previo.api_ref ?? null,
  });
  return true;
};

// Threads por la API oficial (si el token tiene threads_profile_discovery): da el id que permite responder por API.
let threadsOficial = 0;
for (const o of Array.isArray(oficial?.body?.data) ? oficial.body.data : []) {
  if (agregar({ platform: 'threads', profile: 'exito' }, o, { api_ref: o.id })) threadsOficial++;
}

fuentes.forEach((fuente, i) => {
  const r = crudos[i] ?? {};
  // El actor de Threads devuelve el perfil con sus posts dentro de «latestPosts».
  const filas = lista(r)?.flatMap((o) => (Array.isArray(o?.latestPosts) ? o.latestPosts : [o])) ?? null;
  const ok = filas ? filas.filter((o) => agregar(fuente, o)).length : 0;
  if (ok || (fuente.platform === 'threads' && threadsOficial)) return;
  const motivo = !filas
    ? `HTTP ${r.statusCode ?? '—'} ${String(r.error?.message ?? r.body?.error?.message ?? '').slice(0, 140)}`
    : filas.length ? 'la salida del actor no trae id/url reconocibles' : '0 resultados';
  fallos.push({ platform: fuente.platform, actor: fuente.actor, motivo });
});

// Solo lo reciente y, por perfil, las N últimas.
const desde = Date.now() - cfg.ventana_horas * 3600 * 1000;
const porPerfil = {};
for (const p of posts.values()) {
  if (p.published_at && new Date(p.published_at).getTime() < desde) continue;
  (porPerfil[p.platform] ||= []).push(p);
}
const salida = [];
for (const grupo of Object.values(porPerfil)) {
  grupo.sort((a, b) => new Date(b.published_at ?? 0) - new Date(a.published_at ?? 0));
  for (const p of grupo.slice(0, cfg.max_por_perfil)) salida.push({ json: { tipo: 'post', ...p } });
}

// Un scraper roto no puede pasar en silencio, pero tampoco avisar en cada corrida: una vez al día por red.
const mem = $getWorkflowStaticData('global');
mem.fallos ||= {};
const nuevos = fallos.filter((f) => Date.now() - (mem.fallos[f.platform] ?? 0) > 24 * 3600 * 1000);
for (const f of nuevos) mem.fallos[f.platform] = Date.now();
if (nuevos.length) {
  salida.push({ json: { tipo: 'fallo', texto: '⚠️ Monitor Éxito: no pude leer\n' + nuevos.map((f) => `• ${f.platform} (${f.actor}): ${f.motivo}`).join('\n') } });
}
return salida;
