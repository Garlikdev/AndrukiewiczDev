import ProductPage from "@components/products/ProductPage"

// export async function generateStaticParams() {
//   const products = await fetch(`${process.env.PUBLIC_URL}/api/products`).then(
//     (res) => res.json()
//   )

//   return products.map((product) => ({
//     slug: product.slug,
//   }))
// }

export default async function page({ params }) {
  const res = await fetch(
    `${process.env.PUBLIC_URL}/api/products/${params.slug}`,
    { next: { revalidate: 120 } }
  )

  const product = await res.json()

  if (!product) return null
  return <ProductPage product={product} />
}
