import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Favorite from './Favorite';
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';

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
    const handleDeleteFav = (_id)=>{
            console.log(_id)
            fetch(`https://movie-portal-server-snowy.vercel.app/favMovies/${_id}`,{
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

    const userFavorites = favMovieData.filter(favMovie => favMovie.email === user.email);
    return (
        <div className="my-favorites-container">
            <h1 className="text-2xl font-bold text-center my-4">My Favorite Movies</h1>
            {userFavorites.length === 0 ? (
                <p className="text-center my-4 py-40">You have no favorite movies yet.</p>
            ) : (
                //  <div className='lg:mx-40 md:mx-10 mx-2 mt-16 mb-32 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                //     {
                //         userFavorites.map(data => <Favorite data={data} key={data._id}></Favorite>)
                //     }
                //  </div> 
                 <div className="overflow-x-auto my-5 lg:mx-40 md:mx-10 mx-2 mt-16 mb-32">
                 <table className="table-auto w-full border border-gray-300 text-left">
                   <thead className="bg-gray-800 text-white">
                     <tr>
                       <th className="px-4 py-2">Title</th>
                       <th className="px-4 py-2">Photo</th>
                       <th className="px-4 py-2">Summary</th>
                       <th className="px-4 py-2">ReleasedYear</th>
                       <th className="px-4 py-2">Rating</th>
                       <th className="px-4 py-2">Delete</th>
                        
                     </tr>
                   </thead>
                   <tbody>
                     {userFavorites.map((item) => (
                       <tr key={item._id} className="odd:bg-white even:bg-gray-100">
                         <td className="border px-4 py-2">{item.title}</td>
                         <td className="border px-4 py-2">
                           <img
                             src={item.photo}
                             alt={item.title}
                             className="w-16 h-16 object-cover rounded"
                           />
                         </td>
                         <td className="border px-4 py-2">{item.summary}</td>
                         <td className="border px-4 py-2">{item.releasedYear}</td>
                         <td className="border px-4 py-2">{item.rating}</td>
                         <td className="border px-4 py-2">
                            
                         <button onClick={()=>handleDeleteFav(item._id)}
                                className="text-red-600 text-2xl"
                                >
                                <MdDelete />
                        </button>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>  
            )
            }
        </div>
    );
};

export default MyFavorites;