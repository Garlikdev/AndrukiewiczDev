import Image from "next/image"
import Link from "next/link"

async function getCategories() {
  const res = await fetch(`${process.env.PUBLIC_URL}/api/categories`, {
    next: { revalidate: 120 },
  })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export async function CategoryCard() {
  const categories = await getCategories()
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full justify-center'>
      {categories?.map((category) => (
        <Link
          href={`/c/${category.slug}`}
          key={category.id}
          className='group items-center justify-center flex rounded-xl bg-neutral-100 dark:bg-neutral-800 shadow-highlight relative sm:hover:scale-105 hover:shadow-xl transition-transform duration-150 overflow-hidden'
        >
          <div className='flex-center gap-5'>
            <div className='flex-1 flex-center gap-3 cursor-pointer'>
              <Image
                key={category.id}
                src={category.image}
                alt={category.name}
                width={250}
                height={250}
                className='object-contain h-64 w-64 duration-300 ease-in-out group-hover:scale-95 p-4'
              />
              <div className='flex flex-col absolute flex-center text-center mx-auto'>
                <h3 className='font-inter text-white drop-shadow-bold text-2xl font-black duration-300 ease-in-out group-hover:scale-110'>
                  {category.name}
                </h3>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryCard
