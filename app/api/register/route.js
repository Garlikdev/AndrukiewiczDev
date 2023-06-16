import { NextResponse } from "next/server"
import bcrypt from "bcrypt"
import prisma from "@app/prismadb"
import jwt from "jsonwebtoken"

const { EMAIL_URL } = process.env

export async function POST(req) {
  try {
    const body = await req.json()
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
      return new NextResponse("Konto o podanym adresie już istnieje!", {
        status: 400,
      })
    }

    const newUser = {
      email,
      password,
      name,
      lastName,
    }

    const activation_token = createActivationToken(newUser)

    const url = `${EMAIL_URL}/aktywacja/${activation_token}`
    // console.log(url)
    sendMail(email, url, "Aktywuj konto", "newAccount")

    return new NextResponse(
      "Link aktywacyjny został wysłany na twój adres email!",
      {
        status: 200,
      }
    )
  } catch (err) {
    return new NextResponse("Nie udało się wysłać maila, spróbuj ponownie!", {
      status: 400,
    })
  }
}

const createActivationToken = (payload) => {
  return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {
    expiresIn: "5m",
  })
}
