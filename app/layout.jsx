import "@styles/globals.css"

import Nav from "@components/navbar/Nav"
import { Inter } from "next/font/google"
import ActiveSectionContextProvider from "@/context/active-section-context"
import Footer from "@components/footer"

export const metadata = {
  title: "Andrukiewicz Dev | Front-End Developer",
  description: "My personal portfolio",
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
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 transition-all`}
      >
        <ActiveSectionContextProvider>
          <Nav />
          {children}
        </ActiveSectionContextProvider>
        <Footer />
      </body>
    </html>
  )
}
