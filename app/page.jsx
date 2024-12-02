"use client"

import About from "@components/about"
import Contact from "@components/contact"
import Introduction from "@components/introduction"
import Projects from "@components/projects"
import Stack from "@components/stack"

export default function Home() {
  return (
    <main className='w-full flex flex-col items-center justify-center max-w-4xl mx-auto px-4 py-0'>
      <Introduction />
      <Stack />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
