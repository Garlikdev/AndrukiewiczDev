"use client"

import { useState, useEffect } from "react"
import { signIn, useSession } from "next-auth/react"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Login() {
  const session = useSession()
  const router = useRouter()
  const [data, setData] = useState({
    email: "",
    password: "",
  })

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/")
    }
  })

  const loginUser = async (e) => {
    e.preventDefault()
    signIn("credentials", { ...data, redirect: false }).then((callback) => {
      if (callback?.error) {
        toast.error(callback.error)
      }

      if (callback?.ok && !callback?.error) {
        toast.success("Zalogowano pomyślnie!")
      }
    })
  }

  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='bg-gradient-to-tr from-neutral-200 dark:from-neutral-800 to-neutral-300 dark:to-neutral-900 shadow-highlight sm:mx-auto sm:w-full sm:max-w-sm px-8 py-4 rounded-xl'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight'>
            Zaloguj się
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' onSubmit={loginUser}>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='E-mail'
                autoComplete='email'
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                required
                className='block w-full rounded-full border-0 py-1.5 text-neutral-900 shadow-highlight bg-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-elo sm:text-sm sm:leading-6'
              />
            </div>

            <div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  placeholder='Hasło'
                  autoComplete='current-password'
                  required
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  className='block w-full rounded-full border-0 py-1.5 text-neutral-900 shadow-highlight bg-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-elo sm:text-sm sm:leading-6'
                />
              </div>
              <div className='mt-2'>
                <a
                  href='przypomnienie-hasla'
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 dark:text-neutral-200 hover:text-red-800 dark:hover:text-red-800'
                >
                  Nie pamiętasz hasła?
                </a>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-full bg-elo px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shadow-highlight'
              >
                Zaloguj się
              </button>
            </div>
          </form>
          <div className='mt-4'>
            <button
              onClick={() => signIn("google")}
              className='bg-white text-black w-full rounded-full px-4 py-2 flex flex-row gap-4 items-center justify-center hover:bg-red-200 shadow-highlight'
            >
              <Image
                width={15}
                height={15}
                alt='Google icon'
                sizes='3vw'
                src='/assets/icons/google-login.png'
              />
              <h1>Zaloguj z kontem Google</h1>
            </button>
          </div>

          <p className='py-5 text-center text-sm text-neutral-500'>
            Nie masz konta?{" "}
            <a
              href='/rejestracja'
              className='font-semibold leading-6 text-neutral-300 hover:text-red-200'
            >
              Załóż konto
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
