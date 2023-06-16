export default async function Konto({ data, session }) {
  return (
    <div className='w-full'>
      <div className='max-w-[40rem]'>
        <h1 className='text-2xl font-medium'>Zamówienia</h1>
        <div className='mt-6 border-neutral-400 pt-4 flex flex-wrap mb-6 flex-col w-full'>
          <h2 className='text-xl text-neutral-900'>Dane konta</h2>
          <div className='flex justify-between mt-4'>
            <div className='w-full md:w-1/2 px-3 mb-6'>
              <label className='block  tracking-wide text-neutral-700 text-xs font-bold mb-2'>
                first name
              </label>
              <input
                className='appearance-none block w-full bg-white text-neutral-700 border border-neutral-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-neutral-500'
                type='text'
                placeholder='Imię'
                defaultValue={session?.user.name.split(" ")[0]}
                required
              />
            </div>
            <div className='w-full md:w-1/2 px-3 mb-6'>
              <label className='block  tracking-wide text-neutral-700 text-xs font-bold mb-2'>
                last name
              </label>
              <input
                className='appearance-none block w-full bg-white text-neutral-700 border border-neutral-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-neutral-500'
                type='text'
                placeholder='Nazwisko'
                defaultValue={session?.user.name.split(" ")[1]}
                required
              />
            </div>
          </div>
          <div className='w-full md:w-full px-3 mb-6'>
            <label className='block  tracking-wide text-neutral-700 text-xs font-bold mb-2'>
              user name
            </label>
            <input
              className='appearance-none block w-full bg-white text-neutral-700 border border-neutral-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-neutral-500'
              type='text'
              required
            />
          </div>
          <div className='w-full md:w-full px-3 mb-6'>
            <label className='block  tracking-wide text-neutral-700 text-xs font-bold mb-2'>
              Bio
            </label>
            <textarea
              className='bg-neutral-100 rounded-md border leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border-neutral-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'
              required
            ></textarea>
          </div>
          <div className='flex justify-end'>
            <button
              className='appearance-none bg-neutral-200 text-neutral-900 px-2 py-1 shadow-sm border border-neutral-400 rounded-md mr-3'
              type='submit'
            >
              save changes
            </button>
          </div>
          <label
            className='block tracking-wide text-neutral-700 text-xs font-bold mb-2'
            htmlFor='grid-text-1'
          >
            Adres e-mail
          </label>
          <input
            className='appearance-none block w-full bg-white text-neutral-700 border border-neutral-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-neutral-500'
            id='grid-text-1'
            type='text'
            placeholder='Adres e-mail'
            defaultValue={session?.user.email}
            required
          />
        </div>
      </div>
    </div>
  )
}
