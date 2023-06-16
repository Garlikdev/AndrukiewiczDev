"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import TextareaAutosize from "react-textarea-autosize"

export default async function NewProduct() {
  const [categories, setCategories] = useState([])

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    // Remove trailing spaces from input values
    for (const key in data) {
      if (typeof data[key] === "string") {
        data[key] = data[key].trim()
      }
    }
    console.log(data)
  }

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch(`/api/categories`)

      const data = await res.json()
      setCategories(data)
    }
    fetchCategories()
  }, [])

  const handleChange = (event) => {
    const input = event.target.value
    const slugValue = input
      .toLowerCase() // Convert to lowercase
      .replace(/\s+/g, " ") // Replace 2 or more spaces with a single space
      .replace(/ /g, "-") // Replace spaces with dashes
      .replace(/[ąćęłńóśźż]/g, (match) => {
        const polishLetters = {
          ą: "a",
          ć: "c",
          ę: "e",
          ł: "l",
          ń: "n",
          ó: "o",
          ś: "s",
          ź: "z",
          ż: "z",
        }
        return polishLetters[match]
      })
      .replace(/-+/g, "-")
      .replace(/-+$/, "") // Remove trailing dashes and replace multiple dashes with a single dash

    event.target.value = input // Update the input field value
    register(event.target.name) // Re-register the input field

    setValue("slug", slugValue) // Update the slug input field value
    register("slug") // Re-register the slug input field
  }

  useEffect(() => {
    if (categories.length > 0) {
      setValue("categoryID", categories[0].id)
    }
  }, [categories, setValue])

  return (
    <div className='w-full'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full flex flex-col items-center relative mx-auto max-w-screen-xl'
      >
        <div className='px-4 py-16 sm:px-6 lg:px-8 flex flex-col items-center'>
          <div className='mx-auto max-w-lg text-center'>
            <h1 className='text-2xl font-bold sm:text-3xl'>
              Dodaj nowy produkt
            </h1>
          </div>
          <div className='mb-6 w-full'>
            <label
              htmlFor='base-input'
              className='block mb-2 text-sm font-medium text-neutral-900 dark:text-white'
            >
              Nazwa <span className='font-bold text-elo'>*</span>
            </label>
            <input
              type='text'
              id='name'
              placeholder='Nazwa produktu'
              required
              {...register("name")}
              onChange={handleChange}
              className='bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-elo focus:border-elo block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-elo dark:focus:border-elo'
            />
          </div>
          <div className='mb-6 w-full'>
            <label
              htmlFor='base-input'
              className='block mb-2 text-sm font-medium text-neutral-900 dark:text-white'
            >
              Kod produktu <span className='font-bold text-elo'>*</span>
            </label>
            <input
              type='text'
              id='slug'
              placeholder='Kod produktu'
              readOnly
              disabled
              required
              {...register("slug")}
              className='bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-elo focus:border-elo block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-elo dark:focus:border-elo'
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
              id='categoryID'
              {...register("categoryID")}
              defaultValue={categories.length > 0 ? categories[1].id : ""}
              className='bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-elo focus:border-elo block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-elo dark:focus:border-elo'
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
                id='weight'
                placeholder='Waga'
                required
                {...register("weight")}
                className='bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-elo focus:border-elo block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-elo dark:focus:border-elo'
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
                id='price'
                placeholder='Cena'
                required
                {...register("price")}
                className='bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-elo focus:border-elo block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-elo dark:focus:border-elo'
              />
              <span className='absolute right-0 bottom-0 top-0 pr-2 items-center justify-center flex select-none'>
                zł
              </span>
            </div>
          </div>
          {/* <div className='mb-6 w-full sm:w-1/2'>
            <label
              htmlFor='base-input'
              className='block mb-2 text-sm font-medium text-neutral-900 dark:text-white'
            >
              Stan magazynowy <span className='font-bold text-elo'>*</span>
            </label>
            <input
              type='text'
              id='stock'
              placeholder='Stan magazynowy'
              required
              {...register("stock")}
              className='bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-elo focus:border-elo block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-elo dark:focus:border-elo'
            />
          </div> */}
          <div className='mb-6 w-full sm:w-1/2'>
            <label
              htmlFor='base-input'
              className='block mb-2 text-sm font-medium text-neutral-900 dark:text-white'
            >
              Stan magazynowy <span className='font-bold text-elo'>*</span>
            </label>
            <input
              type='text'
              id='stock'
              placeholder='Stan magazynowy'
              required
              {...register("stock")}
              className='bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-elo focus:border-elo block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-elo dark:focus:border-elo'
            />
          </div>
          <div className='mb-6 w-full'>
            <TextareaAutosize
              placeholder='Opis produktu'
              {...register("description", { min: 3, max: 1000 })}
              minRows={4}
              className='resize-none appearance-none overflow-hidden bg-transparent focus:outline-none bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-elo focus:border-elo block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-elo dark:focus:border-elo'
            />
          </div>
        </div>
        <div className='sticky bottom-0 w-full flex items-center justify-center h-24 bg-indigo-200 dark:bg-indigo-900'>
          <input type='submit' />
        </div>
      </form>
    </div>
  )
}
