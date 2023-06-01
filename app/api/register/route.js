import bcrypt from "bcrypt"
import prisma from "../../(site)/prismadb"
import { NextResponse } from "next/server"

export async function POST(request) {
  const body = await request.json()
  const { name, lastName, email, password } = body

  if (!name || !lastName || !email || !password) {
    return new NextResponse("Wypełnij wszystkie pola", { status: 400 })
  }

  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (exist) {
    throw new Error("Konto o podanym adresie e-mail już istnieje")
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      name,
      lastName,
      email,
      hashedPassword,
    },
  })

  return NextResponse.json(user)
}
