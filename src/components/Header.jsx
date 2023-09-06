import React from 'react'
import { headerSlides } from '../resources/data';
import Carousel from './Carousel/Carousel';
import defaultStyles from './Carousel/Carousel.module.css';

const Header = () => {

  const carouselOptions = {
      autoplay: true,
      autoplayDelay: 8,
      line: true,
      img: true,
    }

  return (
    <div>
      <Carousel data={headerSlides} options={carouselOptions} styles={defaultStyles} />
    </div>
  )
}

export default Header