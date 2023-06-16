import prisma from "@app/prismadb"
import { NextResponse } from "next/server"

export async function GET(req) {
  const slug = req.url.slice(req.url.lastIndexOf("/") + 1)
  const getProduct = await prisma.product.findUnique({
    where: {
      slug: slug,
    },
    include: {
      category: true,
      images: true,
    },
  })

  return NextResponse.json(getProduct)
}
