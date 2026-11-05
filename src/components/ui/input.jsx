import { forwardRef } from 'react'
import { cn } from '../../lib/utils.js'

// Campo de texto estilo shadcn, con el aspecto del proyecto.
const Input = forwardRef(function Input({ className, type = 'text', ...props }, ref) {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        'flex h-11 w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
})

export { Input }
export default Input
