import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Movie from './Movie';

const AllMovies = () => {
    const {movieData,loading}= useContext(AuthContext);
     
    return (
        <div>
            <h2>{loading}</h2>
            <div className='lg:mx-40 md:mx-10 mx-2 mt-16 mb-32 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    movieData.map(data => <Movie data={data} key={data._id}></Movie> )
                }
            </div>
        </div>
    );
};

export default AllMovies;