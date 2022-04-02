import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MovieCarousal = () => {
  return (
    <div className="mt-0 lg:mt-8">
       <Carousel 
                 className="bg-black h-48 lg:mx-36 lg:h-96"
                 infiniteLoop={true}
                 autoPlay={true}
                 useKeyboardArrows 
                 internal={500}
                 showArrows={false}
                 showThumbs={false}
                 showStatus={false}
                 swipeable={true}> 
          <div className="">
            <div className="h-48 lg:h-96 w-full bg-red-900"></div>
          </div>
          <div className="">
            <div className="h-48 lg:h-96 w-full bg-red-300"></div>
          </div>
          <div className="">
            <div className="h-48 lg:h-96 w-full bg-blue-900"></div>
          </div>
          <div className="">
            <div className="h-48 lg:h-96 w-full bg-green-900"></div>
          </div>
          <div className="">
            <div className="h-48 lg:h-96 w-full bg-purple-900"></div>
          </div>
       </Carousel>
    </div>
  )
}

export default MovieCarousal