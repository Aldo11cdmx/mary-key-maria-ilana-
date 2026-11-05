// Número de WhatsApp de la consultora María Ilana Salazar Ramir.
// Formato internacional sin "+" ni espacios, como lo requiere la API de WhatsApp.
export const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER || '5215571741465'

export const CONSULTANT_NAME = 'María Ilana Salazar Ramir'
export const CONSULTANT_PHONE_DISPLAY = '+52 1 55 7174 1465'

export function formatPrice(amount) {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0
  }).format(amount)
}

export function buildOrderMessage({ customerName = '', items = [], total = 0 }) {
  const lines = []
  lines.push(`Hola ${CONSULTANT_NAME}, quiero hacer un pedido:`)
  lines.push('')
  if (customerName) lines.push(`Mi nombre es: ${customerName}`)
  lines.push('')
  items.forEach((item) => {
    lines.push(`- ${item.quantity} x ${item.name} — ${formatPrice(item.price * item.quantity)}`)
  })
  lines.push('')
  lines.push(`Total: ${formatPrice(total)}`)
  lines.push('')
  lines.push('Gracias, quedo atenta a la confirmación.')
  return lines.join('\n')
}

export function buildWhatsAppLink({ customerName = '', items = [], total = 0 }) {
  const message = buildOrderMessage({ customerName, items, total })
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
