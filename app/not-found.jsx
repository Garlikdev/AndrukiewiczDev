import Link from "next/link"

export default function NotFound() {
  return (
    <div className='flex items-center justify-center flex-col text-2xl gap-4 pt-24'>
      <h1>Nie znaleziono strony – 404!</h1>
      <Link
        className='bg-gray-300 hover:bg-gray-400 dark:bg-gray-950 hover:dark:bg-gray-800 transition-all rounded-full px-4 py-2'
        href='/'
      >
        Wróć do strony głównej
      </Link>
    </div>
  )
}
