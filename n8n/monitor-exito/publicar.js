// Publica el comentario aprobado. LinkedIn y Threads van por su API oficial con la cuenta personal;
// Facebook, Instagram, TikTok y X no admiten comentar posts ajenos por API desde un perfil personal,
// así que ahí se entrega el texto listo para copiar y el enlace directo (en X, con el texto precargado).
const cfg = $('Config').first().json;
const d = $('Decidir').first().json;
const post = $('Reclamar Post').first()?.json ?? {};
const cuenta = $input.first()?.json ?? {};
const http = this.helpers.httpRequest.bind(this.helpers);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const nombres = { facebook: 'Facebook', instagram: 'Instagram', threads: 'Threads', tiktok: 'TikTok', x: 'X', linkedin: 'LinkedIn' };

if (!post.id) {
  return [{ json: { id: d.post_id, status: 'bloqueado', external_id: null, error: null, boton: 'Abrir publicación', enlace: d.post.url,
    mensaje: 'Esa publicación ya tiene un comentario publicado o hay uno en curso.' } }];
}
const texto = post.comment_text;
const red = nombres[post.platform] ?? post.platform;
const cuerpo = (r) => (typeof r.body === 'string' ? (() => { try { return JSON.parse(r.body); } catch { return {}; } })() : r.body ?? {});
const motivoDe = (r) => { const b = cuerpo(r); return `HTTP ${r.statusCode}: ${String(b.message ?? b.error?.message ?? b.error_description ?? '').slice(0, 200)}`; };

let error = null;
let external_id = null;
try {
  if (post.platform === 'linkedin' && post.api_ref && cuenta.access_token) {
    const r = await http({
      method: 'POST',
      url: `https://api.linkedin.com/rest/socialActions/${encodeURIComponent(post.api_ref)}/comments`,
      headers: { Authorization: 'Bearer ' + cuenta.access_token, 'LinkedIn-Version': cfg.linkedin_version, 'X-Restli-Protocol-Version': '2.0.0', 'Content-Type': 'application/json' },
      body: { actor: cuenta.external_id, object: post.api_ref, message: { text: texto } },
      json: true, returnFullResponse: true, ignoreHttpStatusErrors: true,
    });
    if (r.statusCode >= 200 && r.statusCode < 300) external_id = String(cuerpo(r).id ?? r.headers?.['x-restli-id'] ?? 'ok');
    else error = motivoDe(r);
  } else if (post.platform === 'threads' && post.api_ref && cuenta.access_token) {
    const base = `https://graph.threads.com/v1.0/${cuenta.external_id}`;
    const form = (o) => Object.entries(o).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');
    const opts = { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, returnFullResponse: true, ignoreHttpStatusErrors: true };
    const c = await http({ ...opts, url: `${base}/threads`, body: form({ media_type: 'TEXT', text: texto, reply_to_id: post.api_ref, access_token: cuenta.access_token }) });
    if (c.statusCode !== 200 || !cuerpo(c).id) error = motivoDe(c);
    else {
      await new Promise((ok) => setTimeout(ok, 3000));
      const p = await http({ ...opts, url: `${base}/threads_publish`, body: form({ creation_id: cuerpo(c).id, access_token: cuenta.access_token }) });
      if (p.statusCode === 200 && cuerpo(p).id) external_id = String(cuerpo(p).id);
      else error = motivoDe(p);
    }
  }
} catch (e) {
  error = String(e.message ?? e).slice(0, 200);
}

if (external_id) {
  return [{ json: { id: post.id, status: 'publicado', external_id, error: null, boton: 'Ver publicación', enlace: post.url,
    mensaje: `✅ Comentario publicado en ${red}.` } }];
}
const enX = post.platform === 'x';
return [{ json: {
  id: post.id, status: 'manual', external_id: null, error,
  boton: enX ? 'Responder en X (texto precargado)' : `Abrir en ${red}`,
  enlace: enX ? `https://x.com/intent/post?in_reply_to=${post.post_id}&text=${encodeURIComponent(texto)}` : post.url,
  mensaje: (error ? `⚠️ ${red} rechazó el comentario por API (${esc(error)}).\n\n` : '')
    + (enX ? '📋 Abre el enlace: X carga la respuesta con tu texto, solo confirmas.\n\n'
           : `📋 ${error ? '' : red + ' no permite comentar por API desde un perfil personal. '}Toca el texto para copiarlo y pégalo en la publicación:\n\n`)
    + `<code>${esc(texto)}</code>`,
} }];
