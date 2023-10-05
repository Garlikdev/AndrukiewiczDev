import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@lib/hooks"

export default function About() {
  const { ref } = useSectionInView("About")

  return (
    <motion.section
      ref={ref}
      id='about'
      className='mb-28 mt-16 sm:mt-0 scroll-mt-28 max-w-[45rem] text-center leading-8 sm:mb-40 [text-wrap:balance]'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <SectionHeading>Hey there!</SectionHeading>
      <article className='gap-4 flex flex-col'>
        <p>
          I've always been fascinated with building websites. I started out as a
          photographer, videographer, and graphic designer, and even had my own
          little company for a year. Then, I jumped into the world of web
          development, learning React and working as a freelancer. I've had the
          pleasure of creating some really cool websites! I'm all about
          patience, problem-solving, and making sure things work just right.
        </p>
        <p>
          My go-to tools are React, Next.js, Tailwind, and Prisma. I've also got
          some backend skills with Node.js, Express, MongoDB, and PostgreSQL.
          I'm currently diving into TypeScript, always hungry to learn new
          things. Right now, I'm on the lookout for a full-time gig as a
          Front-End Developer or Fullstack Developer.
        </p>
        <p>
          Besides coding, you'll find me gaming 🎮, strumming on my guitar,
          binge-watching series 📺, and helping friends fix their computers.
        </p>
      </article>
    </motion.section>
  )
}
