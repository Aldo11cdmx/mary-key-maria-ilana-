export default function StatCard({ icon: Icon, label, value, hint, tone = 'brand' }) {
  const tones = {
    brand: 'bg-brand-100 text-brand-700',
    green: 'bg-emerald-100 text-emerald-700',
    amber: 'bg-amber-100 text-amber-700',
    red: 'bg-red-100 text-red-700'
  }
  return (
    <div className="glass rounded-3xl p-4 shadow-glass">
      <div className={`mb-3 inline-flex rounded-2xl p-2.5 ${tones[tone] || tones.brand}`}>
        <Icon size={20} />
      </div>
      <p className="text-xs font-medium text-slate-500">{label}</p>
      <p className="text-xl font-bold text-slate-800">{value}</p>
      {hint && <p className="mt-1 text-xs text-slate-400">{hint}</p>}
    </div>
  )
}
