const Navbar = () => {
  return (
    <div>
      <div className='navbar bg-base-100 border-b px-12'>
        <div className='flex-1'>
          <p className='text-l'>
            hlela <span className='font-bold text-xs'>admin</span>
          </p>
        </div>
        {/* <div className='flex-none gap-2'>
          <div className='form-control'>
            <input
              type='text'
              placeholder='Search'
              className='input input-bordered w-full md:w-48 rounded-full'
            />
          </div> */}
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div className='w-10 rounded-full bg-primary'></div>
          </div>
          <ul
            tabIndex={0}
            className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-36 md:w-52'
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
