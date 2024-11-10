"use client"

import { projectsData } from "@lib/data"
import Image from "next/image"
import { useScroll, motion, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { BsGithub, BsLink } from "react-icons/bs"
import { useActiveSectionContext } from "@context/active-section-context"

type ProjectProps = (typeof projectsData)[number]

export default function Project({
  title,
  time,
  description,
  tags,
  version,
  codeUrl,
  available,
  siteUrl,
  imageUrl,
}: ProjectProps) {
  const refScroll = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: refScroll,
    offset: ["0 1.33", "0.3 1"],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1])
  const opacityProgress = useTransform(scrollYProgress, [0.5, 1], [0, 1])
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()
  return (
    <motion.section
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      ref={refScroll}
      className='flex flex-col-reverse sm:flex-col group even:sm:flex-row-reverse transition-colors bg-gray-100 dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 hover:bg-gray-100 hover:dark:bg-gray-900 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-fit shadow-highlight rounded-2xl'
    >
      <div
        className='py-4 px-5 sm:pl-10 sm:pr-2 sm:py-10 sm:max-w-[50%] flex flex-col h-full items-center text-center sm:items-start sm:text-start'
      >
        <h3 className='text-2xl font-medium'>{title}</h3>
        <span className='text-xs font-bold text-green-500'>{time}</span>
        <p className='mt-2 leading-relaxed text-gray-700 dark:text-gray-300 [text-wrap:balance]'>
          {description}
        </p>
        <ul className='flex flex-wrap mt-4 gap-2 items-center text-center sm:items-start sm:text-start justify-center sm:justify-start'>
          {tags.map((tag, index) => (
            <li
              key={index}
              className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className='flex gap-2 items-center mt-4'>
          {codeUrl ? (
            <Link
              href={codeUrl}
              target='_blank'
              rel='noreferrer'
              className='px-2 py-1 font-medium rounded-full bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900 flex items-center gap-2 w-fit outline-none focus:scale-110 hover:scale-110 transition-all active:scale-105'
            >
              Code <BsGithub />
            </Link>
          ) : (
            ""
          )}
          {available ? (
            <Link
              href={siteUrl}
              target='_blank'
              rel='noreferrer'
              className='px-2 py-1 font-medium rounded-full bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900 flex items-center gap-2 w-fit outline-none focus:scale-110 hover:scale-110 transition-all active:scale-105'
            >
              {version} <BsLink />
            </Link>
          ) : (
            <Link
              href='#contact'
              onClick={() => {
                setActiveSection("Contact")
                setTimeOfLastClick(Date.now())
              }}
              className='px-2 py-1 font-medium rounded-full bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900 flex items-center gap-2 w-fit outline-none focus:scale-110 hover:scale-110 transition-all active:scale-105'
            >
              Ask for more
            </Link>
          )}
        </div>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        quality={95}
        className='relative m-4 sm:m-0 sm:absolute object-left-top object-cover h-[15rem] sm:h-[25rem] top-0 sm:top-16 sm:group-odd:-right-40 sm:group-even:-left-40 w-auto sm:w-[28.25rem] rounded-lg shadow-highlight sm:group-hover:-translate-x-3 sm:group-even:group-hover:translate-x-3 sm:group-hover:translate-y-3 sm:group-hover:-rotate-2 sm:group-even:group-hover:rotate-2 transition-all duration-300 ease-in-out'
      ></Image>
    </motion.section>
  )
}
