import { useMemo, useState } from 'react'
import { Check, Package, Plus, Sparkles } from 'lucide-react'
import { PRODUCTS, ROUTINES, routineTotal } from '../../data/mockData.js'
import { formatPrice } from '../../lib/whatsapp.js'

export default function PackagesPage() {
  const [name, setName] = useState('')
  const [selected, setSelected] = useState(['p1', 'p2'])
  const [specialPrice, setSpecialPrice] = useState(499)
  const [saved, setSaved] = useState(null)

  const total = useMemo(
    () => selected.reduce((sum, id) => {
      const p = PRODUCTS.find((x) => x.id === id)
      return sum + (p ? (p.promoPrice || p.price) : 0)
    }, 0),
    [selected]
  )
  const saving = total - specialPrice
  const averageTicket = Math.round((specialPrice + 416) / 2)

  const toggle = (id) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  const savePackage = () => {
    if (!name.trim() || selected.length === 0) return
    setSaved({ name: name.trim(), count: selected.length, price: specialPrice, saving })
    setName('')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800">Creador de paquetes</h1>
      <p className="text-sm text-slate-500">Arma combos con precio especial para subir el ticket promedio (hoy: $416).</p>

      <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <section className="glass rounded-3xl p-5 shadow-glass">
          <h2 className="font-bold text-slate-800">Nuevo paquete</h2>
          <label className="mt-3 block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">Nombre del paquete</span>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ej. Rutina Glow de Verano" className="input" />
          </label>
          <p className="mb-2 mt-4 text-sm font-semibold text-slate-700">Elige los productos</p>
          <ul className="space-y-2">
            {PRODUCTS.map((p) => {
              const active = selected.includes(p.id)
              return (
                <li key={p.id}>
                  <button onClick={() => toggle(p.id)} className={`flex w-full items-center justify-between rounded-2xl border px-3 py-2.5 text-left text-sm ${active ? 'border-brand-500 bg-brand-50' : 'border-slate-200 bg-white/80'}`}>
                    <span className="flex items-center gap-2">
                      <span className={`flex h-5 w-5 items-center justify-center rounded-full ${active ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                        {active && <Check size={12} />}
                      </span>
                      {p.name}
                    </span>
                    <span className="font-bold text-brand-700">{formatPrice(p.promoPrice || p.price)}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </section>

        <section className="glass rounded-3xl p-5 shadow-glass">
          <h2 className="flex items-center gap-2 font-bold text-slate-800"><Sparkles size={18} className="text-brand-600" /> Precio especial</h2>
          <label className="mt-3 block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">Precio del paquete (MXN)</span>
            <input type="number" min="0" value={specialPrice} onChange={(e) => setSpecialPrice(Number(e.target.value))} className="input" />
          </label>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><dt className="text-slate-500">Por separado</dt><dd className="font-bold">{formatPrice(total)}</dd></div>
            <div className="flex justify-between"><dt className="text-slate-500">Precio especial</dt><dd className="font-bold text-brand-700">{formatPrice(specialPrice)}</dd></div>
            <div className="flex justify-between"><dt className="text-slate-500">Ahorro para la clienta</dt><dd className="font-bold text-emerald-600">{formatPrice(Math.max(0, saving))}</dd></div>
            <div className="flex justify-between"><dt className="text-slate-500">Ticket estimado con este paquete</dt><dd className="font-bold">{formatPrice(averageTicket)}</dd></div>
          </dl>
          <button onClick={savePackage} disabled={!name.trim() || selected.length === 0} className="btn-primary mt-5 w-full disabled:opacity-50">
            <Plus size={16} /> Guardar paquete
          </button>
          {saved && (
            <p className="mt-3 rounded-2xl bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700">
              Paquete “{saved.name}” guardado (ejemplo local): {saved.count} productos por {formatPrice(saved.price)}, ahorro de {formatPrice(saved.saving)}.
            </p>
          )}
          <h3 className="mt-6 flex items-center gap-2 font-bold text-slate-800"><Package size={18} className="text-brand-600" /> Paquetes actuales</h3>
          <ul className="mt-2 space-y-2">
            {ROUTINES.map((r) => (
              <li key={r.id} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white/80 px-3 py-2.5 text-sm">
                <span className="font-medium text-slate-700">{r.name}</span>
                <span className="font-bold text-brand-700">{formatPrice(r.specialPrice)} <span className="text-xs font-normal text-slate-400 line-through">{formatPrice(routineTotal(r))}</span></span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
