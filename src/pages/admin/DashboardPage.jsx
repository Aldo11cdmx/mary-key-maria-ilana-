import { Banknote, CalendarDays, TrendingUp, Wallet } from 'lucide-react'
import StatCard from '../../components/StatCard.jsx'
import { BEST_SELLERS, PRODUCTS, SALES_SUMMARY, WEEKLY_SALES } from '../../data/mockData.js'
import { formatPrice } from '../../lib/whatsapp.js'

export default function DashboardPage() {
  const maxWeek = Math.max(...WEEKLY_SALES.map((d) => d.amount))
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800">Hola, María Ilana</h1>
      <p className="text-sm text-slate-500">Resumen de hoy y de la semana.</p>
      <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard icon={CalendarDays} label="Ventas de hoy" value={formatPrice(SALES_SUMMARY.today)} hint={`${SALES_SUMMARY.ordersToday} pedidos hoy`} tone="brand" />
        <StatCard icon={TrendingUp} label="Ventas de la semana" value={formatPrice(SALES_SUMMARY.week)} hint={`Ticket promedio ${formatPrice(SALES_SUMMARY.averageTicket)}`} tone="green" />
        <StatCard icon={Wallet} label="Cobros pendientes" value={formatPrice(SALES_SUMMARY.pendingPayments)} hint="2 clientas por cobrar" tone="amber" />
        <StatCard icon={Banknote} label="Ganancia neta" value={formatPrice(SALES_SUMMARY.netProfit)} hint="Semana actual" tone="green" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <section className="glass rounded-3xl p-5 shadow-glass">
          <h2 className="font-bold text-slate-800">Ventas de los últimos 7 días</h2>
          <div className="mt-4 flex items-end gap-2">
            {WEEKLY_SALES.map((d) => (
              <div key={d.day} className="flex flex-1 flex-col items-center gap-1">
                <span className="text-[11px] font-semibold text-slate-500">{formatPrice(d.amount)}</span>
                <div className="w-full rounded-t-lg bg-brand-500" style={{ height: `${Math.max(12, (d.amount / maxWeek) * 120)}px` }} />
                <span className="text-xs text-slate-500">{d.day}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="glass rounded-3xl p-5 shadow-glass">
          <h2 className="font-bold text-slate-800">Productos más vendidos</h2>
          <ul className="mt-4 space-y-3">
            {BEST_SELLERS.map(({ productId, units }) => {
              const product = PRODUCTS.find((p) => p.id === productId)
              if (!product) return null
              return (
                <li key={productId} className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-slate-700">{product.name}</span>
                  <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-bold text-brand-700">{units} vendidos</span>
                </li>
              )
            })}
          </ul>
          <p className="mt-4 rounded-2xl bg-amber-50 px-3 py-2 text-xs text-amber-700">
            Sugerencia: el Protector Solar FPS 50 tiene solo 4 en stock y es de los más vendidos. Conviene pedirlo al proveedor.
          </p>
        </section>
      </div>
    </div>
  )
}
