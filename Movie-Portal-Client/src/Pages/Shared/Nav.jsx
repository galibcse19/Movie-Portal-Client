import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { toast } from 'react-toastify';

const Nav = () => {
  const {logOut,user} = useContext(AuthContext)
  const handleLogOut = () =>{
    logOut()
    
    .then(()=>{
      toast.warn('Successfully LogOut.',{position: "top-center"});
    })
    .catch(error =>console.log(error))
}
    const links = <>
     <li><Link to={'/'}>Home</Link></li>
     <li><Link to={'/allMovies'}>All Movies</Link></li>
     <li><Link to={'/about'}>About</Link></li>
     
     {
        user ? <>
          <li><Link to={'/addMovie'}>Add Movie</Link></li>
          <li><Link to={'/myFavorites'}>My Favorites</Link></li>
         <li>
         <div className="relative group">
              {/* <Link to={'/userProfile'}> */}
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                  {user && user?.email ? (
                    <img
                      src={user?.photoURL}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-300 text-gray-700 font-bold">
                      ?
                    </div>
                  )}
                </div>
              {/* </Link> */}
              {user && (
                <span className="absolute left-1/2  top-12 bg-gray-800 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {user.displayName}
                </span>
              )}
            </div>
         </li>
         <button onClick={handleLogOut} className='btn btn-ghost'>LOGOUT</button>
        </> : <>
        <li><Link to={'/logIn'}>Login</Link></li>
        <li><Link to={'/signUp'}>Register</Link></li>
        </>
     }
    </>
    
    return (
      <div className=' sticky top-0 z-50'>
      <div className="navbar bg-black text-white lg:px-32">
       <div className="navbar-start ">
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
    );
};

export default Nav;