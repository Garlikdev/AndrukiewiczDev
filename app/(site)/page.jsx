import Products from "@components/Categories"

export default async function Home() {
  return (
    <section className='w-full flex-center flex-col'>
      <img
        src='assets/images/banerhome.webp'
        alt='baner'
        className='w-full object-cover rounded-none sm:rounded-xl'
      />
      <Products />
    </section>
  )
}
