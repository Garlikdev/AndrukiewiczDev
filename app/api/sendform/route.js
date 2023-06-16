import { NextResponse } from "next/server"
import formEmail from "@components/mail/formEmail"

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, phoneNumber, message } = body

    if (!name || !email || !message) {
      return new NextResponse("Wypełnij wszystkie pola", { status: 400 })
    }
    // console.log(url)
    formEmail(email, name, phoneNumber, message)

    return new NextResponse("Wiadomość wysłana! Odpowiemy w ciągu 24h!", {
      status: 200,
    })
  } catch (err) {
    return new NextResponse("Nie udało się wysłać maila, spróbuj ponownie!", {
      status: 400,
    })
  }
}
