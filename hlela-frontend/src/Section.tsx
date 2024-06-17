const Section = () => {
  return (
    <div className='bg-base-300 min-h-screen p-8'>
      <h2 className='font-bold content-center text-2xl text-center pt-8'>
        Personal Experiences
      </h2>
      <p className='text-center text-xl p-4'>
        Every personal story counts! You are special, you matter for us.
      </p>
      <div className='flex bg-base-100 mx-8  p-4 rounded-full'>
        <img
          src='https://i.pinimg.com/736x/d5/48/4c/d5484c4c81cadd84ae120fad1571342a.jpg'
          alt=''
          className='m-8 object-cover h-80 w-80 rounded-full'
        />
        <div className='m-8 w-full h-80 bg-violet-100 rounded-full'>
          {/* <p className='m-4 text-center'>Amazing!</p> */}
          {/* <div className='flex items-center m-8'> */}
          <div className='flex m-8 justify-center'>
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='w-10 h-10 text-purple-500'
                viewBox='0 0 24 24'
              >
                <path d='M12 .288l2.833 8.718h9.167l-7.417 5.396 2.833 8.718-7.416-5.396-7.417 5.396 2.833-8.718-7.417-5.396h9.167z' />
              </svg>
            ))}
          </div>
          <h2 className='text-2xl text-center font-bold mx-16'>
            People from the local market were friendly and was able to find all
            the plant-based foods.
          </h2>
          <p className='text-center text-gray-600 m-8'>
            Maria experienced Central Market (stand)
          </p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Section;
