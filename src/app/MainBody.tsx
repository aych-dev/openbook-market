const MainBody = () => {
  return (
    <>
      <div className='ml-12'>
        <h1>Create OpenBook Market</h1>
      </div>
      <div className='flex items-center justify-center '>
        <div>
          <form className=' mt-2 flex items-center'>
            <label className='w-40' htmlFor='order-size'>
              Minimum Order Size:{' '}
            </label>
            <input
              className='border border-10 rounded'
              type='number'
              id='order-size'
            />
          </form>

          <form className='mt-2 flex items-center'>
            <label className='w-40 ' htmlFor='tick-size'>
              Minimum Price Tick Size:{' '}
            </label>
            <input
              className='border border-10 rounded'
              type='number'
              id='tick-size'
            />
          </form>
          <div className='flex items-center justify-center'>
            <button className='mb-2 bg-blue-500 hover:bg-blue-700 rounded text-white text-xl mt-5 p-2'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBody;
