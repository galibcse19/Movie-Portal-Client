import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const links = <>
     <li><Link to={'/'}>Home</Link></li>
     <li><Link >All Movies</Link></li>
     <li><Link >Add Movie</Link></li>
     <li><Link >My Favorites</Link></li>
     <li><Link >About</Link></li>
     <li><Link to={'/logIn'}>Login</Link></li>
     <li><Link to={'/signUp'}>Register</Link></li>
    </>
    
    return (
        <div>
            <div className=''>
             <div className="navbar bg-black text-white flex justify-between">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        {links}
      </ul>
    </div>
    <div className="hidden lg:block">
      {/* <img className="lg:w-16 w-10 border border-orange-500 rounded" src={logo} alt="Logo" /> */}
      <h2 className='text-2xl font-bold mr-10'><span className='text-red-600'>MOVIE</span>PORTAL</h2>
    </div>
  </div>

  {/* Image for phone and tablet on the right */}
  <div className="navbar-end lg:hidden">
    {/* <img className="w-10 border border-orange-500 rounded" src={logo} alt="Logo" /> */}
    <h2 className="text-2xl font-bold ml-10"><span className='text-red-600 '>MOVIE</span>PORTAL</h2>
  </div>

  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">{links}</ul>
  </div>
</div>

      </div>
        </div>
    );
};

export default Nav;