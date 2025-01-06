import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { useNavigate } from 'react-router-dom';
import FeaturedMovie from './FeaturedMovie';

const FeaturedMovies = () => {
    const { movieData } = useContext(AuthContext);
    const navigate = useNavigate();

    // Sort movies by rating in descending order and take the top 6
    const featuredMovies = movieData
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6);

    // Navigate to All Movies page
    const handleSeeAllMovies = () => {
        navigate('/allMovies');
    };

    return (
        <div className="my-12">
            {/* Title */}
            <h2 className="font-bold lg:text-4xl md:text-3xl text-2xl text-center mb-6">
                Featured Movies
            </h2>
            <div className='lg:px-40 mb-6'>
                <hr />
            </div>
            {/* Movies Grid */}
            <div className="lg:mx-40 md:mx-10 mx-2 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                {
                  featuredMovies.map(data =><FeaturedMovie data={data} key={data._id}></FeaturedMovie>)
                }
            </div>
            
            {/* See All Movies Button */}
            <div className="text-center mt-10">
                <button
                    onClick={handleSeeAllMovies}
                    className="px-6 py-2 font-bold  bg-green-900 text-white rounded-md hover:bg-red-500transition duration-200"
                >
                    See All Movies
                </button>
            </div>
        </div>
    );
};

export default FeaturedMovies;
