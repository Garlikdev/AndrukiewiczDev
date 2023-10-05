import { HiLocationMarker, HiMail } from "react-icons/hi"
import { useSectionInView } from "@lib/hooks"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5)
  return (
    <motion.section
      id='contact'
      ref={ref}
      className='bg-blue-100 dark:bg-gray-950 flex flex-col w-full py-8 sm:py-16 px-16 rounded-lg shadow-highlight mt-16 gap-4 items-center text-center mb-16 max-w-3xl'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <div className='flex flex-col gap-2'>
        <SectionHeading>Contact</SectionHeading>
        <p className='text-2xl font-extrabold'>Hit me up! 👌</p>
      </div>
      <div className='flex flex-col sm:flex-row gap-4 items-center justify-center'>
        <div className='flex flex-col sm:flex-row items-center gap-2'>
          <i className='p-3 rounded-full bg-gray-100 dark:bg-gray-900'>
            <HiLocationMarker className='h-12 w-12 text-blue-400' />
          </i>
          <div className='flex flex-col gap-2'>
            <p className='font-bold text-xl'>Location</p>
            <p className='text-gray-700 dark:text-gray-400'>Giżycko, Poland</p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row items-center gap-2'>
          <a
            href='mailto:krz.andrukiewicz@gmail.com'
            className='p-3 rounded-full bg-gray-100 dark:bg-gray-900 group'
          >
            <HiMail className='w-12 h-12 text-blue-400 group-hover:text-white transition-colors' />
          </a>
          <div className='flex flex-col gap-2'>
            <p className='font-bold text-xl'>Mail</p>
            <a
              href='mailto:krz.andrukiewicz@gmail.com'
              className='text-gray-700 dark:text-gray-400 hover:text-blue-400 hover:underline dark:hover:text-blue-400 transition-colors'
            >
              krz.andrukiewicz@gmail.com
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
