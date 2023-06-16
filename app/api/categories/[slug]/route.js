import prisma from "@app/prismadb"
import { NextResponse } from "next/server"

export async function GET(req) {
  const slug = req.url.slice(req.url.lastIndexOf("/") + 1)
  const getCategory = await prisma.productCategory.findUnique({
    where: {
      slug: slug,
    },
    include: {
      product: {
        include: {
          images: true,
        },
      },
    },
  })

  return NextResponse.json(getCategory)
}
