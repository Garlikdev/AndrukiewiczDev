import { BsGithub, BsLinkedin } from "react-icons/bs"

export default function Footer() {
  return (
    <footer className='w-full px-6 shadow-highlight py-16 items-center justify-center flex'>
      <div className='max-w-3xl w-full flex-col sm:flex-row gap-6 justify-between flex items-center text-center sm:text-start'>
        <div className='flex flex-col sm:flex-row gap-2'>
          <p>All rights reserved © 2023 </p>
          <span className='font-bold'>Krzysztof Andrukiewicz</span>
        </div>
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
            href='https://github.com/Garlikdev'
            target='_blank'
            rel='noreferrer'
            aria-label='My github profile'
            className='focus:scale-[1.15] hover:scale-110 active:scale-105'
          >
            <BsGithub className='w-8 h-8' />
          </a>
        </div>
      </div>
    </footer>
  )
}
