/* eslint-disable @sanity/i18n/no-attribute-string-literals */
/* eslint-disable i18next/no-literal-string */
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export function Logo({
  themeOverride,
  hideText,
}: {
  themeOverride?: string
  hideText?: boolean
}) {
  const { theme, resolvedTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<string | undefined>(
    undefined,
  )

  useEffect(() => {
    setCurrentTheme(theme === 'system' ? resolvedTheme : theme)
  }, [theme, resolvedTheme])

  const logoSrc = () => {
    if (themeOverride === 'dark') {
      return '/images/reactr-blue-icon.png'
    }

    return currentTheme === 'light'
      ? '/images/reactr-blue-icon.png'
      : '/images/reactr-icon-white.png'
  }

  const logoText = () => {
    if (themeOverride === 'dark') {
      return (
        <p className="hidden font-cabinet-grotesk text-4xl font-black text-blue-800 sm:block">
          reactr
        </p>
      )
    }

    return (
      <p className="hidden font-cabinet-grotesk text-3xl font-black text-blue-800 dark:text-white sm:block">
        reactr
      </p>
    )
  }

  return (
    <div className="flex flex-row items-center">
      <Image
        src={logoSrc()}
        className="h-12 w-12"
        height={14}
        width={14}
        unoptimized
        alt="reactr-logo"
      />
      {!hideText && logoText()}
    </div>
  )
}

export function LogoIcon() {
  const { theme, resolvedTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<string | undefined>(
    undefined,
  )

  useEffect(() => {
    setCurrentTheme(theme === 'system' ? resolvedTheme : theme)
  }, [theme, resolvedTheme])

  const logoSrc =
    currentTheme === 'light'
      ? '/images/reactr-blue-icon.png'
      : '/images/reactr-icon-white.png'

  return (
    <Image src={logoSrc} width={30} height={30} alt="reactr-logo" unoptimized />
  )
}

export function LogoIconLarge() {
  const { theme, resolvedTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<string | undefined>(
    undefined,
  )

  useEffect(() => {
    setCurrentTheme(theme === 'system' ? resolvedTheme : theme)
  }, [theme, resolvedTheme])

  const logoSrc =
    currentTheme === 'light'
      ? '/images/reactr-blue-icon.png'
      : '/images/reactr-icon-white.png'

  return (
    <Image
      src={logoSrc}
      className="h-16 w-16"
      width={16}
      height={16}
      alt="reactr-logo"
      unoptimized
    />
  )
}
