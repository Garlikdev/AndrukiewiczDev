"use client"

import TextTransition, { presets } from "react-text-transition"
import { useState, useEffect } from "react"

const TEXTS = ["pokrowce", "torby"]

const TextTransitionComponent = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])
  return (
    <TextTransition
      springConfig={presets.gentle}
      className='text-center flex-center text-black dark:text-white'
    >
      {TEXTS[index % TEXTS.length]}
    </TextTransition>
  )
}

export default TextTransitionComponent
