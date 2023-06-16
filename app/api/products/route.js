import prisma from "@app/prismadb"
import { NextResponse } from "next/server"

export async function GET(request) {
  const getProduct = await prisma.product.findMany({
    include: {
      category: true,
      images: true,
    },
  })

  return NextResponse.json(getProduct)
}
