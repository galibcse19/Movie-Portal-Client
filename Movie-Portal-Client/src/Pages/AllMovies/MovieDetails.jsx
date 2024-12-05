import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Providers/AuthProviders';

const MovieDetails = () => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    const { data } = location.state; // Access passed data

    const { title, dutation, genre, photo, rating, summary, releasedYear } = data;

    const handleDelete =(_id)=>{
        console.log(_id);
        fetch(`http://localhost:5000/movies/${_id}`,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                toast.error('Delete successfully',{position: "top-center"})
            }
        })
    }
    const handleFavorite =(data)=>{
        const email = user.email;
        const title = data.title;
        const dutation = data.dutation;
        const genre = data.genre;
        const photo = data.photo;
        const rating = data.rating;
        const summary = data.summary;
        const releasedYear = data.releasedYear;
        const FavMovieData = {title,email,dutation,summary,rating,genre,releasedYear,photo}
        console.log(FavMovieData);

        fetch('http://localhost:5000/favMovie',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(FavMovieData)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                toast.success('Data Submit sucessfull',{position: "top-center"});
            }
        })
        // .catch(error => console.log(error.message));
        .catch(error =>{
            setError(error.message)
        });
    }

    return (
        <div>
            <div className="p-6">
            <div className="card glass lg:w-2/3 md:w-3/4 w-full mx-auto p-6">
                <img className="w-full h-full border rounded-lg mb-4" src={photo} alt="" />
                <h2 className='my-2 font-bold text-2xl'>Title: {title}</h2>
                 <p>Genre: <span className='font-bold my-1'>{genre}</span></p>
                 <p>Duration: <span className='font-bold my-1'>{dutation}min</span></p>
                 <p>Release Year: <span className='font-bold my-1'>{releasedYear}</span></p>
                 <p>Rating: <span className='font-bold my-1'>{rating}</span></p>
                <p className="text-md mb-4">Summary: {summary}</p>
                 <div className='grid grid-cols-2 gap-5 my-2'>
                    <div>
                        <Link to={'/allMovies'}> 
                            <button onClick={()=>handleDelete(data._id)} 
                            className="w-full font-bold lg:p-4 md:p-4 p-2 bg-green-900 text-white rounded-md hover:bg-red-500 transition duration-200"
                            >
                            Delete Movie</button>
                        </Link>
                    </div>
                    <div>
                    <button onClick={()=>handleFavorite(data)}
                            className="w-full font-bold lg:p-4 md:p-4 p-2 bg-green-900 text-white rounded-md hover:bg-red-500 transition duration-200"
                            >
                            Add to Favorite</button>
                    </div>

                 </div>
                <Link to={'/allMovies'}> <button 
                    className="w-full font-bold lg:p-4 md:p-4 p-2 bg-green-900 text-white rounded-md hover:bg-red-500 transition duration-200"
                    >
                    All Movies
               </button></Link>
            </div>
           
          </div>
        </div>
    );
};

export default MovieDetails;