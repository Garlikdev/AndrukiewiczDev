import React from "react"

type SectionHeadingProps = {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className='font-extrabold text-transparent text-5xl leading-loose bg-clip-text bg-gradient-to-b text-center from-indigo-500 to-indigo-950 dark:from-indigo-500 dark:to-indigo-700 drop-shadow-lg'>
      {children}
    </h2>
  )
}
