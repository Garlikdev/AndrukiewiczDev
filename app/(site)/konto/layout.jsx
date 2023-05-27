import Sidebar from "@components/UserPage/Sidebar"

const KontoLayout = ({ children }) => {
  return (
    <div className='flex flex-row h-screen divide-x-2 w-full'>
      <Sidebar className='w-1/4' />
      <div className='flex w-3/4 flex-col px-4'>{children}</div>
    </div>
  )
}

export default KontoLayout
