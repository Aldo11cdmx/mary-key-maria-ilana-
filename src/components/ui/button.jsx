import { forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils.js'

// Botón estilo shadcn (variantes con class-variance-authority).
// La variante principal usa los colores de marca del proyecto para
// mantener el estilo glassmorphism. Iconos: lucide-react. Sin emojis.
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-200 disabled:pointer-events-none disabled:opacity-50 active:scale-95',
  {
    variants: {
      variant: {
        default: 'bg-brand-600 text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700',
        secondary: 'bg-brand-100 text-brand-700 hover:bg-brand-200',
        outline:
          'border border-brand-200 bg-white/80 text-brand-700 hover:bg-brand-50',
        ghost: 'text-brand-700 hover:bg-brand-50',
        destructive: 'bg-red-600 text-white shadow-lg shadow-red-600/25 hover:bg-red-700'
      },
      size: {
        default: 'h-11 px-5 py-3',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-12 px-6 text-base',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

const Button = forwardRef(function Button({ className, variant, size, ...props }, ref) {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
})

export { Button, buttonVariants }
export default Button
