import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { buildWhatsAppLink, formatPrice } from '../lib/whatsapp.js'

export default function CartPage() {
  const { items, updateQuantity, removeItem, total, clearCart } = useCart()
  const [customerName, setCustomerName] = useState('')
  const orderItems = items.map((item) => ({ name: item.name, quantity: item.quantity, price: item.promoPrice || item.price }))
  const waLink = buildWhatsAppLink({ customerName, items: orderItems, total })

  return (
    <main className="mx-auto max-w-3xl px-4 pb-10">
      <h1 className="mt-6 flex items-center gap-2 text-2xl font-bold text-slate-800">
        <ShoppingBag size={24} className="text-brand-600" /> Mi pedido
      </h1>
      <p className="mt-1 text-sm text-slate-500">Revisa tu pedido y envíalo por WhatsApp. No necesitas registrarte.</p>
      {items.length === 0 ? (
        <div className="glass mt-6 rounded-3xl p-8 text-center shadow-glass">
          <p className="text-sm text-slate-500">Tu pedido está vacío.</p>
          <Link to="/" className="btn-primary mt-4">Ir al catálogo</Link>
        </div>
      ) : (
        <div className="glass mt-6 rounded-3xl p-5 shadow-glass">
          <label className="mb-4 block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">Tu nombre (para el saludo del pedido)</span>
            <input value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Ej. Ana Torres" className="input" />
          </label>
          <ul className="flex flex-col gap-3">
            {items.map((item) => (
              <li key={item.id} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/80 p-3">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-800">{item.name}</p>
                  <p className="text-xs text-slate-500">{formatPrice(item.promoPrice || item.price)} c/u</p>
                </div>
                <div className="flex items-center gap-1">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="rounded-full border p-1 text-slate-600 hover:bg-white" aria-label="Quitar uno"><Minus size={14} /></button>
                  <span className="w-6 text-center text-sm font-bold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="rounded-full border p-1 text-slate-600 hover:bg-white" aria-label="Agregar uno"><Plus size={14} /></button>
                </div>
                <p className="w-20 text-right text-sm font-bold text-brand-700">{formatPrice((item.promoPrice || item.price) * item.quantity)}</p>
                <button onClick={() => removeItem(item.id)} className="rounded-full p-2 text-red-500 hover:bg-red-50" aria-label="Eliminar"><Trash2 size={16} /></button>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center justify-between border-t pt-4 text-lg font-bold text-slate-800">
            <span>Total</span><span>{formatPrice(total)}</span>
          </div>
          <a href={waLink} target="_blank" rel="noreferrer" className="btn-primary mt-4 w-full">
            <MessageCircle size={18} /> Hacer pedido por WhatsApp
          </a>
          <p className="mt-2 text-center text-xs text-slate-400">Se abrirá WhatsApp con el mensaje prearmado: productos, cantidades y total.</p>
          <button onClick={clearCart} className="mt-3 w-full rounded-full py-2 text-xs font-semibold text-slate-500 hover:bg-slate-100">Vaciar pedido</button>
        </div>
      )}
    </main>
  )
}
