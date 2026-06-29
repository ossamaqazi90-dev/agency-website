import { cn } from '@/lib/utils'

type SectionTheme = 'dark' | 'darker' | 'light' | 'gradient'

interface SectionProps {
  children: React.ReactNode
  className?: string
  theme?: SectionTheme
  id?: string
}

const themeClasses: Record<SectionTheme, string> = {
  dark:     'bg-scilla-ink',
  darker:   'bg-[#07070F]',
  light:    'bg-scilla-mist text-scilla-ink',
  gradient: 'bg-gradient-to-b from-scilla-deep/20 to-scilla-ink',
}

export function Section({ children, className, theme = 'dark', id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative py-20 md:py-28 lg:py-32 overflow-hidden',
        themeClasses[theme],
        className
      )}
    >
      {children}
    </section>
  )
}
