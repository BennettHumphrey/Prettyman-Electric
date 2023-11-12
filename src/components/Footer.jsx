import React from 'react'
import { CgFacebook, CgInstagram } from 'react-icons/cg'
import { HiEnvelope, HiPhone } from 'react-icons/hi2'
import { FaLinkedinIn } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { contactInfo } from '../resources/data';


const Footer = () => {
  return (
    <footer className='bg-footer-bg' > 
      <h3 className='bg-accent text-text-light text-xl relative top-0 w-full
      h-20 my-auto text-center leading-[4.8rem]' >Fake Electric</h3>
      <div className='flex flex-col justify-center sm:flex-row sm:mb-8' >
          <div className='flex flex-col justify-center' >
              <h4 className='text-text-light border-b-[2px] border-b-accent
              max-w-[200px] my-8 mx-4' >Fake Electric</h4>
              <div className='my-2 mx-4 flex text-footer-text items-center' >
                  <div className='flex justify-center items-center border border-accent mr-2 w-[35px] h-[35px]' >
                    <HiPhone className='text-accent h-full w-full p-2' />
                  </div>
                  <p>{contactInfo.phone}</p>
              </div>
              <div className='my-2 mx-4 flex text-footer-text items-center'>
                  <div className='flex justify-center items-center border border-accent mr-2 w-[35px] h-[35px]'>
                    <a href="mailto:bennetthumphrey98@gmail.com">
                      <HiEnvelope className='text-accent h-full w-full p-2' />
                    </a>
                  </div>
                  <a href={`mailto:${contactInfo.email}`}>
                    <p>bennetthumphrey98<br/>@gmail.com</p>
                  </a>
              </div>
          </div>
          <div className='flex justify-center flex-col' >
              <h4 className='text-text-light border-b-[2px] border-b-accent
              max-w-[200px] my-8 mx-4'>Reviews</h4>
              <div className='flex ml-4 pb-12' >
                  <a 
                    href=' '
                    className='flex justify-center items-center bg-accent ml-[0.2rem] w-[60px] h-[60px]'  >
                    <SiGooglemaps className='text-gray-300 w-3/5 h-3/5' />
                  </a>
                  {/* <div className='flex justify-center items-center bg-accent ml-[0.2rem] w-[60px] h-[60px]' >
                    <CgFacebook className='text-gray-300 w-3/5 h-3/5' />
                  </div>
                  <div className='flex justify-center items-center bg-accent ml-[0.2rem] w-[60px] h-[60px]' >
                    <FaLinkedinIn className='text-gray-300 w-3/5 h-3/5' />
                  </div> */}
              </div>
          </div>
      </div>
      <div className='text-black text-[0.7rem] pt-6 pb-2 m-auto bg-accent text-center' >
          <div className='flex flex-col mb-4' >
              <p>Website by Bennett Humphrey</p>
              <a 
                className='hover:text-white duration-500 hover:text-[0.8rem] hover:translate-y-[-3px]' 
                href="https://bennetthumphrey.com" target="_blank">
                <p>bennetthumphrey.com</p>
              </a>
          </div>
          {/* <p>Some copyright company 2022</p> */}
      </div>
  </footer>
  )
}

export default Footer