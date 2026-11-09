import { AlertTriangle, Package, TrendingUp } from 'lucide-react'
import { PRODUCTS, SUPPLIER_SUGGESTIONS } from '../../data/mockData.js'
import { formatPrice } from '../../lib/whatsapp.js'

export default function InventoryPage() {
  // stock null = aún no registrado en el panel: no cuenta como stock bajo.
  const lowStock = PRODUCTS.filter((p) => p.stock != null && p.stock <= 5)
  const totalUnits = PRODUCTS.reduce((sum, p) => sum + (p.stock ?? 0), 0)
  const inventoryValue = PRODUCTS.reduce((sum, p) => sum + (p.stock ?? 0) * (p.cost ?? 0), 0)
  const hasStock = PRODUCTS.some((p) => p.stock != null)

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800">Inventario</h1>
      <p className="text-sm text-slate-500">{hasStock ? `${totalUnits} unidades en stock · Valor en costo: ${formatPrice(inventoryValue)}` : 'Stock por registrar: agrega las unidades y el costo de cada producto para ver el valor del inventario.'}</p>

      {lowStock.length > 0 && (
        <section className="mt-5 rounded-3xl bg-red-50 p-4">
          <h2 className="flex items-center gap-2 text-sm font-bold text-red-700"><AlertTriangle size={16} /> Alertas de stock bajo</h2>
          <ul className="mt-2 space-y-1 text-sm text-red-700">
            {lowStock.map((p) => (
              <li key={p.id}>{p.name}: quedan {p.stock} unidades.</li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-5 overflow-hidden rounded-3xl bg-white shadow-glass">
        <table className="w-full text-left text-sm">
          <thead className="bg-brand-50 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-4 py-3">Producto</th>
              <th className="px-4 py-3">Precio</th>
              <th className="px-4 py-3">Costo</th>
              <th className="px-4 py-3">Stock</th>
              <th className="hidden px-4 py-3 sm:table-cell">Margen</th>
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map((p) => {
              const margin = p.cost == null ? null : Math.round(((p.price - p.cost) / p.price) * 100)
              const low = p.stock != null && p.stock <= 5
              return (
                <tr key={p.id} className="border-t border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-700">{p.name}</td>
                  <td className="px-4 py-3">{formatPrice(p.price)}</td>
                  <td className="px-4 py-3">{p.cost == null ? '—' : formatPrice(p.cost)}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2 py-1 text-xs font-bold ${p.stock == null ? 'bg-slate-100 text-slate-500' : low ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}>
                      {p.stock == null ? 'Por registrar' : `${p.stock} u.`}
                    </span>
                  </td>
                  <td className="hidden px-4 py-3 sm:table-cell">{margin == null ? '—' : `${margin}%`}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <section className="glass mt-5 rounded-3xl p-5 shadow-glass">
        <h2 className="flex items-center gap-2 font-bold text-slate-800"><TrendingUp size={18} className="text-brand-600" /> Qué pedir al proveedor</h2>
        <ul className="mt-3 space-y-2">
          {SUPPLIER_SUGGESTIONS.map((s) => {
            const product = PRODUCTS.find((p) => p.id === s.productId)
            return (
              <li key={s.productId} className="flex items-start gap-2 rounded-2xl border border-slate-100 bg-white/80 p-3 text-sm">
                <Package size={16} className="mt-0.5 shrink-0 text-brand-600" />
                <span><strong>{product?.name}</strong> — pedir {s.suggestedQty} unidades. {s.reason}</span>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
