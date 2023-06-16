"use client"

import EditProductForm from "@components/admin/products/EditProductForm"
import { useEffect, useState } from "react"

const EditProduct = async ({ params }) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProductsById = async () => {
      setIsLoading(true)
      const res = await fetch(`/api/products/productById/${params.slug}`)

      const data = await res.json()
      setData(data)
      setIsLoading(false)
    }

    fetchProductsById()
  }, [])

  if (isLoading) {
    return <p>Pobieranie danych...</p>
  }

  return <EditProductForm data={data} />
}

export default EditProduct
