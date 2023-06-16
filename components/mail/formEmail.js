import nodemailer from "nodemailer"
import fs from "fs"
import { NextResponse } from "next/server"

export default async function formEmail(email, name, phoneNumber, message) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: Number(process.env.EMAIL_PORT),
      secureConnection: Boolean(process.env.SECURE),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
    })

    fs.readFile(
      "./components/mail/templates/formularz.html",
      "utf-8",
      (error, data) => {
        if (error) {
          return new NextResponse("Coś poszło nie tak! Spróbuj ponownie!", {
            status: 400,
          })
        } else {
          let mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Formularz kontaktowy - ${name}`,
          }

          // Replace the variables in the HTML file with actual values
          mailOptions.html = data
            .toString()
            .replace(/\$\{message\}/g, message)
            .replace(/\$\{phoneNumber\}/g, phoneNumber)
            .replace(/\$\{name\}/g, name)
            .replace(/\$\{email\}/g, email)

          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              return new NextResponse("Coś poszło nie tak! Spróbuj ponownie!", {
                status: 400,
              })
            } else {
              return new NextResponse(
                "Wiadomość wysłana! Odpowiemy w ciągu 24h!",
                {
                  status: 200,
                }
              )
            }
          })
        }
      }
    )
  } catch (error) {
    return new NextResponse("Coś poszło nie tak! Spróbuj ponownie!", {
      status: 400,
    })
  }
}
