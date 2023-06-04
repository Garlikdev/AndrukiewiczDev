"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

export default function Register() {
  const session = useSession
  const router = useRouter()

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/")
    }
  })

  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  })

  const registerUser = async (e) => {
    e.preventDefault()
    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Konto założone!")
        router.push("/logowanie")
      })
      .catch(() => toast.error("Coś poszło nie tak!"))
  }

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='bg-gradient-to-tr from-red-900 to-elo sm:mx-auto sm:w-full sm:max-w-sm px-8 py-4 rounded-xl'>
          <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white'>
              Załóż konto w 20 sekund
            </h2>
          </div>

          <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <form className='space-y-6' onSubmit={registerUser}>
              <div>
                <div className='mt-2'>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    autoComplete='given-name'
                    placeholder='Imię (wymagane)'
                    required
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div>
                <div className='mt-2'>
                  <input
                    id='lastName'
                    name='lastName'
                    type='text'
                    autoComplete='family-name'
                    placeholder='Nazwisko (wymagane)'
                    required
                    value={data.lastName}
                    onChange={(e) =>
                      setData({ ...data, lastName: e.target.value })
                    }
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div>
                <div className='mt-2'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='E-mail (wymagane)'
                    autoComplete='email'
                    required
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div>
                <div className='mt-2'>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    placeholder='Hasło (wymagane)'
                    autoComplete='current-password'
                    required
                    value={data.password}
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='flex w-full justify-center rounded-md bg-elo px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Załóż konto
                </button>
              </div>
            </form>

            <p className='mt-10 text-center text-sm text-gray-500'>
              Masz już konto?{" "}
              <a
                href='/logowanie'
                className='font-semibold leading-6 text-gray-300 hover:text-red-200'
              >
                Zaloguj się
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
