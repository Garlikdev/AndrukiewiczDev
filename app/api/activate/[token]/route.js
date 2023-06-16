import { NextResponse } from "next/server"
import bcrypt from "bcrypt"
import prisma from "@app/prismadb"
import jwt from "jsonwebtoken"

export const GET = async (req, { params }) => {
  try {
    const token = params.token
    const user = jwt.verify(token, process.env.ACTIVATION_TOKEN_SECRET)

    const { email, password, name, lastName } = user

    const check = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    if (check)
      return new NextResponse.json(
        { error: "Konto jest już aktywne!" },
        { status: 400 }
      )

    const hashedPassword = await bcrypt.hash(password, 10)

    await prisma.user.create({
      data: {
        name,
        lastName,
        email,
        hashedPassword,
        active: true,
      },
    })

    return NextResponse.json({ message: "Konto założone!" }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: "Link jest nieaktywny." },
      { status: 500 }
    )
  }
}
