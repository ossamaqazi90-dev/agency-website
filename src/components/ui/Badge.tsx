import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'subtle' | 'outline'
}

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase',
        variant === 'default' && 'bg-scilla-indigo/20 text-scilla-lav border border-scilla-indigo/30',
        variant === 'subtle' && 'bg-white/5 text-scilla-lav/70 border border-white/10',
        variant === 'outline' && 'border border-scilla-lav/30 text-scilla-lav',
        className
      )}
    >
      {children}
    </span>
  )
}
