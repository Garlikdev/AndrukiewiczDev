import Link from "next/link"

export default function NotFound() {
  return (
    <div className='flex h-64 grow items-center justify-center flex-col text-2xl gap-4 pt-24'>
      <h1>Page not found – 404!</h1>
      <Link
        className='bg-gray-300 text-sm hover:bg-gray-400 dark:bg-gray-950 hover:dark:bg-gray-800 transition-all rounded-full px-4 py-2'
        href='/'
      >
        back to homepage
      </Link>
    </div>
  )
}
