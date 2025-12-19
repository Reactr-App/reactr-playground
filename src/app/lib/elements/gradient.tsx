import React from 'react'
import { clsx } from 'clsx'

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-gradient-to-br from-[#F8A0D0] via-[#818CF8] to-[#487099] sm:bg-gradient-to-br',
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative">
      <div
        className={clsx(
          'absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0',
          'bg-gradient-to-br from-[#fff1be] via-[#ee87cb] to-[#b060ff]',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}
