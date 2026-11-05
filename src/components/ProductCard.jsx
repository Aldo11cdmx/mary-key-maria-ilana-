import { Plus, Star, Tag } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../lib/whatsapp.js'

const GRADIENTS = [
  'from-rose-200 to-rose-400',
  'from-amber-100 to-orange-300',
  'from-sky-100 to-sky-300',
  'from-emerald-100 to-emerald-300',
  'from-violet-100 to-violet-300',
  'from-pink-100 to-fuchsia-300'
]

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart()
  const price = product.promoPrice || product.price
  const lowStock = product.stock <= 5
  const gradient = GRADIENTS[index % GRADIENTS.length]
  return (
    <article className="glass flex flex-col overflow-hidden rounded-3xl shadow-glass">
      <div className={`relative flex h-32 items-center justify-center bg-gradient-to-br ${gradient}`}>
        <span className="text-4xl font-bold text-white/80">{product.name.charAt(0)}</span>
        {product.promoPrice && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-brand-600 px-2 py-1 text-xs font-bold text-white">
            <Tag size={12} /> Promo
          </span>
        )}
        <span className={`absolute right-3 top-3 rounded-full px-2 py-1 text-xs font-semibold ${lowStock ? 'bg-red-100 text-red-700' : 'bg-white/90 text-slate-600'}`}>
          {lowStock ? `Quedan ${product.stock}` : `Stock: ${product.stock}`}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-bold leading-snug text-slate-800">{product.name}</h3>
          <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-amber-600">
            <Star size={12} fill="currentColor" /> {product.rating}
          </span>
        </div>
        <p className="text-xs leading-relaxed text-slate-500">{product.description}</p>
        <p className="text-xs text-slate-400">Para piel: {product.skinTypes.join(', ')}</p>
        <div className="mt-auto flex items-end justify-between gap-2 pt-2">
          <div>
            {product.promoPrice && (
              <p className="text-xs text-slate-400 line-through">{formatPrice(product.price)}</p>
            )}
            <p className="text-lg font-bold text-brand-700">{formatPrice(price)}</p>
          </div>
          <button
            onClick={() => addItem(product)}
            disabled={product.stock === 0}
            className="inline-flex items-center gap-1 rounded-full bg-brand-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-brand-700 disabled:opacity-40"
          >
            <Plus size={14} /> Agregar
          </button>
        </div>
      </div>
    </article>
  )
}
