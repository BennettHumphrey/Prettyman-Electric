import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { fetchData } from '../functions/fetchData';
// import { reviews } from '../resources/data';


const Reviews = () => {

  const [reviews, setReviews] = useState([{name: "Loading"}, {name: "Loading"}])

  useEffect(() => {
    fetchData(setReviews, '*[_type == "reviews"]');
  }, []);

  // useEffect(() => {
  //   console.log(reviews);
  // }, [reviews]);


  return (
    <div className='
    bg-[url(/imgs/City-Skyline-1200.webp)] 
    bg-cover bg-center h-[550px]' >
      <div className='bg-[#00000080] h-full w-full z-10 pb-12' >
        <h2 className='text-center text-2xl text-text-light mx-8 mb-8 pt-14' >Reviews</h2>
        <div className='bg-white w-1/4 h-px m-auto mb-5' />
        {reviews && <Carousel 
        key={reviews.length}
        showThumbs={false}
        showStatus={false}
        autoplay={true}
        infiniteLoop={true}
        className='max-w-[500px] relative m-auto'>
          {reviews.map((r, i) => (
            <div key={i} 
            className='w-full text-text-light py-6 px-10 leading-6'>
              <p>{r.review}</p>
              <p className='pb-4 pt-6' >{r.name}</p>
            </div>
          ))}
        </Carousel>}
      </div>
    </div>
  )
}

export default Reviews