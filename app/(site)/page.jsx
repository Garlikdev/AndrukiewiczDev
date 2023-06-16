import Categories from "@components/homepage/Categories"
import Image from "next/image"

export default async function Home() {
  return (
    <section className='w-full flex-center flex-col'>
      <div className='relative'>
        <img
          src='/assets/images/banerhome.webp'
          alt='baner styl i wygoda'
          className='w-full object-contain rounded-xl'
          sizes='80vw'
          priority
        />
      </div>
      <Categories />
    </section>
  )
}
