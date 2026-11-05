import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Sparkles, Tag, X } from 'lucide-react'
import ProductCard from '../components/ProductCard.jsx'
import Input from '../components/ui/input.jsx'
import { fetchProducts } from '../lib/products.js'
import { CATEGORIES, NEEDS, PRODUCTS, ROUTINES, SKIN_TYPES, routineTotal } from '../data/mockData.js'
import { formatPrice } from '../lib/whatsapp.js'
import { useCart } from '../context/CartContext.jsx'

export default function CatalogPage() {
  const [query, setQuery] = useState('')
  const [skinType, setSkinType] = useState('Todas')
  const [need, setNeed] = useState('Todas')
  const [category, setCategory] = useState('Todas')
  const [promoOnly, setPromoOnly] = useState(false)
  const [maxPrice, setMaxPrice] = useState(400)
  const { addItem } = useCart()
  // Ejemplo de consulta a Supabase: si hay llaves, trae los productos
  // reales; si no, usa los datos de ejemplo sin romperse.
  const [products, setProducts] = useState(PRODUCTS)
  const [dataSource, setDataSource] = useState('mock')
  useEffect(() => {
    let alive = true
    fetchProducts().then(({ source, products: loaded }) => {
      if (alive) {
        setProducts(loaded)
        setDataSource(source)
      }
    })
    return () => {
      alive = false
    }
  }, [])

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (query && !`${p.name} ${p.description}`.toLowerCase().includes(query.toLowerCase())) return false
      if (skinType !== 'Todas' && !p.skinTypes.includes(skinType)) return false
      if (need !== 'Todas' && !p.needs.includes(need)) return false
      if (category !== 'Todas' && p.category !== category) return false
      if (promoOnly && !p.promoPrice) return false
      if ((p.promoPrice || p.price) > maxPrice) return false
      return true
    })
  }, [query, skinType, need, category, promoOnly, maxPrice, products])

  const clearFilters = () => {
    setQuery('')
    setSkinType('Todas')
    setNeed('Todas')
    setCategory('Todas')
    setPromoOnly(false)
    setMaxPrice(400)
  }

  return (
    <main className="mx-auto max-w-6xl px-4 pb-10">
      <section className="glass mt-4 rounded-[2rem] p-6 text-center shadow-glass md:p-10">
        <p className="mb-2 inline-flex items-center gap-1 rounded-full bg-brand-100 px-3 py-1 text-xs font-bold text-brand-700">
          <Sparkles size={12} /> Cuidado de la piel personalizado
        </p>
        <h1 className="text-2xl font-bold leading-tight text-slate-800 md:text-4xl">
          Encuentra tu rutina ideal
        </h1>
        <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500 md:text-base">
          Productos seleccionados por María Ilana para tu tipo de piel. Arma tu pedido y envíalo por WhatsApp con un solo clic, sin registrarte.
        </p>
        <div className="mt-5 flex flex-col justify-center gap-2 sm:flex-row">
          <Link to="/quiz" className="btn-primary"><Sparkles size={16} /> Hacer el quiz de piel</Link>
          <a href="#catalogo" className="btn-outline">Ver catálogo</a>
        </div>
      </section>

      <section id="catalogo" className="mt-6">
        <div className="glass rounded-3xl p-4 shadow-glass">
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-slate-400" />
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar producto..." className="pl-11" aria-label="Buscar producto" />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <select value={skinType} onChange={(e) => setSkinType(e.target.value)} className="chip cursor-pointer" aria-label="Tipo de piel">
              <option>Todas</option>
              {SKIN_TYPES.map((s) => <option key={s}>{s}</option>)}
            </select>
            <select value={need} onChange={(e) => setNeed(e.target.value)} className="chip cursor-pointer" aria-label="Necesidad">
              <option>Todas</option>
              {NEEDS.map((n) => <option key={n}>{n}</option>)}
            </select>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="chip cursor-pointer" aria-label="Categoría">
              <option>Todas</option>
              {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
            </select>
            <button onClick={() => setPromoOnly(!promoOnly)} className={`chip ${promoOnly ? 'chip-active' : ''}`}>
              <Tag size={12} /> Solo promociones
            </button>
            <label className="chip cursor-pointer">
              Hasta {formatPrice(maxPrice)}
              <input type="range" min="150" max="400" step="10" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-24 accent-rose-600" aria-label="Precio máximo" />
            </label>
            <button onClick={clearFilters} className="chip"><X size={12} /> Limpiar</button>
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          {filtered.length} producto{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
          {' · '}
          {dataSource === 'supabase' ? 'Datos en vivo desde Supabase' : 'Datos de ejemplo (sin Supabase configurado)'}
        </p>
        {filtered.length === 0 ? (
          <p className="glass mt-4 rounded-3xl p-8 text-center text-sm text-slate-500">No encontramos productos con esos filtros. Prueba limpiar la búsqueda.</p>
        ) : (
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-800">Rutinas recomendadas</h2>
        <p className="text-sm text-slate-500">Paquetes con precio especial para cuidar tu piel completa.</p>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          {ROUTINES.map((routine) => {
            const total = routineTotal(routine)
            const saving = total - routine.specialPrice
            return (
              <article key={routine.id} className="glass rounded-3xl p-5 shadow-glass">
                <h3 className="font-bold text-slate-800">{routine.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{routine.description}</p>
                <p className="mt-3 text-xs text-slate-400 line-through">Por separado: {formatPrice(total)}</p>
                <p className="text-xl font-bold text-brand-700">{formatPrice(routine.specialPrice)}</p>
                <p className="text-xs font-semibold text-emerald-600">Ahorras {formatPrice(saving)}</p>
                <button
                  onClick={() => {
                    routine.productIds.forEach((id) => {
                      const product = PRODUCTS.find((p) => p.id === id)
                      if (product) addItem(product)
                    })
                  }}
                  className="btn-primary mt-4 w-full"
                >
                  Agregar rutina al pedido
                </button>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}
