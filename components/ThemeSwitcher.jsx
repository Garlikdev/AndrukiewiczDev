"use client"
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <div>
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <SunIcon
            className='inline-block h-8 w-8 rounded-full text-yellow-500'
            aria-hidden='true'
          />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <MoonIcon
            className='inline-block h-8 w-8 rounded-full text-blue-600'
            aria-hidden='true'
          />
        </button>
      )}
    </div>
  )
}

export default ThemeSwitcher
