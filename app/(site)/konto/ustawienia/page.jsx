"use client"

import { useSession, getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const page = () => {
  const [userData, setUserData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const { data: session } = useSession()
  const router = useRouter()

  // check if logged in and redirect to home page if so
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        const fetchUser = async () => {
          setIsLoading(true)
          const response = await fetch(`/api/users/${session?.user.id}/data`)
          const data = await response.json()
          setUserData(data)
          setIsLoading(false)
        }
        fetchUser()
      } else {
        setIsLoading(false)
        router.replace("/")
      }
    })
  }, [router, session])

  if (isLoading) {
    return <p>Pobieranie danych...</p>
  }

  return (
    <div className='max-w-[40rem]'>
      <h1 className='text-2xl font-medium'>Ustawienia konta</h1>
      <div className='mt-6 border-gray-400 pt-4 flex flex-wrap mb-6 flex-col w-full gap-2'>
        <h2 className='text-xl'>Dane konta</h2>
        <div className='mt-4 px-4 py-2 border rounded-lg'>
          <div className='flex justify-between'>
            <div className='w-full md:w-1/2 px-3 mb-6'>
              <label className='block  tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2'>
                Imię
              </label>
              <input
                className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500'
                type='text'
                placeholder='Imię'
                defaultValue={userData?.name.split(" ")[0]}
                required
              />
            </div>
            <div className='w-full md:w-1/2 px-3 mb-6'>
              <label className='block  tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2'>
                Nazwisko
              </label>
              <input
                className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500'
                type='text'
                placeholder='Nazwisko'
                defaultValue={userData?.name.split(" ")[1]}
                required
              />
            </div>
          </div>
          <div className='flex justify-end'>
            <button
              className='appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3'
              type='submit'
            >
              Zapisz zmiany
            </button>
          </div>
        </div>
        <div className='mt-4 px-4 py-2 border rounded-lg'>
          <label className='block tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2'>
            Adres e-mail
          </label>
          <div className='flex-between'>
            <p>{userData?.email}</p>
            <a className='text-elo'>Zmień</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
