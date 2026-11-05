import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Utilidad `cn` estilo shadcn: combina clases condicionales y resuelve
// conflictos de Tailwind (la última clase gana).
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
