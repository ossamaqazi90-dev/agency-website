import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  glow?: boolean
  hover?: boolean
}

export function Card({ children, className, glow = false, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'relative rounded-[1.25rem] p-6',
        'bg-white/[0.03] border border-white/[0.08]',
        'backdrop-blur-sm',
        hover && [
          'transition-all duration-500',
          'hover:border-scilla-lav/30 hover:bg-white/[0.06]',
          'hover:-translate-y-1',
          glow ? 'hover:shadow-xl hover:shadow-scilla-indigo/20' : 'hover:shadow-lg hover:shadow-black/30',
        ],
        className
      )}
    >
      {glow && (
        <div
          className="absolute inset-0 rounded-[1.25rem] opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(79,70,229,0.08), transparent 40%)',
          }}
        />
      )}
      {children}
    </div>
  )
}
