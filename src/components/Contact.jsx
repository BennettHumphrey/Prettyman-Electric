import React from 'react'
import Footer from './Footer'
import Nav from './Nav/Nav'
import { contactInfo } from '../resources/data'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetchData } from '../functions/fetchData'

const Contact = ({ colors, contactInfo, navOptions }) => {

  const [hoursOfOperation, setHoursOfOperation] = useState([{hours: "Loading"}, {hours: "Loading"}])

  useEffect(() => {
    fetchData(setHoursOfOperation, '*[_type == "hoursOfOperation"]');
  }, []);

  // useEffect(() => {
  //   console.log(hoursOfOperation);
  // }, [hoursOfOperation]);

// console.log(`accent in Contact.jsx: ${colors?.accent}`)

  // const colorTest = `hover:text-[${colors?.accent}]`


  




  return (
    <>
      <Nav colors={colors} contactInfo={contactInfo} navOptions={navOptions} />
      <div className='
      bg-[url(/imgs/Scaffolding-1200.webp)] 
      h-full w-full bg-cover pb-10 sm:pb-16' 
      style={{color: colors?.textDark}}>
        <div className='w-[95%] sm:w-[80vw] sm:p-12 max-w-[1000px] bg-white/80 relative m-auto
          p-4 top-8 pb-16 rounded-md' >
            <h2 className='text-center text-3xl'>Contact Us</h2>
            <div className='flex flex-col justify-center md:flex-row md:justify-evenly'>
                <div className='flex justify-center flex-col gap-y-4 text-center mb-8'>
                    <div className='flex flex-col justify-center'>
                        <form className='flex flex-col justify-center' id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/f/mvolylne" method="post">
                          <fieldset className='flex flex-col justify-center text-center gap-y-2' id="fs-frm-inputs">
                            <label htmlFor="full-name">Full Name</label>
                            <input className='p-1 border-black border rounded-sm' type="text" name="name" id="full-name" placeholder="First and Last" required=""/>
                            <label htmlFor="email-address">Email Address</label>
                            <input className='p-1 border-black border rounded-sm' type="email" name="_replyto" id="email-address" placeholder="email@domain.com" required=""/>
                            <label htmlFor="message">Message</label>
                            <textarea className='p-1 border-black border rounded-sm' rows="5" name="message" id="message" placeholder="What can we do for you?" required=""/>
                            <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
                          </fieldset>
                          <input style={{color: colors?.textLight, backgroundColor: colors?.accent}}
                          className='my-8 mx-auto w-[80vw] max-w-[240px] h-14 
                          lg:my-14 p-2 mb-8 text-center no-underline duration-500 hover:scale-110 hover:cursor-pointer hover:rounded-xl' 
                          type="submit" value="Submit"/>
                        </form>
                      </div>
                </div>
                <div className='flex flex-col justify-center gap-y-2 text-center mb-16'>
                    <h3 className='underline mt-2 mb-4' >Where to find us</h3>
                    <h4>Phone</h4>
                    {/* <p>Office: 250-555-5555</p>
                    <p>Cell: 250-555-5556</p> */}
                    <p>{contactInfo.phone}</p>
                    <h4>Email</h4>
                    <p>{contactInfo.email}</p>
                    <h3 className={`underline mt-2`} >Hours of Operation</h3>
                    {/* Hours map */}
                    {hoursOfOperation.map((data, i) => (
                      <p key={i} >{data.hours}</p>
                    ))}

                </div>
            </div>
            
            <div style={{color: colors?.textLight, backgroundColor: colors?.accent}} 
            className='hover:cursor-pointer w-[80vw] max-w-[240px] h-14 my-2 mx-auto p-2 mb-8 text-center no-underline duration-500 hover:scale-110 hover:rounded-xl'>
              <div  >
                  <p className='text-xs m-auto'>CALL NOW FOR A FREE QUOTE</p>
                  <h5 className='text-xl'>{contactInfo.phone}</h5>
              </div>
            </div>
        </div>
    </div>
    <Footer colors={colors} contactInfo={contactInfo} />
  </>
  )
}

export default Contact