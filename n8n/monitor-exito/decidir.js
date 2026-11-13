// Cruza la intención con el post guardado y decide la acción: sugerir | omitir | publicar | otro.
const i = $('Interpretar').first().json;
const post = $input.first()?.json ?? {};
const base = { ...i, post_id: post.id ?? null, post };
const otro = (respuesta) => [{ json: { ...base, accion: 'otro', respuesta } }];

if (!post.id) {
  return otro('Para comentar, responde (reply) al aviso de la publicación con el texto del comentario, o usa «🤖 Sugerir».');
}
if (i.op === 's') return [{ json: { ...base, accion: 'sugerir' } }];
if (i.op === 'o') return [{ json: { ...base, accion: 'omitir', respuesta: `⏭ Omitida la publicación de ${post.platform}.` } }];
if (i.op === 'p') {
  if (!post.draft_text) return otro('Ese borrador ya no existe. Pide otro con «🤖 Sugerir».');
  return [{ json: { ...base, accion: 'publicar', comentario: post.draft_text } }];
}
if (i.op === 't') {
  if (!i.texto || i.texto.startsWith('/')) return otro('Escribe el comentario como texto, respondiendo al aviso.');
  return [{ json: { ...base, accion: 'publicar', comentario: i.texto } }];
}
return otro('No entendí esa acción.');
