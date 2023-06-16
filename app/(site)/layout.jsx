import "@styles/globals.css"

import Nav from "@components/navbar/Nav"
import Provider from "@context/Provider"
import Footer from "@components/Footer"
import ToasterContext from "@context/ToasterContext"
import Theme from "@context/Theme"
import GlobalProvider from "@context/GlobalProvider"
import { Inter } from "next/font/google"

export const metadata = {
  title: "ELO Pokrowce",
  description:
    "Pokrowce na łódki, torby na osprzęt, Foil, Optimist, Cadet, Laser, Hornet, Omega",
  icons: {
    icon: "/assets/icons/favicon.png",
  },
}

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export default function Layout({ children }) {
  return (
    <html lang='pl' suppressHydrationWarning>
      <body className='flex-center flex-col'>
        <Theme>
          <GlobalProvider>
            <Provider>
              <ToasterContext />
              <Nav />
              <main
                className={`mt-2 sm:mt-16 w-full max-w-[80rem] h-[calc(100%-64px)] px-1 sm:px-8 md:px-16 ${inter.className}`}
              >
                {children}
              </main>
              <Footer />
            </Provider>
          </GlobalProvider>
        </Theme>
      </body>
    </html>
  )
}
