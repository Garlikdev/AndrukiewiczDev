import "@styles/globals.css"

import Nav from "@components/Nav"
import Provider from "@context/Provider"
import Footer from "@components/Footer"
import ToasterContext from "@context/ToasterContext"

export const metadata = {
  title: "ELO Pokrowce",
  description:
    "Pokrowce na łódki, torby na osprzęt, Foil, Optimist, Cadet, Laser, Hornet, Omega",
}

const RootLayout = ({ children }) => {
  return (
    <html lang='pl'>
      <body className='dark:bg-neutral-900 flex-center flex-col text-black dark:text-white'>
        <Provider>
          <ToasterContext />
          <Nav />
          <main className='mt-2 sm:mt-16 w-full max-w-[80rem] h-[calc(100%-64px)] px-1 sm:px-8 md:px-16'>
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
