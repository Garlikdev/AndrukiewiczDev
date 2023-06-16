import { Cog6ToothIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import prisma from "@app/prismadb"

async function Categories() {
  const categories = await prisma.productCategory.findMany({
    include: {
      product: {
        select: {
          name: true,
        },
      },
    },
  })
  return categories
}

export default async function Page() {
  const categories = await Categories()

  return (
    <div className='px-4 py-2'>
      <div className='h-24 flex flex-row justify-between items-center'>
        <span className='font-semibold text-lg'>Kategorie</span>
        <div className='flex flex-row gap-4'>
          <button className='border border-slate-800 bg-indigo-800 rounded-full px-4 py-2 uppercase hover:bg-neutral-800 text-white transition-colors duration-200'>
            Dodaj kategorię
          </button>
        </div>
      </div>

      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='table-auto w-full text-sm text-left text-neutral-500 dark:text-neutral-400'>
          <thead className='text-xs text-neutral-700 uppercase bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-100'>
            <tr>
              <th scope='col' className='px-4 py-4'>
                Zdjęcie
              </th>
              <th scope='col' className='px-4 py-4'>
                Nazwa
              </th>
              <th scope='col' className='px-4 py-4'>
                Akcje
              </th>
            </tr>
          </thead>
          <tbody>
            {categories?.map((category) => (
              <tr
                className='bg-white border-b last:border-none dark:bg-neutral-800 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-neutral-50'
                key={category.id}
              >
                <td className='px-4 py-4 w-8'>
                  <Image
                    src={
                      category.image
                        ? category.image
                        : "/assets/images/products/placeholder.png"
                    }
                    alt={
                      category.image ? category.name : "Brak zdjęcia kategorii"
                    }
                    width={40}
                    height={40}
                    sizes='5vw'
                    className='object-contain m-auto'
                  />
                </td>
                <td
                  scope='row'
                  className='px-4 py-4 font-medium text-neutral-900 whitespace-nowrap dark:text-white'
                >
                  <Link
                    href={`/admin/categories/edit/${category.id}`}
                    className='text-indigo-800 dark:text-indigo-200 hover:underline'
                  >
                    {category.name} ({category.product.length})
                  </Link>
                </td>
                <td className='px-4 py-4 w-8'>
                  <button className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                    <Cog6ToothIcon className='w-6 h-6' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
