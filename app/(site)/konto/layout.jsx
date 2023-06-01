import Sidebar from "@components/UserPage/Sidebar"

const KontoLayout = ({ children }) => {
  return (
    <div className='flex flex-col sm:flex-row sm:divide-x-2 min-w-full'>
      <Sidebar className='w-full sm:w-1/4' />
      <div className='flex w-full sm:w-3/4 flex-col px-4'>{children}</div>
    </div>
  )
}

export default KontoLayout
