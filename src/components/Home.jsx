import React from 'react'
import AboutUs from './AboutUs'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav/Nav'
import Reviews from './Reviews'
import { reviews } from '../resources/data'
import PhoneNumbers from './PhoneNumbers'
import RequestQuote from './RequestQuote'


const Home = () => {
  
  return (
    <>
        <Nav  />
        <Header  />
        <PhoneNumbers  />
        <AboutUs  />
        <RequestQuote  />
        {/* <Reviews  /> */}
        {/* <Footer  /> */}
    </>
  )
}

export default Home