import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

import User from "@models/user"
import connectToDB from "@utils/database"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "e-mail" },
        password: { label: "Hasło", type: "password" },
      },
      async authorize(credentials) {
        // check to see if email and password is there
        if (!credentials.email || !credentials.password) {
          throw new Error("Please enter an email and password")
        }

        // check to see if user exists
        const user = await User.findOne({ email: session.user.email })

        // if no user was found
        if (!user || !user?.hashedPassword) {
          throw new Error("No user found")
        }

        // check to see if password matches
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        )

        // if password does not match
        if (!passwordMatch) {
          throw new Error("Incorrect password")
        }

        return user
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
  // callbacks: {
  //   async session({ session }) {
  //     // store the user id from MongoDB to session
  //     const sessionUser = await User.findOne({ email: session.user.email })
  //     session.user.id = sessionUser._id.toString()

  //     return session
  //   },
  //   async signIn({ account, profile, user, credentials }) {
  //     try {
  //       await connectToDB()

  //       // check if user already exists
  //       const userExists = await User.findOne({ email: profile.email })

  //       // if not, create a new document and save user in MongoDB
  //       if (!userExists) {
  //         await User.create({
  //           email: profile.email,
  //           name: profile.name,
  //         })
  //       }

  //       return true
  //     } catch (error) {
  //       console.log("Error checking if user exists: ", error.message)
  //       return false
  //     }
  //   },
  // },
})

export { handler as GET, handler as POST }
