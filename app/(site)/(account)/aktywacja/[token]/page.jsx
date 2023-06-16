import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

export default async function Aktywacja({ params }) {
  const data = await fetch(
    `${process.env.PUBLIC_URL}/api/activate/${params.token}`
  ).then((res) => res.json())

  if (!data) return <div>Ładowanie...</div>
  return (
    <div className='flex items-center justify-center flex-col m-auto'>
      <div className='flex justify-center items-center w-full'>
        <div className='relative p-4 w-full max-w-md h-full md:h-auto'>
          {data.message && (
            <div className='relative p-4 text-center bg-white rounded-lg shadow-highlight dark:bg-neutral-800 sm:p-5'>
              <div className='w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5'>
                <CheckIcon className='w-8 h-8' />
                <span className='sr-only'>Success</span>
              </div>

              <p className='mb-4 text-lg font-semibold text-gray-900 dark:text-white'>
                {data.message}
              </p>
              <Link href='/logowanie'>
                <button className='rounded-full bg-elo py-2 px-3 text-sm font-medium text-center hover:bg-red-700'>
                  Zaloguj się
                </button>
              </Link>
            </div>
          )}
          {data.error && (
            <div className='relative p-4 text-center bg-white rounded-lg shadow-highlight dark:bg-neutral-800 sm:p-5'>
              <div className='w-12 h-12 rounded-full bg-green-100 dark:bg-red-900 p-2 flex items-center justify-center mx-auto mb-3.5'>
                <XMarkIcon className='w-8 h-8' />
                <span className='sr-only'>Error</span>
              </div>

              <p className='mb-4 text-lg font-semibold text-gray-900 dark:text-white'>
                {data.error}
              </p>
              <p className='mb-4 text-lg font-semibold text-gray-900 dark:text-white'>
                Spróbuj ponownie
              </p>
              <Link href='/logowanie'>
                <button className='rounded-full bg-elo py-2 px-3 text-sm font-medium text-center hover:bg-red-700'>
                  Zaloguj się
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
