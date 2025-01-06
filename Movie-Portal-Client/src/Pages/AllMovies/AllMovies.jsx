import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Movie from './Movie';

const AllMovies = () => {
    const { movieData, loading } = useContext(AuthContext);
    const [searchQuery, setSearchQuery] = useState(''); 
    const [filteredMovies, setFilteredMovies] = useState(movieData || []); 

    // Handle search functionality
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        // Filter movie data based on title
        const filtered = movieData.filter(movie =>
            movie.title.toLowerCase().includes(query)
        );
        setFilteredMovies(filtered);
    };

    // Update filteredMovies when movieData changes (e.g., due to loading completion)
    React.useEffect(() => {
        setFilteredMovies(movieData);
    }, [movieData]);

    return (
        <div className=''>
            {/* Loading State */}
            {loading && <span className="loading loading-spinner text-primary"></span>}

            {/* Search Bar */}
            <div className="text-center my-6">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search movies by title..."
                    className="p-2 border border-gray-300 rounded-md w-1/2"
                />
            </div>

            {/* Movies Grid */}
            <div className="lg:mx-40 md:mx-10 mx-2 mt-8 mb-32 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map(data => <Movie data={data} key={data._id} />)
                ) : (
                    <p className="text-center col-span-full">No movies found.</p>
                )}
            </div>
        </div>
    );
};

export default AllMovies;
