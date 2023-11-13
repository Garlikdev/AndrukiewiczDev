"use client"

import { motion } from "framer-motion"
import { links } from "@lib/data"
import Link from "next/link"
import clsx from "clsx"
import { useActiveSectionContext } from "@context/active-section-context"
import ThemeSwitcher from "../ThemeSwitcher"

const Nav = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()

  return (
    <header className='z-[999] relative'>
      <motion.div
        className='fixed top-0 left-1/2 h-[3.25rem] overflow-hidden w-full rounded-b-lg shadow-highlight bg-white bg-opacity-80 sm:top-6 sm:w-[28rem] sm:rounded-full dark:bg-gray-950 dark:bg-opacity-75'
        initial={{ y: -100, x: "-50%", opacity: 0, scale: 1 }}
        animate={{ y: 0, x: "-50%", opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <div className='rounded-full absolute h-48 w-[40rem] bg-gradient-radial blur-xl left-0 top-0 from-blue-500 opacity-25 rotate-12 to-neutral-900 -z-10'></div>
      </motion.div>

      <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 '>
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {links.map((link) => (
            <motion.li
              className='h-3/4 flex items-center justify-center relative'
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-100",
                  {
                    "text-gray-950 dark:text-gray-50":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className='bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-900 shadow-highlight'
                    layoutId='activeSection'
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
          <motion.li
            className='h-3/4 flex items-center justify-center relative'
            key='DarkModeSwitcher'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <ThemeSwitcher />
          </motion.li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
