import prisma from "@app/prismadb"
import { Cog6ToothIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"

async function Products() {
  const products = await prisma.product.findMany({
    include: {
      category: true,
      images: true,
    },
  })
  return products
}

export default async function Page() {
  const products = await Products()

  return (
    <div className='px-4 py-2'>
      <div className='h-24 flex flex-row justify-between items-center'>
        <span className='font-semibold text-lg'>Produkty</span>
        <div className='flex flex-row gap-4'>
          <button className='border border-slate-800 bg-indigo-800 rounded-full px-4 py-2 uppercase hover:bg-neutral-800 text-white transition-colors duration-200'>
            Dodaj produkt
          </button>
        </div>
      </div>

      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='table-auto w-full text-sm text-left text-neutral-500 dark:text-neutral-400'>
          <thead className='text-xs text-neutral-700 uppercase bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-100'>
            <tr>
              <th scope='col' className='px-4 py-2'>
                Zdjęcie
              </th>
              <th scope='col' className='px-4 py-2'>
                Nazwa
              </th>
              <th scope='col' className='px-4 py-2'>
                Kategoria
              </th>
              <th scope='col' className='px-4 py-2'>
                Stan
              </th>
              <th scope='col' className='px-4 py-2'>
                Czas wysyłki
              </th>
              <th scope='col' className='px-4 py-2'>
                Cena
              </th>
              <th scope='col' className='px-4 py-2'>
                Aktywny
              </th>
              <th scope='col' className='px-4 py-2'>
                Akcje
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr
                className='bg-white border-b last:border-none dark:bg-neutral-800 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-neutral-50'
                key={product.id}
              >
                <td className='p-4'>
                  <Image
                    src={
                      product?.images[0].path
                        ? product.images[0].path
                        : "/assets/images/products/placeholder.png"
                    }
                    alt={product?.name}
                    width={40}
                    height={40}
                    sizes='5vw'
                    className='object-contain m-auto'
                  />
                </td>
                <td
                  scope='row'
                  className='p-4 font-medium text-neutral-900 whitespace-nowrap dark:text-white'
                >
                  <Link
                    href={`/admin/products/edit/${product.id}`}
                    className='text-indigo-800 dark:text-indigo-200 hover:underline'
                  >
                    {product.name}
                  </Link>
                </td>
                <td className='p-4'>{product.category.name}</td>
                <td className='p-4'>{product.stock}</td>
                <td className='p-4'>{product.timeToDeliver} (dni)</td>
                <td className='p-4'>{product.price} zł</td>
                <td className='p-4'>
                  <label className='relative inline-flex items-center cursor-pointer'>
                    <input
                      type='checkbox'
                      value=''
                      className='sr-only peer'
                      checked={product.active}
                      readOnly
                    />
                    <div className="w-9 h-5 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-neutral-600 peer-checked:bg-blue-600"></div>
                  </label>
                </td>
                <td className='p-4'>
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
