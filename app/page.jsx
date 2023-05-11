import Products from "@components/Categories"

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <img
        src='assets/images/banerhome.webp'
        alt='baner'
        className='w-full object-cover rounded-xl'
      />
      <Products />
    </section>
  )
}

export default Home
