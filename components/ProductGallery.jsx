"use client"

import Image from "next/image"
import { useState } from "react"

const ProductGallery = ({ product }) => {
  const [mainImage, setMainImage] = useState(
    product?.images[0]?.path || "/assets/images/products/placeholder.png"
  )
  const handleImageClick = (url) => {
    setMainImage(url)
  }
  return (
    <aside>
      <div className='border border-neutral-200 dark:border-neutral-800 shadow-lg p-3 text-center rounded mb-5 h-96 flex items-center relative'>
        <Image
          className='object-contain inline-block'
          src={mainImage}
          alt={product?.name}
          fill
          sizes='(max-width: 768px) 50vw,
              (max-width: 1200px) 50vw,
              100vw'
        />
      </div>
      <div className='space-x-2 overflow-auto text-center whitespace-nowrap'>
        {product?.images?.map((img) => (
          <a
            key={img.id}
            className='inline-block border border-neutral-200 dark:border-neutral-800 shadow-lg p-1 rounded-md hover:border-elo cursor-pointer'
            onClick={() => handleImageClick(img?.path)}
          >
            <Image
              className='w-14 h-14 object-contain'
              src={img.path}
              alt={product?.name}
              width='500'
              height='500'
            />
          </a>
        ))}
      </div>
    </aside>
  )
}

export default ProductGallery
