import React from 'react'
import AboutUs from './AboutUs'
import Header from './Header'
import Nav from './Nav/Nav'
import Reviews from './Reviews'
import PhoneNumbers from './PhoneNumbers'
import RequestQuote from './RequestQuote'
import Footer from './Footer'


const Home = () => {
  



  return (
    <div>
        <Nav  />
        <Header  />
        {/* <PhoneNumbers  /> */}
        <AboutUs  />
        <RequestQuote  />
        <Reviews  />
        <Footer />
    </div>
  )
}

export default Home