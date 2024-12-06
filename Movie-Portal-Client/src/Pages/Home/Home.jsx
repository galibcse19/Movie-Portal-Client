import React from 'react';
import Banner from './Banner';
import FeaturedMovies from './FeaturedMovies';
import ExtraSection1 from './ExtraSection1';
import ExtraSection2 from './ExtraSection2';

const Home = () => {
    
    return (
        <div>
             <Banner></Banner>
             <FeaturedMovies></FeaturedMovies>
             <ExtraSection1></ExtraSection1>
             <ExtraSection2></ExtraSection2>
        </div>
    );
};

export default Home;