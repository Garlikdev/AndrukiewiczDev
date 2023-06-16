import Categories from "@components/homepage/Categories"
import Image from "next/image"

export default async function page() {
  return (
    <section className='w-full flex-center flex-col'>
      <div className='relative h-[35rem] w-full'>
        <Image
          fill
          src='/assets/images/banerhome.webp'
          alt='baner'
          className='left-0 w-full object-cover rounded-none sm:rounded-xl object-left'
        />
      </div>
      <Categories />
    </section>
  )
}
