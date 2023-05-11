"use client"

import TextTransition, { presets } from "react-text-transition"
import CategoryCard from "./CategoryCard"
import { useState, useEffect } from "react"

const TEXTS = ["pokrowce", "torby", "poszycia"]

const CategoryCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 categories_layout'>
      {data.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Categories = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])
  const categories = [
    {
      id: 1,
      title: "Optimist",
      image: "/assets/icons/categories/optimist-icon.svg",
    },
    {
      id: 2,
      title: "Laser",
      image: "/assets/icons/categories/laser-icon.svg",
    },
    {
      id: 3,
      title: "420",
      image: "/assets/icons/categories/420-icon.svg",
    },
    {
      id: 4,
      title: "Foil",
      image: "/assets/icons/categories/foil-icon.svg",
    },
    {
      id: 5,
      title: "Torby",
      image: "/assets/icons/categories/torba-icon.svg",
    },
    {
      id: 6,
      title: "Worki żeglarskie",
      image: "/assets/icons/categories/worek-icon.svg",
    },
  ]

  return (
    <section className='categories pt-16'>
      <h1 className='font-semibold head_text text-center text-black dark:text-white drop-shadow-lg'>
        Jakie
        <span className='orange_gradient text-center'>
          <TextTransition
            springConfig={presets.gentle}
            className='text-black dark:text-white text-center flex-center'
          >
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </span>
        dziś wybierasz?
      </h1>
      <CategoryCardList data={categories} />
    </section>
  )
}

export default Categories
