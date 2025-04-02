export default function Loading() {
  return (
    <div
      role='status'
      className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 bg-neutral-300 rounded-sm h-full w-full dark:bg-neutral-700'
    >
      <span className='sr-only'>Loading...</span>
    </div>
  )
}
