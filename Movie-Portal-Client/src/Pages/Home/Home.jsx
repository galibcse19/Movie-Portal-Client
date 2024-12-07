import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import FeaturedMovies from './FeaturedMovies';
import ExtraSection1 from './ExtraSection1';
import ExtraSection2 from './ExtraSection2';

const Home = () => {
 
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(savedTheme);
 
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); 
  };

  
  useEffect(() => {
    document.body.className = theme;  
  }, [theme]);

  return (
    <div className='bg-white dark:bg-gray-800 text-black dark:text-white'>
      {/* Theme Toggle Button */}
      <input onClick={toggleTheme} type="checkbox" className="toggle toggle-error fixed lg:top-6 lg:ml-48 top-5 ml-12" defaultChecked />
       
      <Banner />
      <FeaturedMovies />
      <ExtraSection1 />
      <ExtraSection2 />
    </div>
  );
};

export default Home;
