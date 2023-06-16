"use client"
import { useContext, useRef } from "react"
import ProductGallery from "@components/ProductGallery"
import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import CartContext from "@context/CartContext"

export default async function ProductPage({ product }) {
  const fullNameRef = useRef("")
  const playerNumberRef = useRef("")
  const { addItemToCart } = useContext(CartContext)

  const productImage =
    product.images.length > 0
      ? product.images[0].path
      : "/assets/images/products/placeholder.png"

  const addToCartHandler = () => {
    addItemToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: productImage,
      fullName: fullNameRef.current.value,
      playerNumber: playerNumberRef.current.value,
    })
  }
  return (
    <section className='md:flex items-start justify-center w-full'>
      <div className='w-1/2 md:block hidden relative'>
        <ProductGallery product={product} />
      </div>
      <div className='w-full md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6'>
        <div className='flex flex-col pb-6'>
          <div className='flex flex-row gap-2'>
            <Link
              href={`/c/${product?.category?.slug}`}
              className='rounded-full border border-red-500 bg-neutral-100 dark:bg-neutral-800 shadow-highlight px-3 py-0.5 text-xs font-medium tracking-wide text-red-500 hover:bg-neutral-200 hover:dark:bg-neutral-700'
            >
              {product.category?.name}
            </Link>
            {product.stock > 0 ? (
              <strong className='rounded-full border border-green-600 bg-neutral-100 dark:bg-neutral-800 shadow-highlight px-3 py-0.5 text-xs font-medium tracking-wide text-green-600'>
                Produkt dostępny
              </strong>
            ) : (
              <strong className='rounded-full border border-green-600 bg-neutral-100 dark:bg-neutral-800 shadow-highlight px-3 py-0.5 text-xs font-medium tracking-wide text-green-600'>
                Na zamówienie {product.timeToDeliver} dni
              </strong>
            )}
          </div>
          <h1 className='lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 mt-2'>
            {product.name}
          </h1>
          <p className='text-base lg:leading-tight leading-normal text-neutral-600 dark:text-neutral-300 mt-4'>
            {product.description}
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <fieldset>
            <legend className='mb-1 text-sm font-medium'>Kolor</legend>

            <div className='flex flex-wrap gap-1'>
              <label htmlFor='color_tt' className='cursor-pointer'>
                <input
                  type='radio'
                  name='color'
                  id='color_tt'
                  className='peer sr-only'
                />

                <span className='group inline-block rounded-full bg-neutral-200 dark:bg-neutral-700 px-3 py-1 text-xs font-medium peer-checked:bg-elo peer-checked:text-white'>
                  Bordowy
                </span>
              </label>

              <label htmlFor='color_fr' className='cursor-pointer'>
                <input
                  type='radio'
                  name='color'
                  id='color_fr'
                  className='peer sr-only'
                />

                <span className='group inline-block rounded-full bg-neutral-200 dark:bg-neutral-700 px-3 py-1 text-xs font-medium peer-checked:bg-blue-950 peer-checked:text-white'>
                  Granatowy
                </span>
              </label>

              <label htmlFor='color_cb' className='cursor-pointer'>
                <input
                  type='radio'
                  name='color'
                  id='color_cb'
                  className='peer sr-only'
                />

                <span className='group inline-block rounded-full bg-neutral-200 dark:bg-neutral-700 px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white'>
                  Czarny
                </span>
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend className='mb-1 text-sm font-medium'>Personalizacja</legend>

            <div className='flex flex-wrap gap-1'>
              <div className='flex flex-col text-sm'>
                <label htmlFor='fullname' className='cursor-pointer'>
                  Imię i nazwisko
                </label>
                <input
                  type='text'
                  name='Imię i nazwisko'
                  id='fullname'
                  ref={fullNameRef}
                  placeholder='Imię i nazwisko zawodnika'
                  className='inline-block rounded-full border-none px-3 py-1 text-xs font-medium bg-neutral-200 dark:bg-neutral-800'
                />
              </div>
              <div className='flex flex-col text-sm'>
                <label htmlFor='playernumber' className='cursor-pointer'>
                  Nr zawodnika
                </label>
                <input
                  type='text'
                  pattern='[0-9]*'
                  name='Numer zawodnika'
                  id='playernumber'
                  ref={playerNumberRef}
                  placeholder='Numer zawodnika'
                  className='inline-block rounded-full border-none px-3 py-1 text-xs font-medium  bg-neutral-200 dark:bg-neutral-800'
                />
              </div>
            </div>
          </fieldset>

          <div className='flex flex-wrap'>
            <button
              className='px-3 py-2 flex flex-row gap-2 items-center text-white bg-elo border border-transparent rounded-full text-sm hover:bg-red-700'
              onClick={addToCartHandler}
            >
              <ShoppingCartIcon className='w-4 h-4' />
              Dodaj do koszyka
            </button>
          </div>
        </div>
      </div>
    </section>
    // <div>
    //   <h1>{product.name}</h1>
    //   <h1>{product.stock}</h1>
    //   <h1>
    //     {product.category.map((category) => {
    //       return <p>{category.name}</p>
    //     })}
    //   </h1>
    //   <h1>{product.availability}</h1>
    //   <h1>{product.timeToDeliver}</h1>
    //   {/* Display the rest of the product details */}
    // </div>
  )
}
