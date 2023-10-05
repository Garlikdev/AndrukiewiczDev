"use client"

import { projectsData } from "@lib/data"
import SectionHeading from "./section-heading"
import Project from "./project"
import { useSectionInView } from "@lib/hooks"
import { motion } from "framer-motion"

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5)

  return (
    <motion.section
      ref={ref}
      id='projects'
      className='scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <SectionHeading>My projects</SectionHeading>
      <div className='flex flex-col gap-8'>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </motion.section>
  )
}
