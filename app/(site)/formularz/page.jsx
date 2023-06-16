"use client"
import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import { useContext, useEffect, useState } from "react"
import CartContext from "@context/CartContext"
import { useSession } from "next-auth/react"
import { toast } from "react-hot-toast"
import axios from "axios"
import { useRouter } from "next/navigation"

export default async function Page() {
  const router = useRouter()
  const { data: session } = useSession()
  const { cart } = useContext(CartContext)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    axios
      .post("/api/sendform", data)
      .then(() => {
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className='flex-1 w-0 p-4'>
              <div className='flex items-start'>
                <div className='ml-3 flex-1'>
                  <p className='text-sm font-medium text-gray-900'>
                    Dziękujemy za wiadomość {data.name} !
                  </p>
                  <p className='mt-1 text-sm text-gray-500'>
                    Odpiszemy w ciągu 24h!
                  </p>
                </div>
              </div>
            </div>
            <div className='flex border-l border-gray-200'>
              <button
                onClick={() => toast.dismiss(t.id)}
                className='w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              >
                Ok
              </button>
            </div>
          </div>
        ))
        router.push("/")
      })
      .catch((error) => {
        console.log(error)
        // toast.error(error.response.data)
      })
  }

  useEffect(() => {
    if (cart && cart.cartItems) {
      const names = cart.cartItems.map((cartItem) => cartItem.name)
      const finalMessage = "Piszę w sprawie " + names.join(", ")
      setValue("message", finalMessage)
    }
  }, [cart])

  useEffect(() => {
    if (session) {
      setValue("email", session.user.email)
    }
  }, [session])

  return (
    <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5'>
        <div className='lg:col-span-2 lg:py-12'>
          <p className='max-w-xl text-lg'>
            W sprawie produktów oraz zamówień prosimy o wiadomość przez ten
            formularz lub bezpośrednio na adres e-mail
          </p>
          <div className='mt-8 flex flex-col'>
            E-mail
            <p>
              <a
                href='mailto:biuro@elopokrowce.pl'
                className='text-xl font-bold text-pink-500'
              >
                biuro@elopokrowce.pl
              </a>
            </p>
          </div>

          <div className='mt-8 flex flex-col'>
            Nr telefonu
            <p>
              <a
                href='tel:+48504230188'
                className='text-xl font-bold text-pink-500'
              >
                504 230 188
              </a>
            </p>
          </div>
          <div className='mt-8 flex flex-col'>
            Nr konta
            <p className='text-xl font-bold text-pink-500'>
              15 1870 1045 2083 1066 0677 0001
            </p>
          </div>
          <div className='mt-8 flex flex-col'>
            Adres
            <p className='text-xl font-bold text-pink-500'>
              ul. Przemysłowa 1E, 11-500 Giżycko
            </p>
          </div>
        </div>

        <div className='rounded-lg shadow-highlight bg-neutral-100 dark:bg-neutral-800 p-8 lg:col-span-3 lg:p-12 flex flex-col items-center'>
          <h1 className='py-3 text-2xl'>Formularz kontaktowy</h1>
          <ErrorMessage
            errors={errors}
            name='singleErrorInput'
            render={({ message }) => <p>{message}</p>}
          />
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 w-full'>
            <div>
              <label className='sr-only' htmlFor='name'>
                Imię i nazwisko
              </label>
              <input
                className='w-full rounded-lg border-gray-200 dark:border-neutral-700 p-3 text-sm dark:bg-neutral-800 dark:placeholder:text-neutral-500'
                placeholder='Imię i nazwisko'
                type='text'
                id='name'
                required
                {...register("name")}
              />
            </div>

            <div>
              <label className='sr-only' htmlFor='email'>
                Email
              </label>
              <input
                className='w-full rounded-lg border-gray-200 dark:border-neutral-700 p-3 text-sm dark:bg-neutral-800 dark:placeholder:text-neutral-500'
                placeholder='Adres e-mail'
                type='email'
                id='email'
                required
                {...register("email")}
              />
            </div>

            <div>
              <label className='sr-only' htmlFor='phone'>
                Numer telefonu
              </label>
              <input
                className='w-full rounded-lg border-gray-200 dark:border-neutral-700 p-3 text-sm dark:bg-neutral-800 dark:placeholder:text-neutral-500'
                placeholder='Numer telefonu (opcjonalnie)'
                type='tel'
                id='phoneNumber'
                {...register("phoneNumber")}
              />
            </div>

            <div>
              <label className='sr-only' htmlFor='message'>
                Wiadomość
              </label>

              <textarea
                className='w-full h-full rounded-lg border-gray-200 dark:border-neutral-700 p-3 text-sm dark:bg-neutral-800 dark:placeholder:text-neutral-500 resize-none appearance-none overflow-hidden focus:outline-none'
                placeholder='Wiadomość'
                rows='10'
                id='message'
                required
                minLength={10}
                maxLength={500}
                {...register("message")}
              ></textarea>
            </div>

            <div className='mt-4 flex items-center justify-center'>
              <input
                type='submit'
                className='inline-block w-full rounded-lg bg-elo text-white px-5 py-3 font-medium sm:w-auto'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
