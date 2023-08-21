import React from 'react'
import { reviews } from '../resources/data';
import Carousel from './Carousel/Carousel';


const Reviews = () => {

  // const carouselOptions = {
  //   autoplay: true,
  // }

  return (
    <div className='
    bg-[url(./resources/imgs/City-Skyline-600.webp)] 
    md:bg-[url(./resources/imgs/City-Skyline-900.webp)]
    lg:bg-[url(./resources/imgs/City-Skyline-1200.webp)]
    xl:bg-[url(./resources/imgs/City-Skyline-1800.webp)]
    bg-cover bg-center h-[700px]' >
      <div className='bg-[#00000080] h-full w-full z-10 pb-12' >
        <svg className='text-main inline z-30 h-[30vw] w-full max-h-[150px]' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path fill="currentColor" d="M0 0 L100 0 L100 2 L0 100 Z"></path>
        </svg>
        <h2 className='text-center text-2xl text-text-light m-8 pt-14' >Reviews</h2>
        <div className='bg-white w-1/4 h-px m-auto mb-5' />
         {/* <Carousel data={reviews} options={carouselOptions} /> */}
      </div>
    </div>
  )
}

export default Reviews