import "@styles/globals.css"

import Provider from "@context/Provider"
import ToasterContext from "@context/ToasterContext"
import Theme from "@context/Theme"
import Sidebar from "../../../components/admin/Sidebar"
import Navbar from "../../../components/admin/Navbar"

export const metadata = {
  title: "ELO Pokrowce",
  description:
    "Pokrowce na łódki, torby na osprzęt, Foil, Optimist, Cadet, Laser, Hornet, Omega",
  icons: {
    icon: "/assets/icons/favicon.png",
  },
}

const RootLayout = ({ children }) => {
  return (
    <html lang='pl' suppressHydrationWarning>
      <body className='flex-center flex-col bg-white dark:bg-neutral-900'>
        <Theme>
          <Provider>
            <ToasterContext />
            <div className='flex flex-row w-full'>
              <Sidebar />
              <div className='flex flex-col w-full ml-64'>
                <Navbar />
                <main className='w-full flex flex-col'>{children}</main>
              </div>
            </div>
          </Provider>
        </Theme>
      </body>
    </html>
  )
}

export default RootLayout
