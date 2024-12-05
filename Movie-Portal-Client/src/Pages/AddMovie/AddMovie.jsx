import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { toast } from 'react-toastify';

const AddMovie = () => {
    const {user} = useContext(AuthContext);
    const handleSubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const email = form.email.value;
        const dutation = form.dutation.value;
        const summary = form.summary.value;
        const rating = form.rating.value;
        const genre = form.genre.value;
        const releasedYear = form.releasedYear.value;
        const photo = form.photo.value;
         
    
        // Validate movie title using the outer function
        if (!isValidMovieTitle(title)) {
            toast.warn('Movie title must not be empty and should have at least 2 characters.',{position: "top-center"});
            return;
        } 
        if (!isValidImageURL(photo)) {
            toast.warn('Please enter a valid image link.',{position: "top-center"});
            return;
        }
        if (!isValidReleaseYear(releasedYear)) {
            toast.warn('Please select a valid release year.',{position: "top-center"});
            return;
        }
        if (!isValidDuration(dutation)) {
            toast.warn('Duration must be greater than 60 minutes.',{position: "top-center"});
            return;
        }
        if (!isValidSummary(summary)) {
            toast.warn('Summary must not be empty and should have at least 10 characters.',{position: "top-center"});
            return;
        }
        const movieData = {title,email,dutation,summary,rating,genre,releasedYear,photo}
        console.log(movieData)

    }
    function isValidMovieTitle(title) {
        if (!title || title.trim().length < 2) {
            return false;  
        }
        return true;
    }
    function isValidDuration(duration) {
        if (!duration || duration <= 60) {
            return false; 
        }
        return true;
    }
    function isValidReleaseYear(year) {
        return year && year.trim() !== "";  
    }
    function isValidImageURL(url) {
        const urlPattern = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;
        return urlPattern.test(url);
    }
    function isValidSummary(summary) {
        if (!summary || summary.trim().length < 10) {
            return false;
        }
        return true;
    }
    
    return (
        <div>
            <div className="relative bg-cover bg-center pb-10">
            <div className="absolute inset-0 bg-green-900" />
                {/* Upper Section with Glassmorphism */}
                <div className="backdrop-blur-md bg-white bg-opacity-30 border border-white border-opacity-30 rounded-lg p-4 w-full shadow-lg text-center">
                    <h1 className="text-xl md:text-2xl font-bold text-white">Here - Add Movie</h1>
                </div>
                <form  onSubmit={handleSubmit} className="grid lg:grid-cols-2 grid-cols-1 mt-6 text-black backdrop-blur-md bg-white bg-opacity-30 border border-white border-opacity-30 rounded-lg p-6 lg:w-2/3 md:w-2/3 w-full mx-auto shadow-lg text-center">
                    <div>
                           <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-white">Movie Title:</span>
                                </div>
                                <input required name="title" type="text" placeholder="Enter Movie Title" className="input input-bordered lg:w-[90%] w-full"/>
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-white">Email:</span>
                                </div>
                                <input required type="email" name="email"  defaultValue={user.email} disabled  className="input input-bordered lg:w-[90%] w-full" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-white">Duration:</span>
                                </div>
                                <input required type="number" name="dutation"   placeholder="Enter Movie Durtion"  className="input input-bordered lg:w-[90%] w-full" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-white">Summary</span>
                                </div>
                                <input required name="summary" type="text"   placeholder="Enter Movie summary"  className="input input-bordered lg:w-[90%] w-full" />
                            </label>
                    </div>
                    <div>
                           <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-white">Rating</span>
                                    </div>
                                    <select name="rating" required className="select select-bordered lg:w-[90%] w-full">
                                        <option>1</option>
                                        <option>2</option>
                                        <option selected>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                            </label>
                            <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-white">Genre</span>
                                    </div>
                                    <select name="genre" required className="select select-bordered lg:w-[90%] w-full">
                                        <option>comedy</option>
                                        <option>drama</option>
                                        <option>horor</option>
                                        <option selected>Adventure</option>
                                        <option>Fiction</option>
                                    </select>
                            </label>
                            <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-white">Relesed Year:</span>
                                    </div>
                                    <select name="releasedYear" required className="select select-bordered lg:w-[90%] w-full">
                                        <option selected>2024</option>
                                        <option>2023</option>
                                        <option>2022</option>
                                        <option>2021</option>
                                    </select>
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-white">Poster:</span>
                                </div>
                                <input required name="photo" type="text"   placeholder="Enter Poster PhotoURL"  className="input input-bordered lg:w-[90%] w-full" />
                            </label>
                            
                    </div>
                    <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-white">Now Submit</span>
                                </div>
                                <button
                                type="submit"
                                className="font-bold p-3 bg-green-900 text-white rounded-md hover:bg-red-500 transition duration-200 lg:w-[90%]"
                                >
                                Add Movie
                            </button>
                    </label>
                </form>
                
            </div>
        </div>
    );
};

export default AddMovie;