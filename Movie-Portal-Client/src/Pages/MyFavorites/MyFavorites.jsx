import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Favorite from './Favorite';

const MyFavorites = () => {
    const [favMovieData, setFavMovieData] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(()=>{
        fetch('https://movie-portal-server-snowy.vercel.app/favMovie')
        .then(res => res.json())
        .then(data => setFavMovieData(data))
    },[])
    // console.log(favMovieData.email);
    // console.log(user.email);
    const userFavorites = favMovieData.filter(favMovie => favMovie.email === user.email);
    return (
        <div className="my-favorites-container">
            <h1 className="text-2xl font-bold text-center my-4">My Favorite Movies</h1>
            {userFavorites.length === 0 ? (
                <p className="text-center my-4 py-40">You have no favorite movies yet.</p>
            ) : (
                 <div className='lg:mx-40 md:mx-10 mx-2 mt-16 mb-32 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                    {
                        userFavorites.map(data => <Favorite data={data} key={data._id}></Favorite>)
                    }
                 </div>   
            )
            }
        </div>
    );
};

export default MyFavorites;