import React from 'react';
import image from '../../assets/mp4.png'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
       
      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-40 mt-12 space-y-8">
        {/* Section 1 */}
        <section>
          <h2 className="text-3xl font-semibold text-center">Welcome to Movie Portal</h2>
          <p className="text-lg text-center mt-4">
            At MovieVerse, we are passionate about movies and bringing the magic of cinema to everyone. 
            Whether you're a casual movie-goer or a film enthusiast, this is your go-to platform for discovering, rating, and celebrating movies from all genres.
          </p>
        </section>

        {/* Section 2 */}
        <section className="grid lg:grid-cols-2 gap-8 items-center">
          <img
            src={image}
            alt="Cinema"
            className="rounded-lg shadow-lg"
          />
          <div className='my-4'>
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="mt-4">
            <p>Our mission is to connect people through their shared love of films. From timeless classics that have stood the test of time to the latest blockbuster releases. Movies are more than just entertainment and we are dedicated to celebrating this art form.</p><br />

            <p>At the heart of our mission is the belief that films have the power to bring people closer.By offering a diverse library of films from all genres, we ensure that every viewer can find something that resonates with them.</p> <br />

            <p>Our platform goes beyond just listing movies.We encourage users to share their thoughts through reviews, engage in discussions about their favorite genres, and discover new movies based on personalized recommendations.</p>
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h3 className="text-2xl font-semibold text-center">Why Choose Us?</h3>
          <div className="mt-6 space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 text-gray-400 p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-bold">Vast Library</h4>
              <p className="text-gray-400 mt-2">Explore a wide range of movies from all genres, including Drama, Comedy, Adventure, Horror, and more.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-bold text-gray-400">Community Reviews</h4>
              <p className="text-gray-400 mt-2">Read and write reviews to share your thoughts and connect with like-minded movie enthusiasts.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-bold text-gray-400">Personalized Recommendations</h4>
              <p className="text-gray-400 mt-2">Get tailored suggestions based on your ratings and viewing history.</p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <h3 className="text-2xl font-semibold text-center">Join Us</h3>
          <p className="text-lg text-center mt-4">
            Be part of a community that celebrates the joy of movies. Sign up now and start your cinematic journey with MovieVerse!
          </p>
          <div className="flex justify-center my-10">
            <Link to={'/allMovies'}>
            <button className="bg-green-900 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-200">
              Get Started
            </button></Link>          
            </div>
        </section>
      </div>
    </div>
  );
};

export default About;
