import CategoryCard from "./CategoryCard"
import TextTransitionComponent from "../TextTransitionComponent"
import { Suspense } from "react"

export default async function Categories() {
  return (
    <section className='pt-8 sm:pt-16 mx-auto w-full flex justify-center items-center flex-col gap-4'>
      <h1 className='font-bold text-4xl sm:text-5xl text-center drop-shadow-lg'>
        Jakie
        <span className='orange_gradient text-center'>
          <TextTransitionComponent />
        </span>
        dziś wybierasz?
      </h1>

      <Suspense fallback={<>Loading Feed</>}>
        <CategoryCard />
      </Suspense>
    </section>
  )
}
