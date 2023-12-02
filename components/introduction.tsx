"use client"

import Image from "next/image"
import ProfilePicture from "@public/profile.jpg"
import { motion } from "framer-motion"
import Link from "next/link"
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { HiDownload, HiArrowRight } from "react-icons/hi"
import { useSectionInView } from "@lib/hooks"
import { useActiveSectionContext } from "@context/active-section-context"

export default function Introduction() {
  const { ref } = useSectionInView("Home", 0.5)
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()

  return (
    <section
      id='home'
      ref={ref}
      className='h-screen scroll-mt-28 items-center justify-center flex flex-col gap-4 sm:gap-8 lg:gap-8'
    >
      <div className='flex flex-col-reverse sm:flex-row items-center justify-center'>
        <div className='max-w-xl flex flex-col relative'>
          <motion.div
            className='mb-4 mt-4 sm:mt-0 text-center gap-4 flex flex-col lg:text-start relative'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className='rounded-full absolute h-48 lg:h-72 w-64 lg:w-[30rem] bg-gradient-radial blur-xl -top-10 left-20 from-blue-500 opacity-10 to-neutral-900 -z-10'></div>
            <div className='rounded-full absolute h-48 w-72 bg-gradient-radial blur-xl -left-20 -top-20 from-green-500 opacity-10 rotate-12 to-neutral-900 -z-10'></div>
            <div className='text-xl sm:text-2xl lg:text-4xl font-bold leading-[1.2] [text-wrap:balance]'>
              Remote Front-End Developer
            </div>
            <div className='[text-wrap:balance] leading-7 text-lg my-4'>
              <div>
                Hi! ✌️ I'm{" "}
                <span className='underline underline-offset-2 text-green-600 dark:text-green-500 font-bold'>
                  Krzysztof Andrukiewicz
                </span>
                ,
                <p>
                  I love automation, time saving and I just can't get enough of
                  coding.💻{" "}
                </p>
                <p>
                  <span className='font-bold text-green-600 dark:text-green-500'>
                    Front-end Developer
                  </span>{" "}
                  based in Giżycko, Poland.📌
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className='flex flex-col gap-4 sm:gap-8 items-center lg:items-start justify-center'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <div className='flex gap-4'>
              <a
                href='https://www.linkedin.com/in/krzysztof-andrukiewicz-135360237/'
                target='_blank'
                rel='noreferrer'
                aria-label='My LinkedIn profile'
                className='focus:scale-[1.15] hover:scale-110 active:scale-105'
              >
                <BsLinkedin className='w-8 h-8' />
              </a>
              <a
                href='https://github.com/Andrukiewicz'
                target='_blank'
                rel='noreferrer'
                aria-label='My github profile'
                className='focus:scale-[1.15] hover:scale-110 active:scale-105'
              >
                <BsGithub className='w-8 h-8' />
              </a>
            </div>
            <div className='flex gap-4'>
              <Link
                href='#contact'
                className='px-4 py-2 text-xl group font-medium rounded-full bg-gray-100 shadow-highlight text-gray-950 dark:bg-gray-900 dark:text-gray-50 flex items-center gap-2 w-fit outline-none focus:scale-110 hover:scale-110 transition-all active:scale-105'
                onClick={() => {
                  setActiveSection("Contact")
                  setTimeOfLastClick(Date.now())
                }}
              >
                Contact{" "}
                <HiArrowRight className='opacity-80 group-hover:translate-x-1' />
              </Link>
              <a
                href='/CV_KrzysztofAndrukiewicz.pdf'
                target='_blank'
                className='px-4 py-2 text-xl font-medium rounded-full bg-gray-100 shadow-highlight text-gray-950 dark:bg-gray-900 dark:text-gray-50 hover:bg-blue-600 flex items-center gap-2 w-fit outline-none focus:scale-110 hover:scale-110 transition-all active:scale-105'
              >
                CV{" "}
                <HiDownload className='opacity-80 group-hover:translate-x-1' />
              </a>
            </div>
          </motion.div>
        </div>
        <div className='relative flex flex-col items-center justify-center rounded-full'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={ProfilePicture}
              width={300}
              height={300}
              quality='95'
              priority={true}
              alt='Profile picture'
              className='rounded-full object-cover shadow-highlight h-48 w-48 lg:w-64 lg:h-64 border-[0.2rem] border-white dark:border-gray-950'
            />
          </motion.div>
          <motion.span
            className='absolute bottom-0 right-0 text-4xl'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
              duration: 0.7,
            }}
          >
            😘
          </motion.span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
        className='flex flex-col sm:flex-row items-center justify-center sm:justify-start w-full gap-4'
      >
        <p className='border-0 sm:border-r-2 border-r-gray-500 mr-0 pr-0 sm:mr-8 sm:pr-8'>
          Tech Stack
        </p>
        <ul className='flex flex-row gap-1 sm:gap-4 items-center justify-center w-fit'>
          <li
            title='Html, Css, Javascript'
            className='px-4 py-2 text-xl h-auto group font-medium rounded-full bg-gray-100 shadow-highlight text-gray-950 dark:bg-gray-900 dark:text-gray-50 flex items-center gap-2 outline-none focus:scale-110 hover:scale-110 transition-all active:scale-105'
          >
            <Image
              alt='Stack icons'
              width={128}
              height={256}
              src='https://skillicons.dev/icons?i=html,css,js'
            />
          </li>
          <li
            title='React, Next.js, TailwindCSS'
            className='px-4 py-2 text-xl h-auto group font-medium rounded-full bg-gray-100 shadow-highlight text-gray-50 dark:bg-gray-900 flex items-center gap-2 outline-none focus:scale-110 hover:scale-110 transition-all active:scale-105'
          >
            <Image
              width={128}
              height={256}
              alt='Stack icons'
              src='https://skillicons.dev/icons?i=react,next,tailwind'
            />
          </li>
          <li
            title='MongoDB, PostgreSQL, Prisma'
            className='px-4 py-2 text-xl h-auto group font-medium rounded-full bg-gray-100 shadow-highlight text-gray-50 dark:bg-gray-900 flex items-center gap-2 outline-none focus:scale-110 hover:scale-110 transition-all active:scale-105'
          >
            <Image
              width={128}
              height={256}
              alt='Stack icons'
              src='https://skillicons.dev/icons?i=mongodb,postgresql,prisma'
            />
          </li>
        </ul>
      </motion.div>
    </section>
  )
}
