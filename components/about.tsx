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
            I'm a{" "}
            <span className='text-green-500 font-bold'>web developer</span> with
            a <span className='text-green-500 font-bold'>creative past</span> in
            photography and design. I've dived into{" "}
            <span className='text-green-500 font-bold'>React</span> and
            freelancing, loving the{" "}
            <span className='text-green-500 font-bold'>
              puzzle-solving aspect
            </span>
            .
          </p>
          <p>
            {" "}
            Skilled in{" "}
            <span className='text-green-500 font-bold'>React, Next, Node</span>,
            and open for anything. I'm on my way to{" "}
            <span className='text-green-500 font-bold'>TypeScript</span>. When
            I'm not coding, catch me{" "}
            <span className='text-green-500 font-bold'>gaming 🎮</span>,{" "}
            <span className='text-green-500 font-bold'>
              strumming my guitar 🎸 ,{" "}
            </span>
            <span className='text-green-500 font-bold'>
              binge-watching series 📺
            </span>
            , or{" "}
            <span className='text-green-500 font-bold'>
              fixing friends' computers
            </span>
            .{" "}
          </p>
          <p>
            Currently looking for a{" "}
            <span className='text-green-500 font-bold underline underline-offset-4'>
              remote frontend / fullstack role
            </span>
            !
          </p>
        </article>
      </motion.div>
    </motion.section>
  )
}
