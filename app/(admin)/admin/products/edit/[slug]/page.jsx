import prisma from "@app/prismadb"
import EditProductForm from "@components/admin/products/EditProductForm"

async function getProduct(params) {
  const getProduct = await prisma.product.findUnique({
    where: {
      id: params.slug,
    },
    include: {
      category: true,
      images: true,
    },
  })
  return getProduct
}

async function getCategories() {
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

const EditProduct = async ({ params }) => {
  const product = await getProduct(params)
  const categories = await getCategories()

  return <EditProductForm product={product} categories={categories} />
}

export default EditProduct
