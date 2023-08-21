import React from 'react'
import AboutUs from './AboutUs'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav/Nav'
import Reviews from './Reviews'
import WhatWeDo from './WhatWeDo'
import { reviews } from '../resources/data'


const Home = () => {
  
  return (
    <>
        <Nav  />
        <Header  />
        <WhatWeDo  />
        <AboutUs  />
        {reviews.length > 0 ?
          <Reviews  /> : null}
        <Footer  />
    </>
  )
}

export default Home