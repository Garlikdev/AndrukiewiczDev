import "@styles/globals.css"

import Nav from "@components/Nav"
import Provider from "@components/Provider"
import Footer from "@components/Footer"

export const metadata = {
  title: "Elo Studio",
  description:
    "Pokrowce na łódki, torby na osprzęt, Foil, Optimist, Cadet, Laser, Hornet, Omega",
}

const RootLayout = ({ children }) => {
  return (
    <html lang='pl'>
      <body className='dark:bg-gray-900 flex-center flex-col'>
        <Provider>
          <Nav />
          <main className='app mt-16'>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
