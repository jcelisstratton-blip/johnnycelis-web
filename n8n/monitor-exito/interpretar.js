// Traduce el update de Telegram a una intención. Solo atiende el chat configurado.
const cfg = $('Config').first().json;
const u = $('Telegram Trigger').first().json;
const cb = u.callback_query;
const msg = cb ? cb.message : u.message;
if (!msg || String(msg.chat.id) !== String(cfg.chat_id)) return [];

if (cb) {
  const [op, id] = String(cb.data ?? '').split('|');
  return [{ json: { origen: 'boton', op, row_id: Number(id) || 0, ref_message_id: msg.message_id, callback_id: cb.id, texto: '' } }];
}
return [{ json: {
  origen: 'mensaje', op: 't', row_id: 0, callback_id: null,
  ref_message_id: msg.reply_to_message?.message_id ?? 0,
  message_id: msg.message_id,
  texto: String(msg.text ?? '').trim(),
} }];
