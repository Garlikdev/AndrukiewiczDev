const loading = () => {
  return (
    <div className='px-4 py-2'>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='table-auto w-full text-sm text-left text-neutral-500 dark:text-neutral-400'>
          <thead className='text-xs text-neutral-700 uppercase bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Zdjęcie
              </th>
              <th scope='col' className='px-6 py-3'>
                Nazwa
              </th>
              <th scope='col' className='px-6 py-3'>
                Akcje
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(8).keys()].map((i) => (
              <tr
                className='w-full h-5 animate-pulse bg-neutral-200 rounded-full'
                style={{
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: "1s",
                }}
                key={i}
              >
                <td className='px-6 py-4 w-8'></td>
                <td
                  scope='row'
                  className='px-6 py-4 font-medium text-neutral-900 whitespace-nowrap dark:text-white'
                ></td>
                <td className='px-6 py-4 w-8'>
                  <button className='font-medium text-blue-600 dark:text-blue-500 hover:underline'></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default loading
