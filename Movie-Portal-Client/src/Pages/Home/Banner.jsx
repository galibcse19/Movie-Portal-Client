import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react';

import img1 from '../../assets/mp1.png'
import img2 from '../../assets/mp2.png'
import img3 from '../../assets/mp3.png'
import img4 from '../../assets/mp4.png'

const Banner = () => {
    return (
        <div className='lg:px-40 pb-2 mx-auto '>
             <Carousel>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;