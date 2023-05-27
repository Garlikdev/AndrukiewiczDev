import React from "react"

const layout = ({ children }) => {
  return (
    <div className='flex flex-row h-screen divide-x-2 w-full'>
      <div className='flex flex-col h-full w-64'>sidebar</div>
      <div className='w-full flex flex-col'>{children}</div>
    </div>
  )
}

export default layout
