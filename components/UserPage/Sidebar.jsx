import {
  Cog6ToothIcon,
  MapPinIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline"
import Link from "next/link"
import { authOptions } from "@app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

const Sidebar = async () => {
  const session = await getServerSession(authOptions)
  const response = await fetch(
    `${process.env.PUBLIC_URL}/api/users/${session?.user.id}/data`
  )
  const data = await response.json()

  return (
    <div className='flex flex-col h-full w-64'>
      <div className='p-2 flex flex-col gap-2 h-full'>
        <div className='px-4 py-2'>
          <p className='text-sm'>Cześć,</p>
          <p className='text-lg font-bold'>
            {data?.name ? <>{data?.name.split(" ")[0]}</> : ""}
          </p>
        </div>
        <Link
          href='/konto'
          className='
          flex flex-row hover:bg-neutral-200/50 px-4 py-2 rounded-lg'
        >
          <ShoppingBagIcon className='w-6 mr-2' />
          <p>Zamówienia</p>
        </Link>
        <Link
          href='/konto/dane'
          className='
          flex flex-row hover:bg-neutral-200/50 px-4 py-2 rounded-lg'
        >
          <MapPinIcon className='w-6 mr-2' />
          <p>Dane do zamówień</p>
        </Link>
        <Link
          href='/konto/ustawienia'
          className='
          flex flex-row hover:bg-neutral-200/50 px-4 py-2 rounded-lg'
        >
          <Cog6ToothIcon className='w-6 mr-2' />
          <p>Ustawienia konta</p>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
