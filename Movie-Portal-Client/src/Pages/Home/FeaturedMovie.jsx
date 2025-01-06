import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturedMovie = ({data}) => {
    console.log(data)
    const {title,photo,summary,_id} =data;
    const navigate = useNavigate();

    const handleDetails = () => {
        navigate(`/movieDetails/${_id}`, { state: { data } }); 
    };
    return (
        <div>
           <div className="card glass lg:w-72 md:w-92 w-76">
             <div className='p-4'>
                <img className='w-full h-40 border rounded-lg' src={photo} alt="" />
                 <h2 className='my-2 font-bold text-2xl'>Title: {title}</h2>
                 <p> <span className='my-1 font-bold'>Description: </span>{summary}</p>
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

export default FeaturedMovie;