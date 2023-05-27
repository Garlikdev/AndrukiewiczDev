"use client"

import {
  Cog6ToothIcon,
  MapPinIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline"
import {
  ShoppingBagIcon as ShoppingBagSolid,
  MapPinIcon as MapPinSolid,
  Cog6ToothIcon as CogSolid,
} from "@heroicons/react/24/solid"
import Link from "next/link"

import { useSession } from "next-auth/react"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const Sidebar = () => {
  const [userData, setUserData] = useState()
  const { data: session } = useSession()
  const router = useRouter()
  const path = usePathname()

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/data`)
      const data = await response.json()
      setUserData(data)
    }

    if (session?.user.id) fetchPosts()
  }, [session?.user.id])
  return (
    <div className='flex flex-col h-full w-64'>
      <div className='p-2 flex flex-col gap-2 h-full'>
        <div className='px-4 py-2'>
          <p className='text-sm'>Cześć,</p>
          <p className='text-lg font-bold'>
            {userData?.name ? <>{userData?.name.split(" ")[0]}</> : ""}
          </p>
        </div>
        <Link
          href='/konto'
          className='
          flex flex-row hover:bg-neutral-200/50 px-4 py-2 rounded-lg'
        >
          {path === "/konto" ? (
            <ShoppingBagSolid className='w-6 mr-2' />
          ) : (
            <ShoppingBagIcon className='w-6 mr-2' />
          )}

          <p>Zamówienia</p>
        </Link>
        <Link
          href='/konto/dane'
          className='
          flex flex-row hover:bg-neutral-200/50 px-4 py-2 rounded-lg'
        >
          {path === "/konto/dane" ? (
            <MapPinSolid className='w-6 mr-2' />
          ) : (
            <MapPinIcon className='w-6 mr-2' />
          )}
          <p>Dane do zamówień</p>
        </Link>
        <Link
          href='/konto/ustawienia'
          className='
          flex flex-row hover:bg-neutral-200/50 px-4 py-2 rounded-lg'
        >
          {path === "/konto/ustawienia" ? (
            <CogSolid className='w-6 mr-2' />
          ) : (
            <Cog6ToothIcon className='w-6 mr-2' />
          )}
          <p>Ustawienia konta</p>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
