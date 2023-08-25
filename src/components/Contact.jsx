import React from 'react'
import Nav from './Nav/Nav'
import SubPageHeader from './SubPageHeader'
import { subPages } from '../resources/data'
import Footer from './Footer'

const Contact = () => {
  return (
    <div className='bg-main' >
        <Nav  />
        <SubPageHeader data={subPages.residential} />
        <h2 className="underline text-center text-3xl">
            Contact Us!
        </h2>
        <iframe title="map location of main office" loading="lazy" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42361.28276418106!2d-123.39424190157489!3d48.4262037872247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f738bddb06171%3A0x38e8f3741ebb48ed!2sVictoria%2C%20BC%2C%20Canada!5e0!3m2!1sen!2spe!4v1665460590550!5m2!1sen!2spe" 
        width="600" height="450" allowFullscreen="" referrerPolicy="no-referrer-when-downgrade"
        className='flex my-8 mx-auto w-[70%] h-[50vw]
                    xsm:h-[35vw]'
        />
        <div className="lg:flex lg:flex-row lg:justify-center w-[100vw]">
            <div className="">
                <div className="my-6 mx-auto xsm:content-start xsm:flex xsm:flex-row
                                md:my-0 md:mx-[10vw] lg:my-6 lg:mx-auto lg:ml-8">
                    <div className="flex flex-col justify-center content-center text-center
                                    my-12 mx-auto gap-8">
                        <h3 className='underline text-2xl' >Where to find us</h3>
                        <h4 className='text-text text-2xl' >Phone</h4>
                        <p>Office: 250-555-5555</p>
                        <p>Cell: 250-555-5556</p>
                        <p>Cell: 250-555-5557</p>
                        <h4 className='text-text text-2xl' >Email</h4>
                        <p>bennetthumphrey98@gmail.com</p>
                    </div>
                    <div className="flex flex-col justify-center content-center text-center
                                    my-12 mx-auto gap-8
                                    xsm:top-0 xsm:relative xsm:leading-[1.8] lg:py-0 lg:px-4">
                        <h3 className='underline text-2xl' >Hours of Operation</h3>
                        <p>Mon - Fri: 8 - 4</p>
                        <p>Sat: 9 - 3</p>
                        <p>Sun: CLOSED</p>
                        <h4 className='text-text text-2xl' >Address</h4>
                        <p>1234 Fake St, Victoria BC V1E 9U4</p>
                    </div>
                </div>
            </div>
      
            <div className="h-px w-[30%] bg-line mt-12 mb-6 mx-auto lg:hidden"/>
                <div className="lg:w-[30vw] relative top-[70px]">
                    <div className="contact-form">
                        <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" 
                                action="https://formspree.io/f/mvolylne" method="post"
                                className='flex flex-col'>
                            <fieldset 
                                className='border-[inherit] flex justify-center flex-col text-center
                                            relative bottom-16 lg:mt-12' 
                                id="fs-frm-inputs">
                                <label className='block mt-2 mb-1' 
                                for="full-name">Full Name</label>
                                <input className='block mt-2 mb-1 bg-[inhertit] border rounded-[3px] my-0 mx-auto
                                                    p-1 leading-[1.3] w-4/5 max-w-[300px]' 
                                type="text" name="name" id="full-name" placeholder="First and Last" required=""/>
                                <label className='block mt-2 mb-1' 
                                for="email-address">Email Address</label>
                                <input className='block mt-2 mb-1 bg-[inhertit] border rounded-[3px] my-0 mx-auto
                                                    p-1 leading-[1.3] w-4/5 max-w-[300px]' 
                                type="email" name="_replyto" id="email-address" placeholder="email@domain.com" required=""/>
                                <label className='block mt-2 mb-1' 
                                for="message">Message</label>
                                <textarea className=' bg-[inhertit] border rounded-[3px] my-0 mx-auto
                                                    p-1 leading-[1.3] w-4/5 max-w-[300px]' 
                                rows="5" name="message" id="message" placeholder="What can we do for you?" required=""></textarea>
                                <input className='block mt-2 mb-1 bg-[inhertit] border rounded-[3px] my-0 mx-auto
                                                    p-1 leading-[1.3] w-4/5 max-w-[300px]' 
                                type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
                            </fieldset>
                            <input className="w-[85%] h-12 text-text-light bg-[#333]
                                              border-0 cursor-[inherit] duration-500 rounded-md
                                              mx-auto my-4 max-w-[370px] relative bottom-16
                                              hover:bg-[#3333] hover:text-accent hover:cursor-pointer
                                              hover:font-bold" 
                                    type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        <Footer  />
    </div>
  )
}

export default Contact