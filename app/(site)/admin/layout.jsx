import React from "react"
import Navbar from "./(components)/Navbar"

const layout = ({ children }) => {
  return (
    <div className='flex flex-row h-screen w-full'>
      <Navbar />
      <div className='w-full flex flex-col'>{children}</div>
    </div>
  )
}

export default layout
