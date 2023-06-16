import NextAuth from "next-auth/next"
import prisma from "@app/prismadb"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import bcrypt from "bcrypt"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "E-mail",
          type: "text",
          placeholder: "E-mail (wymagane)",
        },
        password: { label: "Hasło (wymagane)", type: "password" },
      },
      async authorize(credentials) {
        // check to see if email and password is there
        if (!credentials.email || !credentials.password) {
          throw new Error("Wprowadź e-mail oraz hasło")
        }

        // check to see if user exists
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        })

        // if no user was found
        if (!user || !user?.hashedPassword) {
          throw new Error("Użytkownik nie istnieje")
        }

        if (!user.active) {
          throw new Error("Konto nie zostało aktywowane")
        }

        // check to see if password matches
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        )

        // if password does not match
        if (!passwordMatch) {
          throw new Error("Nieprawidłowe hasło")
        }

        return user
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      // check to see if user exists
      // store the user id from MongoDB to session

      // działa credentials i google
      const sessionUser = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      })
      session.user.id = sessionUser.id
      session.user.role = sessionUser.role

      return session
    },
    async signIn({ user }) {
      try {
        // check if user already exists
        const userExists = await prisma.user.findUnique({
          where: {
            email: user.email,
          },
        })

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          const fullname = user.name.split(" ")
          await prisma.user.create({
            data: {
              email: user.email,
              name: fullname[0],
              lastName: fullname[1],
            },
          })
        }

        return true
      } catch (error) {
        console.log("Error checking if user exists: ", error.message)
        return false
      }
    },
    async jwt({ token, user }) {
      try {
        // check if user already exists
        const userExists = await prisma.user.findUnique({
          where: {
            email: token.email,
          },
        })

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await prisma.user.create({
            data: {
              email: token.email,
              name: token.name,
            },
          })
          token.id = user.id
          return token
        }

        return {
          id: userExists._id,
          email: userExists.email,
          role: userExists.role,
        }
      } catch (error) {
        console.log("Error checking if user exists: ", error.message)
        return false
      }
    },
  },
  pages: {
    signIn: "/logowanie",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
