import prisma from "@app/prismadb"
import { NextResponse } from "next/server"

export async function GET(request) {
  const getCategories = await prisma.productCategory.findMany({
    include: {
      product: {
        select: {
          name: true,
        },
      },
    },
  })

  return NextResponse.json(getCategories)
}
