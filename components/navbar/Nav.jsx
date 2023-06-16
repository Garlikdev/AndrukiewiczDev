"use client"

import { useContext } from "react"
import Link from "next/link"
import Image from "next/image"
import { signOut, useSession } from "next-auth/react"
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/solid"
import { usePathname } from "next/navigation"
import ThemeSwitcher from "../ThemeSwitcher"
import NavDropdown from "./NavDropdown"
import { ShoppingBagIcon } from "@heroicons/react/20/solid"
import CartContext from "@/context/CartContext"

const Nav = () => {
  const { cart } = useContext(CartContext)
  const cartItems = cart?.cartItems
  const { data: session } = useSession()

  const path = usePathname()

  if (path === "/admin") return null

  return (
    <nav className='flex-between w-full bg-elo sticky top-0 z-50 drop-shadow-bold h-20 mx-8'>
      <div className='max-w-[80rem] w-full mx-auto flex duration-500 transition-transform px-1 sm:px-8 md:px-16 py-2 flex-between'>
        <div className='flex items-center gap-4'>
          <Link href='/' className='h-20 w-20 flex relative'>
            <Image
              src='/assets/images/logo.png'
              alt='logo ELO Pokrowce'
              fill
              priority
              sizes='(min-width: 60em) 10vw,
                    (min-width: 28em) 15vw,
                    25vw'
              className='object-contain h-20 w-20'
            />
            <p className='sr-only'>ELO Pokrowce</p>
          </Link>
          <ThemeSwitcher />
        </div>
        {/* Desktop Navigation */}
        <div className='flex gap-2'>
          <Link
            href='/koszyk'
            className='px-3 py-2 flex flex-row items-center text-center bg-white dark:bg-neutral-900 shadow-highlight rounded-full hover:bg-neutral-100 hover:dark:bg-neutral-800'
          >
            <ShoppingBagIcon className='h-6 w-6' />
            <span className='hidden lg:inline ml-1'>
              Koszyk (<b>{cartItems?.length || 0}</b>)
            </span>
          </Link>
          <NavDropdown session={session} />
        </div>
      </div>
    </nav>
  )
}

export default Nav
