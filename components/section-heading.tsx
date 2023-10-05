import React from "react"

type SectionHeadingProps = {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className='text-2xl font-bold mb-4 sm:mb-8 text-center uppercase tracking-wide text-blue-600 dark:text-blue-600'>
      {children}
    </h2>
  )
}
