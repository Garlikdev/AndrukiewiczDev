"use client"

import Image from "next/image"
import ProfilePicture from "@public/profile.jpg"
import { motion } from "framer-motion"
import Link from "next/link"
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { HiDownload, HiArrowRight } from "react-icons/hi"
import { useSectionInView } from "@lib/hooks"

export default function Introduction() {
  const { ref } = useSectionInView("Home", 0.5)

  return (
    <section
      id='home'
      ref={ref}
      className='h-[calc(100vh-72px)] pt-[72px] scroll-mt-28 items-center justify-center flex flex-col gap-4 sm:gap-8 lg:gap-16'
    >
      <div className='flex flex-col-reverse sm:flex-row items-center justify-center'>
        <div className='max-w-xl flex flex-col relative'>
          <motion.div
            className='mb-4 mt-4 text-center gap-4 flex flex-col lg:text-start'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className='text-2xl lg:text-5xl font-bold leading-[1.2] [text-wrap:balance]'>
              Front-End React Developer
            </div>
            <p className='[text-wrap:balance] leading-[1.5]'>
              Hi, I'm Krzysztof Andrukiewicz. Passionate and eager to learn
              Front-end Developer based in Giżycko, Poland.
            </p>
          </motion.div>
          <motion.div
            className='flex flex-col gap-8 items-center lg:items-start justify-center'
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
                className='focus:scale-[1.15] hover:scale-110 active:scale-105'
              >
                <BsLinkedin className='w-8 h-8' />
              </a>
              <a
                href='https://github.com/Andrukiewicz'
                target='_blank'
                rel='noreferrer'
                className='focus:scale-[1.15] hover:scale-110 active:scale-105'
              >
                <BsGithub className='w-8 h-8' />
              </a>
            </div>
            <div className='flex gap-4'>
              <Link
                href='#contact'
                className='px-4 py-2 text-xl group font-medium rounded-full bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900 flex items-center gap-2 w-fit outline-none focus:scale-110 hover:scale-110 transition-all active:scale-105'
              >
                Contact{" "}
                <HiArrowRight className='opacity-80 group-hover:translate-x-1' />
              </Link>
              <a
                download
                href='/CV_KrzysztofAndrukiewicz.pdf'
                className='px-4 py-2 text-xl font-medium rounded-full bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900 hover:bg-blue-600 flex items-center gap-2 w-fit outline-none focus:scale-110 hover:scale-110 transition-all active:scale-105'
              >
                CV{" "}
                <HiDownload className='opacity-80 group-hover:translate-x-1' />
              </a>
            </div>
          </motion.div>
        </div>
        <div className='relative flex flex-col items-center justify-center'>
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
              width={256}
              height={256}
              quality='95'
              priority={true}
              alt='Profile picture'
              className='rounded-full border-[0.2rem] object-cover shadow-highlight border-gray-950 dark:border-gray-50 h-48 w-48 lg:h-72 lg:w-72'
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
            className='px-4 py-2 text-xl h-auto group font-medium rounded-full bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900 flex items-center gap-2 outline-none focus:scale-110 hover:scale-110 transition-all active:scale-105'
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
            className='px-4 py-2 text-xl h-auto group font-medium rounded-full bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900 flex items-center gap-2 outline-none focus:scale-110 hover:scale-110 transition-all active:scale-105'
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
            className='px-4 py-2 text-xl h-auto group font-medium rounded-full bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900 flex items-center gap-2 outline-none focus:scale-110 hover:scale-110 transition-all active:scale-105'
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
