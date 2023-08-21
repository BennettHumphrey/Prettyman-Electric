import React from 'react'
import { headerSlides } from '../resources/data';
import Carousel from './Carousel/Carousel';

const Header = () => {

  const carouselOptions = {
      autoplay: true,
    }

  return (
    <div>
      <Carousel data={headerSlides} options={carouselOptions} />
    </div>
  )
}

export default Header