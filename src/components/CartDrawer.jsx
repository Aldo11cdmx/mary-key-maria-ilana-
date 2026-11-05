import { Link } from 'react-router-dom'
import { MessageCircle, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { buildWhatsAppLink, formatPrice } from '../lib/whatsapp.js'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, total, clearCart } = useCart()
  if (!isOpen) return null
  const orderItems = items.map((item) => ({ name: item.name, quantity: item.quantity, price: item.promoPrice || item.price }))
  const waLink = buildWhatsAppLink({ items: orderItems, total })
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button aria-label="Cerrar carrito" onClick={() => setIsOpen(false)} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
      <aside className="relative flex h-full w-full max-w-sm flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h2 className="flex items-center gap-2 text-base font-bold text-slate-800">
            <ShoppingBag size={18} className="text-brand-600" /> Mi pedido
          </h2>
          <button onClick={() => setIsOpen(false)} className="rounded-full p-2 text-slate-500 hover:bg-slate-100" aria-label="Cerrar">
            <X size={18} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="pt-10 text-center text-sm text-slate-500">Tu pedido está vacío. Explora el catálogo y agrega tus favoritos.</p>
          ) : (
            <ul className="flex flex-col gap-3">
              {items.map((item) => (
                <li key={item.id} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-brand-50/50 p-3">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-slate-800">{item.name}</p>
                    <p className="text-xs text-slate-500">{formatPrice(item.promoPrice || item.price)} c/u</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="rounded-full border p-1 text-slate-600 hover:bg-white" aria-label="Quitar uno"><Minus size={14} /></button>
                    <span className="w-6 text-center text-sm font-bold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="rounded-full border p-1 text-slate-600 hover:bg-white" aria-label="Agregar uno"><Plus size={14} /></button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="rounded-full p-2 text-red-500 hover:bg-red-50" aria-label="Eliminar"><Trash2 size={16} /></button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {items.length > 0 && (
          <div className="border-t px-5 py-4">
            <div className="mb-1 flex items-center justify-between text-sm text-slate-600"><span>Subtotal</span><span>{formatPrice(total)}</span></div>
            <div className="mb-4 flex items-center justify-between text-base font-bold text-slate-800"><span>Total</span><span>{formatPrice(total)}</span></div>
            <a href={waLink} target="_blank" rel="noreferrer" className="btn-primary w-full">
              <MessageCircle size={18} /> Hacer pedido por WhatsApp
            </a>
            <div className="mt-2 flex gap-2">
              <Link to="/carrito" onClick={() => setIsOpen(false)} className="btn-outline flex-1">Ver detalle</Link>
              <button onClick={clearCart} className="rounded-full px-4 py-3 text-xs font-semibold text-slate-500 hover:bg-slate-100">Vaciar</button>
            </div>
          </div>
        )}
      </aside>
    </div>
  )
}
