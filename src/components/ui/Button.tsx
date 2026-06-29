'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
  href?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    'relative inline-flex items-center justify-center overflow-hidden',
    'bg-gradient-to-r from-scilla-indigo to-scilla-violet',
    'text-white font-semibold tracking-wide',
    'shadow-lg shadow-scilla-indigo/25',
    'transition-all duration-300',
    'hover:shadow-xl hover:shadow-scilla-violet/30 hover:scale-[1.02]',
    'active:scale-[0.98]',
    'before:absolute before:inset-0 before:bg-gradient-to-r before:from-scilla-violet before:to-scilla-vlight',
    'before:opacity-0 before:transition-opacity before:duration-300',
    'hover:before:opacity-100',
    '[&>*]:relative [&>*]:z-10',
  ].join(' '),
  secondary: [
    'inline-flex items-center justify-center',
    'bg-scilla-mist/10 text-scilla-lav',
    'border border-scilla-lav/20',
    'font-semibold tracking-wide',
    'transition-all duration-300',
    'hover:bg-scilla-lav/10 hover:border-scilla-lav/40 hover:text-white',
    'active:scale-[0.98]',
  ].join(' '),
  ghost: [
    'inline-flex items-center justify-center',
    'text-scilla-lav font-medium',
    'transition-all duration-200',
    'hover:text-white',
    'active:scale-[0.98]',
  ].join(' '),
  outline: [
    'inline-flex items-center justify-center',
    'border border-scilla-indigo/50 text-scilla-lav',
    'font-semibold tracking-wide',
    'transition-all duration-300',
    'hover:border-scilla-indigo hover:bg-scilla-indigo/10 hover:text-white',
    'active:scale-[0.98]',
  ].join(' '),
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg gap-1.5',
  md: 'px-6 py-3 text-sm rounded-xl gap-2',
  lg: 'px-8 py-4 text-base rounded-xl gap-2.5',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(variantClasses[variant], sizeClasses[size], className)}
        {...props}
      >
        <span>{children}</span>
      </button>
    )
  }
)

Button.displayName = 'Button'
