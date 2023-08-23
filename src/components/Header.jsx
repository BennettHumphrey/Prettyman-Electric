import React from 'react'
import { headerSlides } from '../resources/data';
import Carousel from './Carousel/Carousel';

const Header = () => {

  const carouselOptions = {
      autoplay: true,
      autoplayDelay: 6,
    }

  return (
    <div>
      <Carousel data={headerSlides} options={carouselOptions} />
    </div>
  )
}

export default Header