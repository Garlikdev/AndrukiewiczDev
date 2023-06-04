import prisma from "../../(site)/prismadb"
import { NextResponse } from "next/server"

export async function GET(request) {
  const getProduct = await prisma.product.findMany()

  return NextResponse.json(getProduct)
}
