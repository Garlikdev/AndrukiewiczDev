import SectionHeading from "./section-heading"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { useSectionInView } from "@lib/hooks"
import { useRef } from "react"

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

export default function About() {
  const { ref } = useSectionInView("About")

  const contentRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["0 1.33", "1 1"],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1])
  const opacityProgress = useTransform(scrollYProgress, [0.5, 1], [0, 1])

  return (
    <motion.section
      ref={ref}
      id='about'
      className='mb-28 mt-16 sm:mt-0 scroll-mt-28 max-w-[42rem] text-center relative leading-8 sm:mb-40 [text-wrap:balance]'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <motion.div
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        ref={contentRef}
      >
        <SectionHeading>Hey there!</SectionHeading>
        <article className='gap-4 flex flex-col [text-wrap:balance] text-sm sm:text-base lg:text-lg'>
          <p>
            I've always been{" "}
            <span className='text-green-500 font-bold'>
              {" "}
              fascinated with building websites
            </span>
            . I started out as a photographer, videographer, graphic designer,
            and even had my own little company for a year. Then, I jumped into
            the world of web development (again 😂), learning React and working
            as a freelancer. I'm all about{" "}
            <span className='text-green-500 font-bold'>
              patience, problem-solving, and making sure things work just right.
            </span>
          </p>
          <p>
            My go-to tools are{" "}
            <span className='text-green-500 font-bold'>
              React, Next.js, Tailwind, and Prisma
            </span>
            . I've also got some backend skills with{" "}
            <span className='text-green-500 font-bold'>
              Node.js, Express, MongoDB, and PostgreSQL
            </span>
            . I'm currently diving into{" "}
            <span className='text-green-500 font-bold'>TypeScript</span>, always
            hungry to learn new things. I'm on the lookout for a full-time gig
            as a{" "}
            <span className='text-green-500 font-bold'>
              Remote Frontend Developer
            </span>
            .
          </p>
          <p>
            Besides coding, you'll find me gaming 🎮, strumming on my guitar,
            binge-watching series 📺, and helping friends fix their computers.
          </p>
        </article>
      </motion.div>
    </motion.section>
  )
}
