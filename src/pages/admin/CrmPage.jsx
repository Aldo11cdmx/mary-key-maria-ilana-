import { useMemo, useState } from 'react'
import { Bell, MessageCircle, Phone } from 'lucide-react'
import { CLIENTS, PRODUCTS } from '../../data/mockData.js'
import { formatPrice } from '../../lib/whatsapp.js'

function statusStyle(status) {
  if (status === 'activa') return 'bg-emerald-100 text-emerald-700'
  if (status === 'inactiva') return 'bg-red-100 text-red-700'
  return 'bg-sky-100 text-sky-700'
}

export default function CrmPage() {
  const [filter, setFilter] = useState('todas')
  const clients = useMemo(
    () => (filter === 'todas' ? CLIENTS : CLIENTS.filter((c) => c.status === filter)),
    [filter]
  )
  const soon = CLIENTS.filter((c) => c.daysLeft > 0 && c.daysLeft <= 7)

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800">Clientas</h1>
      <p className="text-sm text-slate-500">Historial, producto favorito y reabastecimiento predictivo.</p>

      {soon.length > 0 && (
        <section className="mt-5 rounded-3xl bg-amber-50 p-4">
          <h2 className="flex items-center gap-2 text-sm font-bold text-amber-800"><Bell size={16} /> Reabastecimiento esta semana</h2>
          <ul className="mt-2 space-y-1 text-sm text-amber-800">
            {soon.map((c) => (
              <li key={c.id}>A <strong>{c.name}</strong> se le acaba su {c.lastProduct} en {c.daysLeft} días. Ofrecer reabastecimiento.</li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {['todas', 'activa', 'inactiva', 'nueva'].map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={`chip ${filter === f ? 'chip-active' : ''}`}>
            {f === 'todas' ? 'Todas' : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
        {clients.map((client) => {
          const favorite = PRODUCTS.find((p) => p.id === client.favoriteProductId)
          const reminder = `Hola ${client.name}, te saluda María Ilana. Tu ${client.lastProduct} está por terminarse, ¿te preparo tu reabastecimiento?`
          const waLink = `https://wa.me/5215571741465?text=${encodeURIComponent(reminder)}`
          return (
            <article key={client.id} className="glass rounded-3xl p-5 shadow-glass">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h2 className="font-bold text-slate-800">{client.name}</h2>
                  <p className="flex items-center gap-1 text-xs text-slate-500"><Phone size={12} /> {client.phone} · Piel {client.skinType}</p>
                </div>
                <span className={`rounded-full px-2 py-1 text-xs font-bold ${statusStyle(client.status)}`}>{client.status}</span>
              </div>
              <dl className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-2xl bg-white/80 p-2"><dt className="text-[11px] text-slate-400">Compras</dt><dd className="font-bold text-slate-700">{client.purchases}</dd></div>
                <div className="rounded-2xl bg-white/80 p-2"><dt className="text-[11px] text-slate-400">Total gastado</dt><dd className="font-bold text-slate-700">{formatPrice(client.totalSpent)}</dd></div>
                <div className="rounded-2xl bg-white/80 p-2"><dt className="text-[11px] text-slate-400">Última compra</dt><dd className="text-xs font-bold text-slate-700">{client.lastPurchase}</dd></div>
              </dl>
              <p className="mt-3 text-sm text-slate-600">Favorito: <strong>{favorite?.name || client.lastProduct}</strong></p>
              <p className="text-sm text-slate-600">
                {client.daysLeft > 0
                  ? `Se le acaba su ${client.lastProduct} en ${client.daysLeft} días.`
                  : 'Sin reabastecimiento estimado. Conviene contactarla para reactivarla.'}
              </p>
              <a href={waLink} target="_blank" rel="noreferrer" className="btn-outline mt-4 w-full">
                <MessageCircle size={16} /> Enviar recordatorio por WhatsApp
              </a>
            </article>
          )
        })}
      </div>
    </div>
  )
}
