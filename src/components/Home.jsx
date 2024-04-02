import React from 'react'
import AboutUs from './AboutUs'
import Header from './Header'
import Nav from './Nav/Nav'
import Reviews from './Reviews'
// import PhoneNumbers from './PhoneNumbers'
import RequestQuote from './RequestQuote'
import Footer from './Footer'


const Home = ({ colors, contactInfo, navOptions }) => {
  



  return (
    <div>
        <Nav colors={colors} contactInfo = {contactInfo} navOptions={navOptions} />
        <Header colors={colors}  />
        {/* <PhoneNumbers  /> */}
        <AboutUs colors={colors}  />
        <RequestQuote colors={colors}  />
        <Reviews colors={colors}  />
        <Footer colors={colors} contactInfo = {contactInfo} />
    </div>
  )
}

export default Home