import React from 'react'
import { reviews } from '../resources/data';
import Carousel from './Carousel/Carousel';
import reviewStyles from './Carousel/ReviewCarousel.module.css';


const Reviews = () => {

  const carouselOptions = {
    autoplay: true,
    autoplayDelay: 6,
    line: false,
  }

  return (
    <div className='mb-8 bg-main' >
      <h2 className='text-center text-2xl m-8 mt-0 pt-14' >
      Reviews
      </h2>
      <div class="bg-line w-[30vw] h-px m-auto mb-8"/>
      <div>
        <Carousel data={reviews} options={carouselOptions} styles={reviewStyles} />
      </div>
      <a href="" className='text-inherit'>
        <button class="text-text-light bg-contact w-[85%] max-w-[600px]
                          h-12 flex justify-center items-center my-12 mx-auto">
        READ MORE REVIEWS ON REVIEW WEBSITE
        </button>
      </a>
    </div>
  )
}

export default Reviews