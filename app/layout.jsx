import "@styles/globals.css"

import Nav from "@components/navbar/Nav"
import { Inter, Open_Sans } from "next/font/google"
import ActiveSectionContextProvider from "@/context/active-section-context"
import Footer from "@components/footer"
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google"
import Script from "next/script"

export const metadata = {
  title: "Andrukiewicz Dev | Front-End Developer",
  description: "My personal portfolio",
  icons: {
    icon: "/assets/icons/favicon.png",
  },
}

// If loading a variable font, you don't need to specify the font weight
const inter = Open_Sans({
  subsets: ["latin"],
  display: "swap",
})

export default function Layout({ children }) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${inter.className} bg-gray-200 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 transition-all bg-opacity-50`}
      >
        <div className='gradient-blur -z-10'></div>
        <ActiveSectionContextProvider>
          <Nav />
          {children}
        </ActiveSectionContextProvider>
        <Footer />
      </body>
      <GoogleTagManager gtmId='GTM-5Q74XNRK' />
      <GoogleAnalytics gaId="G-171W6BLZ9Y" />
      {/* <Script src='https://www.googletagmanager.com/gtag/js?id=G-171W6BLZ9Y' />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-171W6BLZ9Y');
        `}
      </Script> */}
      
    </html>
  )
}
