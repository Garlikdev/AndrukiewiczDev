import CategoryItem from "@components/categories/CategoryItem"
import Image from "next/image"
import Link from "next/link"

// export async function generateStaticParams() {
//   const categories = await fetch(
//     `${process.env.PUBLIC_URL}/api/categories`
//   ).then((res) => res.json())

//   return categories.map((category) => ({
//     slug: category.slug,
//   }))
// }

export default async function Categories({ params }) {
  const res = await fetch(
    `${process.env.PUBLIC_URL}/api/categories/${params.slug}`,
    { next: { revalidate: 120 } }
  )

  const category = await res.json()

  const catres = await fetch(`${process.env.PUBLIC_URL}/api/categories`, {
    next: { revalidate: 120 },
  })

  const categories = await catres.json()

  if (!category && !categories) return null
  return (
    <div className='flex flex-row gap-4 items-start justify-center'>
      <div className='w-64 shadow-highlight bg-neutral-100 dark:bg-neutral-800 rounded-lg flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700'>
        <span className='font-semibold text-lg px-4 py-2'>Kategorie:</span>
        <ul className='flex-col flex'>
          {categories.map((catsidebar) => (
            <Link
              key={catsidebar.id}
              className='hover:underline rounded-lg hover:bg-neutral-300 px-4 py-2'
              href={`/c/${catsidebar.slug}`}
            >
              <li>{catsidebar.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='flex flex-col gap-4 items-start justify-center w-full'>
        <span className='flex flex-row gap-2'>
          <Link
            href='/'
            className='hover:text-neutral-400 dark:text-neutral-200 hover:underline'
          >
            Strona główna
          </Link>
          /<p>Kategorie</p>/<h1 className='font-bold'>{category.name}</h1>
        </span>
        <div className='flex flex-col w-full gap-4'>
          {/* CATEGORY ITEM */}
          {category?.product?.map((product) => (
            <CategoryItem
              key={product.id}
              product={product}
              category={category}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
