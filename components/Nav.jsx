"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { signOut, useSession } from "next-auth/react"
import {
  SunIcon,
  MoonIcon,
  UserIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid"
import { usePathname } from "next/navigation"

const Nav = () => {
  const { data: session } = useSession()
  const [toggleDropdown, setToggleDropdown] = useState(false)

  const [isDarkMode, setDarkMode] = useState(false)

  const path = usePathname()

  const handleDarkModeChange = () => {
    const newDarkMode = !isDarkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("theme", newDarkMode ? "dark" : "light")
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem("theme")

    if (localTheme === "dark") {
      document.documentElement.classList.add("dark")
      setDarkMode(true)
    } else if (localTheme === "light") {
      document.documentElement.classList.remove("dark")
      setDarkMode(false)
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark")
      setDarkMode(true)
    } else {
      localStorage.setItem("theme", "light")
      document.documentElement.classList.remove("dark")
      setDarkMode(false)
    }
  }, [])

  if (path === "/admin") return null

  return (
    <nav className='flex-between w-full bg-elo sticky top-0 z-50 drop-shadow-bold h-20 mx-8'>
      <div className='max-w-[80rem] w-full mx-auto flex duration-500 transition-transform px-1 sm:px-8 md:px-16 py-2 flex-between'>
        <div className='flex-center'>
          <Link href='/'>
            <Image
              src='/assets/images/logo.png'
              alt='logo Elo Studio'
              width={75}
              height={75}
              className='object-contain h-20 w-20'
            />
            <p className='logo_text sr-only'>Elo Studio</p>
          </Link>
          <div className='flex h-8 w-8 items-center justify-center rounded-full'>
            {isDarkMode ? (
              <SunIcon
                className='inline-block h-6 w-6 rounded-full text-gray-950'
                aria-hidden='true'
              />
            ) : (
              <SunIcon
                className='inline-block h-6 w-6 rounded-full text-orange-300'
                aria-hidden='true'
              />
            )}
          </div>
          <label className='relative inline-flex cursor-pointer items-center'>
            <span className='sr-only'>Tryb ciemny</span>
            <input
              type='checkbox'
              checked={isDarkMode}
              onChange={handleDarkModeChange}
              className='peer sr-only'
            />
            <div className="peer h-6 w-11 rounded-full bg-orange-300 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-klik peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-1 peer-focus:ring-orange-300 dark:border-gray-600 dark:bg-teal-300 dark:peer-focus:ring-blue-400"></div>
          </label>
          <div className='flex h-8 w-8 items-center justify-center rounded-full'>
            {isDarkMode ? (
              <MoonIcon
                className='inline-block h-6 w-6 text-white'
                aria-hidden='true'
              />
            ) : (
              <MoonIcon
                className='inline-block h-6 w-6 text-gray-950'
                aria-hidden='true'
              />
            )}
          </div>
        </div>
        {/* Desktop Navigation */}
        <div className='sm:flex hidden gap-2'>
          <button
            type='button'
            className='black_btn text-white flex items-center gap-2 h-10'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 576 512'
              height={24}
              width={24}
            >
              <path
                fill='#ffffff'
                d='M171.7 191.1H404.3L322.7 35.07C316.6 23.31 321.2 8.821 332.9 2.706C344.7-3.409 359.2 1.167 365.3 12.93L458.4 191.1H544C561.7 191.1 576 206.3 576 223.1C576 241.7 561.7 255.1 544 255.1L492.1 463.5C484.1 492 459.4 512 430 512H145.1C116.6 512 91 492 83.88 463.5L32 255.1C14.33 255.1 0 241.7 0 223.1C0 206.3 14.33 191.1 32 191.1H117.6L210.7 12.93C216.8 1.167 231.3-3.409 243.1 2.706C254.8 8.821 259.4 23.31 253.3 35.07L171.7 191.1zM191.1 303.1C191.1 295.1 184.8 287.1 175.1 287.1C167.2 287.1 159.1 295.1 159.1 303.1V399.1C159.1 408.8 167.2 415.1 175.1 415.1C184.8 415.1 191.1 408.8 191.1 399.1V303.1zM271.1 303.1V399.1C271.1 408.8 279.2 415.1 287.1 415.1C296.8 415.1 304 408.8 304 399.1V303.1C304 295.1 296.8 287.1 287.1 287.1C279.2 287.1 271.1 295.1 271.1 303.1zM416 303.1C416 295.1 408.8 287.1 400 287.1C391.2 287.1 384 295.1 384 303.1V399.1C384 408.8 391.2 415.1 400 415.1C408.8 415.1 416 408.8 416 399.1V303.1z'
              />
            </svg>
            <p>Koszyk</p>
          </button>
          {session?.user ? (
            <div className='flex gap-3 items-center'>
              <button
                type='button'
                onClick={signOut}
                className='outline_btn h-10'
              >
                Wyloguj
              </button>

              <Link
                href='/konto'
                className=' hover:scale-110 hover:bg-black transition-transform duration-150 rounded-full p-1'
              >
                <UserIcon
                  className='inline-block h-8 w-8 text-white'
                  aria-hidden='true'
                />
              </Link>
              {session?.user.role === "ADMIN" && (
                <Link
                  href='/admin'
                  className=' hover:scale-110 hover:bg-black transition-transform duration-150 rounded-full p-1'
                >
                  <LockClosedIcon
                    className='inline-block h-8 w-8 text-white'
                    aria-hidden='true'
                  />
                </Link>
              )}
            </div>
          ) : (
            <>
              <Link href='/logowanie' className='black_btn'>
                <button type='button'>Zaloguj</button>
              </Link>
              <Link href='/rejestracja' className='black_btn'>
                <button type='button'>Załóż konto</button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex relative gap-2'>
          <button
            type='button'
            className='black_btn text-white flex items-center gap-2 h-10'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 576 512'
              height={24}
              width={24}
            >
              <path
                fill='#ffffff'
                d='M171.7 191.1H404.3L322.7 35.07C316.6 23.31 321.2 8.821 332.9 2.706C344.7-3.409 359.2 1.167 365.3 12.93L458.4 191.1H544C561.7 191.1 576 206.3 576 223.1C576 241.7 561.7 255.1 544 255.1L492.1 463.5C484.1 492 459.4 512 430 512H145.1C116.6 512 91 492 83.88 463.5L32 255.1C14.33 255.1 0 241.7 0 223.1C0 206.3 14.33 191.1 32 191.1H117.6L210.7 12.93C216.8 1.167 231.3-3.409 243.1 2.706C254.8 8.821 259.4 23.31 253.3 35.07L171.7 191.1zM191.1 303.1C191.1 295.1 184.8 287.1 175.1 287.1C167.2 287.1 159.1 295.1 159.1 303.1V399.1C159.1 408.8 167.2 415.1 175.1 415.1C184.8 415.1 191.1 408.8 191.1 399.1V303.1zM271.1 303.1V399.1C271.1 408.8 279.2 415.1 287.1 415.1C296.8 415.1 304 408.8 304 399.1V303.1C304 295.1 296.8 287.1 287.1 287.1C279.2 287.1 271.1 295.1 271.1 303.1zM416 303.1C416 295.1 408.8 287.1 400 287.1C391.2 287.1 384 295.1 384 303.1V399.1C384 408.8 391.2 415.1 400 415.1C408.8 415.1 416 408.8 416 399.1V303.1z'
              />
            </svg>
            <p className='hidden sm:block'>Koszyk</p>
          </button>
          {session?.user ? (
            <div className='flex'>
              <div className=' hover:scale-110 hover:bg-black transition-transform duration-150 rounded-full p-1'>
                <UserIcon
                  className='inline-block h-8 w-8 text-white'
                  aria-hidden='true'
                />
              </div>

              {toggleDropdown && (
                <div className='dropdown'>
                  <Link
                    href='/konto'
                    className='dropdown_link'
                    onClick={() => setToggleDropdown(false)}
                  >
                    Moje konto
                  </Link>
                  <button
                    type='button'
                    onClick={() => {
                      setToggleDropdown(false)
                      signOut()
                    }}
                    className='mt-5 w-full black_btn'
                  >
                    Wyloguj
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href='/logowanie' className='black_btn'>
                <button type='button'>Zaloguj się</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav
