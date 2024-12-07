import React, { useEffect } from 'react';
import img1 from '../../assets/mp1.png'
import img2 from '../../assets/mp2.png'
import img3 from '../../assets/mp3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


const ExtraSection1 = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true, // Whether animation should happen only once
        });
      }, []);
    return (
        <div className='lg:px-40 px-2 pb-2 mx-auto'>
            <h2 className='font-bold text-center lg:text-4xl md:text-3xl text-xl my-6'>Finding Movie Playlist</h2>
            <hr />
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 my-6 '>
                <div data-aos="fade-right">
                    <img  className='rounded-lg' src={img1} alt="" />
                </div>
                <div data-aos="fade-left" className='ml-4'>
                     <div className='flex'>
                        <img className='w-32 h-24 rounded-lg' src={img1} alt="" />
                        <div className='pl-4'>
                            <p><span className='font-bold'>Horor:</span> Watch free horror movies and TV shows online in HD on any device.</p>
                            <Link to={'/allMovies'}>
                            <button
                                    className="px-4 py-2  mt-2 font-bold bg-green-900 text-white rounded-md hover:bg-red-500 transition duration-200"
                                    >
                                    Details
                            </button>
                            </Link>
                        </div>
                     </div>
                     <div  className='flex my-6'>
                        <img className='w-32 h-24 rounded-lg' src={img2} alt="" />
                        <div className='pl-4'>
                            <p><span className='font-bold'>Advanture:</span> Aliens, robots, gangsters make for one amped-up viewing experience.</p>
                            <Link to={'/allMovies'}>
                            <button
                                    className="px-4 py-2  mt-2 font-bold bg-green-900 text-white rounded-md hover:bg-red-500 transition duration-200"
                                    >
                                    Details
                            </button>
                            </Link>
                        </div>
                     </div>
                     <div className='flex'>
                        <img className='w-32 h-24 rounded-lg' src={img3} alt="" />
                        <div className='pl-4'>
                            <p><span className='font-bold'>Crime: </span>Rotten Tomatoes is the most trusted measurement of quality for Movies & TV.</p>
                            <Link to={'/allMovies'}>
                            <button
                                    className="px-4 py-2  mt-2 font-bold bg-green-900 text-white rounded-md hover:bg-red-500 transition duration-200"
                                    >
                                    Details
                            </button>
                            </Link>
                        </div>
                     </div>
                      
                </div>
            </div>
        </div>
    );
};

export default ExtraSection1;