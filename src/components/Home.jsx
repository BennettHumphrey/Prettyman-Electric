import React from 'react'
import AboutUs from './AboutUs'
import AltFooter from './AltFooter'
import Header from './Header'
import Nav from './Nav/Nav'
import Reviews from './Reviews'
import { reviews } from '../resources/data'
import PhoneNumbers from './PhoneNumbers'
import RequestQuote from './RequestQuote'
import Footer from './Footer'


const Home = () => {
  
  return (
    <>
        <Nav  />
        <Header  />
        <PhoneNumbers  />
        <AboutUs  />
        <RequestQuote  />
        <Reviews  />
        <Footer  />
        {/* <AltFooter  /> */}
    </>
  )
}

export default Home