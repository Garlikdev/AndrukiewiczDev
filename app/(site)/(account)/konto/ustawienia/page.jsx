"use client"

import { useSession, getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default async function Ustawienia() {
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
    <div className='w-full'>
      <div className='max-w-[40rem]'>
        <h1 className='text-2xl font-medium'>Ustawienia konta</h1>
        <div className='mt-6 pt-4 flex flex-wrap mb-6 flex-col w-full gap-2'>
          <h2 className='text-xl'>Dane konta</h2>
          <div className='mt-4 px-4 py-2 border border-neutral-400 dark:border-neutral-700 rounded-lg'>
            <div className='flex justify-between'>
              <div className='w-full md:w-1/2 px-3 mb-6'>
                <label className='block  tracking-wide text-neutral-700 dark:text-neutral-200 text-xs font-bold mb-2'>
                  Imię
                </label>
                <input
                  className='appearance-none block w-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-white border border-neutral-400 dark:border-neutral-700 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-neutral-500'
                  type='text'
                  placeholder='Imię'
                  defaultValue={userData?.name}
                  required
                />
              </div>
              <div className='w-full md:w-1/2 px-3 mb-6'>
                <label className='block  tracking-wide text-neutral-700 dark:text-neutral-200 text-xs font-bold mb-2'>
                  Nazwisko
                </label>
                <input
                  className='appearance-none block w-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-white border border-neutral-400 dark:border-neutral-700 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-neutral-500'
                  type='text'
                  placeholder='Nazwisko'
                  defaultValue={userData?.lastName}
                  required
                />
              </div>
            </div>
            <div className='flex justify-end'>
              <button
                className='appearance-none bg-neutral-200 text-neutral-900 px-2 py-1 shadow-sm border border-neutral-400 rounded-md mr-3'
                type='submit'
              >
                Zapisz zmiany
              </button>
            </div>
          </div>
          <div className='mt-4 px-4 py-2 border border-neutral-400 dark:border-neutral-700 rounded-lg'>
            <label className='block tracking-wide text-neutral-700 dark:text-neutral-200 text-xs font-bold mb-2'>
              Adres e-mail
            </label>
            <div className='flex-between'>
              <p>{userData?.email}</p>
              <a className='text-neutral-200'>Zmień</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
