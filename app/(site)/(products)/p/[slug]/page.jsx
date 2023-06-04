import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline"
import { ShoppingCartIcon } from "@heroicons/react/24/solid"

export async function generateStaticParams() {
  const products = await fetch(`${process.env.PUBLIC_URL}/api/products`).then(
    (res) => res.json()
  )

  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function Products({ params }) {
  const res = await fetch(
    `${process.env.PUBLIC_URL}/api/products/${params.slug}`,
    { next: { revalidate: 120 } }
  )

  const product = await res.json()

  if (!product) return null
  return (
    <div className='md:flex items-start justify-center'>
      <div className='xl:w-2/6 lg:w-2/5 w-80 md:block hidden'>
        {product.images?.map((image) => {
          return (
            <img
              key={image.id}
              className='w-full'
              alt={image.name}
              src={image.path}
            />
          )
        })}
      </div>
      <div className='md:hidden'>
        <div className='flex items-center justify-between gap-4 flex-col'>
          {product.images.map((image) => {
            return (
              <img
                key={image.id}
                className='w-full'
                alt={image.name}
                src={image.path}
              />
            )
          })}
        </div>
      </div>
      <div className='xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6'>
        <div className='border-b border-gray-200 pb-6'>
          <p className='text-sm leading-none'>{product.category[0].name}</p>
          <h1 className='lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 mt-2'>
            {product.name}
          </h1>
        </div>
        <div className='py-4 border-b border-gray-200 flex items-center justify-between'>
          <p className='leading-4'>Kolor</p>
          <div className='flex items-center justify-center'>
            <select className='bg-white dark:bg-black rounded-full'>
              <option>Bordowy</option>
            </select>
          </div>
        </div>
        <button className='bg-elo hover:bg-red-800 rounded-full flex items-center justify-center leading-none w-full py-4 focus:outline-none font-bold text-white'>
          <ShoppingCartIcon className='w-8 h-8' />
          Dodaj do koszyka
        </button>
        <div>
          <div className='border-t border-b py-4 mt-7 border-gray-200'>
            <div
              data-menu
              className='flex justify-between items-center cursor-pointer'
            >
              <div className='cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded'>
                {product.stock > 0 ? (
                  <p className='text-base leading-4 text-green-600 flex flex-row gap-2 items-center'>
                    <CheckCircleIcon className='w-8 h-8' />
                    Produkt dostępny
                  </p>
                ) : (
                  <p className='text-base leading-4 text-yellow-500 flex flex-row gap-2 items-center'>
                    <CheckCircleIcon className='w-8 h-8' />
                    Dostępny na zamówienie
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='border-b py-4 border-gray-200'>
            <div
              data-menu
              className='flex justify-between items-center cursor-pointer'
            >
              <div className='flex flex-row gap-2 items-center'>
                <p className='text-base leading-4'>Czas oczekiwania (dni):</p>
                <p className='text-base leading-4'>{product.timeToDeliver}</p>
              </div>
            </div>

            <div>
              <p className='xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7'>
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <h1>{product.name}</h1>
    //   <h1>{product.stock}</h1>
    //   <h1>
    //     {product.category.map((category) => {
    //       return <p>{category.name}</p>
    //     })}
    //   </h1>
    //   <h1>{product.availability}</h1>
    //   <h1>{product.timeToDeliver}</h1>
    //   {/* Display the rest of the product details */}
    // </div>
  )
}
