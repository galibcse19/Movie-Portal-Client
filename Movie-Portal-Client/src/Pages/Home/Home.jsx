import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import FeaturedMovies from './FeaturedMovies';
import ExtraSection1 from './ExtraSection1';
import ExtraSection2 from './ExtraSection2';

const Home = () => {
  // Get the saved theme from localStorage or default to 'light'
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(savedTheme);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save theme to localStorage
  };

  // Apply the theme to the body element
  useEffect(() => {
    document.body.className = theme; // Set the body class to either 'light' or 'dark'
  }, [theme]);

  return (
    <div className='bg-white dark:bg-gray-800 text-black dark:text-white'>
      {/* Theme Toggle Button */}
      <input onClick={toggleTheme} type="checkbox" className="toggle toggle-error fixed lg:top-6 lg:ml-48 top-5 ml-12" defaultChecked />
      {/* <button
        onClick={toggleTheme}
        className="p-2 bg-gray-800 text-white rounded-md fixed top-4 right-4 z-10"
      >
        {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
      </button> */}

      {/* Your Content */}
      <Banner />
      <FeaturedMovies />
      <ExtraSection1 />
      <ExtraSection2 />
    </div>
  );
};

export default Home;
