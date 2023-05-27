"use client"

import { PlusIcon } from "@heroicons/react/24/solid"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const page = () => {
  const [userData, setUserData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      const response = await fetch(`/api/users/${session?.user.id}/data`)
      const data = await response.json()
      setUserData(data)
      setIsLoading(false)
    }

    if (session?.user.id) fetchPosts()
  }, [session?.user.id])

  if (isLoading) {
    return <p>Pobieranie danych...</p>
  }

  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-2xl text-gray-900 font-medium'>Dane do zamówień</h1>
      <div className='flex flex-col'>
        <span>
          W tym miejscu znajdziesz zapisane adresy i dane do zamówień.
        </span>
        <span>Dzięki temu nie musisz ich wpisywać w trakcie zakupów.</span>
      </div>
      <div className='mt-6 border-gray-400 pt-4 flex flex-wrap mb-6 flex-col w-full gap-2'>
        <div className='flex items-center gap-4'>
          <h2 className='text-xl text-gray-900'>
            Dane odbiorcy i adres dostawy
          </h2>
          <button className='border px-4 py-2 rounded-full border-elo text-elo flex flex-row gap-2 hover:text-white hover:bg-elo hover:scale-105 ease-in-out transition-all duration-100 hover:shadow-md hover:font-bold'>
            <PlusIcon className='w-6' />
            Dodaj adres dostawy
          </button>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          {userData?.address[0] ? (
            <>
              {userData?.address.map((address) => (
                <div className='mt-4 px-4 py-2 border rounded-lg'>
                  <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                      <div className='flex flex-row gap-2'>
                        <p>{address.line1}</p>
                        <p>{address.line2}</p>
                      </div>
                      <div className='flex flex-row gap-2'>
                        <p>{address.postCode}</p>
                        <p>{address.city}</p>
                      </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                      <a className='text-elo'>Usuń</a>
                      <a className='text-elo'>Edytuj</a>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className='mt-4 px-4 py-2 border rounded-lg'>
              <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                  <p>Brak dodanego adresu</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default page
