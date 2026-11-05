import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, RotateCcw, Sparkles } from 'lucide-react'
import { PRODUCTS, ROUTINES, SKIN_TYPES, routineTotal } from '../data/mockData.js'
import { formatPrice } from '../lib/whatsapp.js'
import { useCart } from '../context/CartContext.jsx'

const QUESTIONS = [
  { key: 'skinType', title: '¿Cómo es tu piel?', options: SKIN_TYPES },
  { key: 'goal', title: '¿Cuál es tu objetivo principal?', options: ['Luminosidad', 'Hidratación', 'Antiedad', 'Control de grasa', 'Protección solar'] },
  { key: 'age', title: '¿En qué rango de edad estás?', options: ['Menos de 25', '25 a 35', '36 a 50', 'Más de 50'] }
]

export default function QuizPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [done, setDone] = useState(false)
  const { addItem } = useCart()

  const question = QUESTIONS[step]
  const recommendation =
    ROUTINES.find((r) => r.goal === answers.goal) ||
    ROUTINES.find((r) => r.skinTypes.includes(answers.skinType)) ||
    ROUTINES[0]

  const choose = (value) => {
    const next = { ...answers, [question.key]: value }
    setAnswers(next)
    if (step + 1 < QUESTIONS.length) setStep(step + 1)
    else setDone(true)
  }

  const reset = () => {
    setAnswers({})
    setStep(0)
    setDone(false)
  }

  if (done && recommendation) {
    const total = routineTotal(recommendation)
    const products = recommendation.productIds.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean)
    return (
      <main className="mx-auto max-w-2xl px-4 pb-10">
        <section className="glass mt-4 rounded-[2rem] p-6 text-center shadow-glass md:p-8">
          <p className="mb-2 inline-flex items-center gap-1 rounded-full bg-brand-100 px-3 py-1 text-xs font-bold text-brand-700">
            <Sparkles size={12} /> Tu rutina ideal
          </p>
          <h1 className="text-2xl font-bold text-slate-800">{recommendation.name}</h1>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
            Para piel {answers.skinType?.toLowerCase()}, objetivo {answers.goal?.toLowerCase()} y edad {answers.age}. {recommendation.description}
          </p>
          <ul className="mx-auto mt-5 max-w-md space-y-2 text-left">
            {products.map((p) => (
              <li key={p.id} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white/80 px-4 py-3 text-sm">
                <span className="font-medium text-slate-700">{p.name}</span>
                <span className="font-bold text-brand-700">{formatPrice(p.promoPrice || p.price)}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate-400 line-through">Por separado: {formatPrice(total)}</p>
          <p className="text-2xl font-bold text-brand-700">{formatPrice(recommendation.specialPrice)}</p>
          <div className="mt-5 flex flex-col justify-center gap-2 sm:flex-row">
            <button
              onClick={() => products.forEach((p) => addItem(p))}
              className="btn-primary"
            >
              Agregar rutina al pedido
            </button>
            <button onClick={reset} className="btn-outline"><RotateCcw size={16} /> Repetir quiz</button>
          </div>
          <Link to="/" className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:underline">Volver al catálogo</Link>
        </section>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-2xl px-4 pb-10">
      <section className="glass mt-4 rounded-[2rem] p-6 shadow-glass md:p-8">
        <p className="text-xs font-bold uppercase tracking-wide text-brand-600">Pregunta {step + 1} de {QUESTIONS.length}</p>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-brand-100">
          <div className="h-full rounded-full bg-brand-600 transition-all" style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }} />
        </div>
        <h1 className="mt-5 text-xl font-bold text-slate-800 md:text-2xl">{question.title}</h1>
        <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {question.options.map((option) => (
            <button key={option} onClick={() => choose(option)} className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-4 text-left text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700">
              {option}
            </button>
          ))}
        </div>
        {step > 0 && (
          <button onClick={() => setStep(step - 1)} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-brand-700">
            <ArrowLeft size={16} /> Atrás
          </button>
        )}
        <p className="mt-6 flex items-center gap-1 text-xs text-slate-400">
          <ArrowRight size={12} /> Al terminar te recomiendo la rutina ideal para ti.
        </p>
      </section>
    </main>
  )
}
