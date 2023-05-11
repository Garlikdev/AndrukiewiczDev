"use client"

import Image from "next/image"

const CategoryCard = ({ category }) => {
  return (
    <div className='prompt_card group' key={category.id}>
      <div className='flex-center gap-5'>
        <div className='flex-1 flex-center gap-3 cursor-pointer'>
          <Image
            key={category.id}
            src={category.image}
            alt='user_image'
            width={250}
            height={250}
            className='object-contain h-64 duration-300 ease-in-out group-hover:scale-95'
          />
          <div className='flex flex-col absolute flex-center text-center mx-auto'>
            <h3 className='font-inter text-white drop-shadow-bold text-2xl font-black duration-300 ease-in-out group-hover:scale-110'>
              {category.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
