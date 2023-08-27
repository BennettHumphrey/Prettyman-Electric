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
import Modal from './Projects/Modal'


const Home = () => {
  
  return (
    <div>
        <Nav  />
        <Header  />
        <PhoneNumbers  />
        <AboutUs  />
        <RequestQuote  />
        <Reviews  />
        <Footer  />
        {/* <AltFooter  /> */}
    </div>
  )
}

export default Home