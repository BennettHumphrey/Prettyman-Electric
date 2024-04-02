import React from 'react'
import { headerSlides } from '../resources/data';
import Carousel from './Carousel/Carousel';
import defaultStyles from './Carousel/Carousel.module.css';

const Header = ({ colors }) => {
  




  const carouselOptions = {
      autoplay: true,
      autoplayDelay: 8,
    }

  return (
    <div>
      {/* This carousel is my custom component, the one in the reviews component is from react-responsive-carousel */}
       <Carousel colors={colors} data={headerSlides} options={carouselOptions} styles={defaultStyles} /> 
    </div>
  )
}

export default Header
