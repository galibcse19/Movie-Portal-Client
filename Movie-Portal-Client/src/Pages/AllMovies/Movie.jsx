import React from 'react';
import { useNavigate } from 'react-router-dom';

const Movie = ({data}) => {
    const {title,dutation,genre,photo,rating,releasedYear,_id} =data;
    const navigate = useNavigate();

    const handleDetails = () => {
        navigate(`/movieDetails/${_id}`, { state: { data } }); 
    };
    return (
        <div>
           <div className="card glass lg:w-96 md:w-84 w-76">
             <div className='p-4'>
                <img className='w-full h-48 border rounded-lg' src={photo} alt="" />
                 <h2 className='my-2 font-bold text-2xl'>Title: {title}</h2>
                 <p>Genre: <span className='font-bold my-1'>{genre}</span></p>
                 <p>Duration: <span className='font-bold my-1'>{dutation}min</span></p>
                 <p>Release Year: <span className='font-bold my-1'>{releasedYear}</span></p>
                 <p>Rating: <span className='font-bold my-1'>{rating}</span></p>
             </div>
                <button onClick={handleDetails}
                    className="w-full font-bold lg:p-4 md:p-4 p-2 bg-green-900 text-white rounded-md hover:bg-red-500 transition duration-200"
                    >
                    See Details
               </button>
           </div>
        </div>
    );
};

export default Movie;