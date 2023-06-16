"use client"
import { useContext } from "react"
import CartContext from "@context/CartContext"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"

export default async function CategoryItem({ product, category }) {
  const { addItemToCart } = useContext(CartContext)

  const addToCartHandler = () => {
    addItemToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0].path,
    })
  }
  return (
    <div
      key={product.id}
      className='w-full sm:h-64 items-center flex flex-col sm:flex-row rounded-lg bg-neutral-100 dark:bg-neutral-800 shadow-highlight transition-shadow duration-150 overflow-hidden px-4 py-4'
    >
      <Link
        href={`/p/${product.slug}`}
        className='relative w-full sm:w-1/4 h-64 flex'
      >
        <Image
          src={
            product.images[0]
              ? product.images[0].path
              : "/assets/images/products/placeholder.png"
          }
          alt={product.name}
          fill
          loading='lazy'
          sizes='(max-width: 768px) 35vw,
              (max-width: 1200px) 25vw,
              15vw'
          className='object-contain'
        />
      </Link>
      <div className='w-full sm:w-3/4 h-full px-4 py-2 flex flex-col'>
        <div className='flex flex-col h-full relative'>
          <Link
            key={product.id}
            href={`/p/${product.slug}`}
            className='text-2xl font-bold truncate hover:underline'
          >
            <h2>{product.name}</h2>
          </Link>
          <h3 className='truncate text-neutral-600 dark:text-neutral-400'>
            {category.name}
          </h3>
          <p className='line-clamp-3'>{product.description}</p>
        </div>
        <div className='flex flex-row h-full justify-end flex-between items-center'>
          <div>
            {product.discountPrice ? (
              <div className='flex flex-row items-baseline gap-4'>
                <p className='font-bold text-2xl'>{product.discountPrice} zł</p>
                <p className='line-through text-neutral-600 dark:text-neutral-400'>
                  {product.price} zł
                </p>
                <p className='text-elo dark:text-red-700 font-bold'>
                  {Math.round(
                    ((product.price - product.discountPrice) / product.price) *
                      100
                  )}
                  % taniej!
                </p>
              </div>
            ) : (
              <p className='font-bold text-2xl'>{product.price} zł</p>
            )}
          </div>
          <div className='flex flex-wrap gap-2'>
            <button
              className='px-4 py-2 flex flex-row items-center text-white bg-elo shadow-highlight rounded-md hover:bg-red-700'
              onClick={addToCartHandler}
            >
              <ShoppingCartIcon className='w-6 h-6' />
              Dodaj do koszyka
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
