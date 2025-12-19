'use client'

import React from 'react'

export function ContentHeader({
  children,
  className,
}: React.PropsWithChildren<{
  className?: string;
}>) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

