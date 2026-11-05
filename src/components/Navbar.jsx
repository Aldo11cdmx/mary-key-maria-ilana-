import { Link, NavLink } from 'react-router-dom'
import { ShoppingBag, Sparkles, UserCog } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { CONSULTANT } from '../data/mockData.js'

export default function Navbar() {
  const { count, setIsOpen } = useCart()
  return (
    <header className="sticky top-0 z-40 glass shadow-glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white">
            <Sparkles size={20} />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-brand-800">María Ilana</span>
            <span className="block text-xs text-slate-500">Consultora de belleza</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
          <NavLink to="/" className={({ isActive }) => `rounded-full px-3 py-2 ${isActive ? 'bg-brand-100 text-brand-700' : 'text-slate-600 hover:text-brand-700'}`}>Catálogo</NavLink>
          <NavLink to="/quiz" className={({ isActive }) => `rounded-full px-3 py-2 ${isActive ? 'bg-brand-100 text-brand-700' : 'text-slate-600 hover:text-brand-700'}`}>Quiz de piel</NavLink>
          <NavLink to="/carrito" className={({ isActive }) => `rounded-full px-3 py-2 ${isActive ? 'bg-brand-100 text-brand-700' : 'text-slate-600 hover:text-brand-700'}`}>Mi pedido</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/admin" className="hidden items-center gap-1 rounded-full px-3 py-2 text-xs font-semibold text-slate-500 hover:text-brand-700 sm:inline-flex" title="Panel de la consultora">
            <UserCog size={16} /> Admin
          </Link>
          <button onClick={() => setIsOpen(true)} className="relative inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700" aria-label="Ver carrito">
            <ShoppingBag size={18} />
            <span className="hidden sm:inline">Pedido</span>
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-brand-700 ring-2 ring-brand-600">{count}</span>
            )}
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 border-t border-white/60 px-4 py-2 text-xs font-medium text-slate-600 md:hidden">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-brand-700' : '')}>Catálogo</NavLink>
        <NavLink to="/quiz" className={({ isActive }) => (isActive ? 'text-brand-700' : '')}>Quiz de piel</NavLink>
        <NavLink to="/carrito" className={({ isActive }) => (isActive ? 'text-brand-700' : '')}>Mi pedido</NavLink>
        <span className="text-slate-400">|</span>
        <span>{CONSULTANT.phoneDisplay}</span>
      </div>
    </header>
  )
}
