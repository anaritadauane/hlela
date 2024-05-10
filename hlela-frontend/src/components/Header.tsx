import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='navbar bg-base-100 max-w-6xl mx-auto'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link to='/categories'>Categories</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </div>
        <p className='text-xl text-black font-bold'>hlela</p>
      </div>

      <label className='input input-sm bg-base-200 rounded-full flex items-center gap-2  hidden lg:flex w-96 text-black'>
        <input type='text' className='grow' placeholder='Search' />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          fill='currentColor'
          className='w-4 h-4 opacity-70'
        >
          <path
            fillRule='evenodd'
            d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
            clipRule='evenodd'
          />
        </svg>
      </label>

      <div className='navbar-end hidden lg:flex'>
        <ul className='menu menu-horizontal'>
          <li>
            <Link
              className='text-black font-thin hover:bg-transparent hover:text-black hover:font-bold'
              to='/categories'
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              className='text-black font-thin hover:bg-transparent hover:text-black hover:font-bold'
              to='/login'
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
