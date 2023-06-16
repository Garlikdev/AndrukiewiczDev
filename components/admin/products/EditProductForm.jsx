"use client"

import Image from "next/image"
import { useForm } from "react-hook-form"

export default async function EditProductForm({ product, categories }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: product,
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  function handleChange(event) {
    console.log(event.target.value)
  }

  return (
    <div className='flex flex-col w-full'>
      <div className='w-full px-4 bg-indigo-100 dark:bg-indigo-950 h-32 flex items-center'>
        <div className='flex flex-row items-center gap-4'>
          <Image
            src={
              product.images[0]?.path
                ? product.images[0].path
                : "/assets/images/products/placeholder.png"
            }
            alt={product.name ? product.name : "Brak zdjęcia kategorii"}
            width={75}
            height={75}
            className='object-contain rounded-lg bg-white h-16 w-16'
          />
          <span className='text-lg font-bold'>
            {product.name} - ({product.category.name})
          </span>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full flex flex-col items-center relative'
      >
        <h1 className='font-semibold text-lg'>Informacje podstawowe</h1>
        <div
          className='w-full max-w-lg flex flex-col items-start px-4 py-2'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='mb-6 w-full'>
            <label
              htmlFor='base-input'
              className='block mb-2 text-sm font-medium text-neutral-900 dark:text-white'
            >
              Nazwa <span className='font-bold text-elo'>*</span>
            </label>
            <input
              type='text'
              {...register("name")}
              id='name'
              placeholder='Nazwa produktu'
              onChange={handleChange}
              required
              className='bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
          </div>
          <div className='mb-6 w-full sm:w-1/2'>
            <label
              htmlFor='base-input'
              className='block mb-2 text-sm font-medium text-neutral-900 dark:text-white'
            >
              Kod produktu <span className='font-bold text-elo'>*</span>
            </label>
            <input
              type='text'
              {...register("slug")}
              id='slug'
              placeholder='Kod produktu'
              onChange={handleChange}
              required
              className='bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
          </div>
          <div className='mb-6 w-full sm:w-1/2'>
            <label
              htmlFor='base-input'
              className='block mb-2 text-sm font-medium text-neutral-900 dark:text-white'
            >
              Kategoria <span className='font-bold text-elo'>*</span>
            </label>
            <select
              name='categoryID'
              id='categoryID'
              onChange={handleChange}
              {...register("categoryID")}
              className='bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className='mb-6 w-full sm:w-1/2'>
            <label
              htmlFor='base-input'
              className='block mb-2 text-sm font-medium text-neutral-900 dark:text-white'
            >
              Waga <span className='font-bold text-elo'>*</span>
            </label>
            <div className='relative'>
              <input
                type='text'
                {...register("weight")}
                id='weight'
                placeholder='Waga'
                onChange={handleChange}
                required
                className='bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              />
              <span className='absolute right-0 bottom-0 top-0 pr-2 items-center justify-center flex select-none'>
                kg
              </span>
            </div>
          </div>
          <div className='mb-6 w-full sm:w-1/2'>
            <label
              htmlFor='base-input'
              className='block mb-2 text-sm font-medium text-neutral-900 dark:text-white'
            >
              Cena <span className='font-bold text-elo'>*</span>
            </label>
            <div className='relative'>
              <input
                type='text'
                {...register("price")}
                id='price'
                placeholder='Cena'
                onChange={handleChange}
                required
                className='bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              />
              <span className='absolute right-0 bottom-0 top-0 pr-2 items-center justify-center flex select-none'>
                zł
              </span>
            </div>
          </div>
          <div className='mb-6 w-full sm:w-1/2'>
            <label
              htmlFor='base-input'
              className='block mb-2 text-sm font-medium text-neutral-900 dark:text-white'
            >
              Stan magazynowy <span className='font-bold text-elo'>*</span>
            </label>
            <input
              type='text'
              {...register("stock")}
              id='stock'
              placeholder='Stan magazynowy'
              onChange={handleChange}
              required
              className='bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
          </div>
        </div>
        <div className='sticky bottom-0 w-full flex items-center justify-center h-24 bg-indigo-200 dark:bg-indigo-900'>
          <button
            type='submit'
            className='rounded-full bg-indigo-950 text-white font-bold px-4 py-2'
          >
            Zapisz
          </button>
        </div>
      </form>
    </div>
  )
}
