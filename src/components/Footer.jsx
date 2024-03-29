import React from 'react'
import { CgFacebook, CgInstagram } from 'react-icons/cg'
import { HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2'
import { FaLinkedinIn } from "react-icons/fa";


const emailBreak = (email) => {
  const atIndex = email.indexOf('@');

    const emailBeforeAt = email.substring(0, atIndex);
    const emailAfterAt = email.substring(atIndex);
    
    return (
      <p>
        {emailBeforeAt}
        <br />
        {emailAfterAt}
      </p>
    );
};

const Footer = ({ contactInfo }) => {
  return (
    <footer className='bg-footer-bg' > 
      <h3 className='bg-accent text-text-light text-xl relative top-0 w-full
      h-20 my-auto text-center leading-[4.8rem]' >Fake Electric</h3>
      <div className='flex flex-col justify-center sm:flex-row sm:mb-8' >
          <div className='flex flex-col justify-center' >
              <h4 className=' font-bold text-text-light border-b-[2px] border-b-accent
              max-w-[200px] mt-8 mx-4' >Fake Electric LLC</h4>
              <div className='my-2 mx-4 flex text-text-light items-center' >
                  <div className='flex justify-center items-center border border-accent mr-2 w-[35px] h-[35px]' >
                    <HiMapPin className='text-accent h-full w-full p-2' />
                  </div>
                  <p className='text-wrap' >{contactInfo.address}</p>
              </div>
              <div className='my-2 mx-4 flex text-text-light items-center' >
                  <div className='flex justify-center items-center border border-accent mr-2 w-[35px] h-[35px]' >
                    <HiPhone className='text-accent h-full w-full p-2' />
                  </div>
                  <p>{contactInfo.phone}</p>
              </div>
              <div className='my-2 mx-4 flex text-text-light items-center 
                            hover:text-orange-400 group duration-700'>
                  <div className='flex justify-center items-center border border-accent mr-2 w-[35px] h-[35px]
                                  group-hover:rounded-lg group-hover:scale-110 duration-1000'>
                    <a href="mailto:Poweronelectric23@gmail.com">
                      <HiEnvelope className='text-accent h-full w-full p-2 group-hover:text-orange-400 duration-1000
                                              group-hover:scale-150' />
                    </a>
                  </div>
                  <a href="mailto:Poweronelectric23@gmail.com">
                    {emailBreak(contactInfo.email)}
                  </a>
              </div>
          </div>


          

              {/* Social Media div */}


          <div className='flex justify-center flex-col' >
              <h4 className=' font-bold text-text-light border-b-[2px] border-b-accent
              max-w-[200px] mt-8 mb-8 mx-4 sm:mb-[71px]'>Social Media</h4>
              <div className='flex ml-4 pb-12' >
                  <a className='flex justify-center items-center bg-accent ml-[0.2rem] w-[60px] h-[60px] rounded-xl
                                hover:bg-orange-400 duration-700 hover:cursor-pointer group hover:rounded-3xl hover:scale-95'  >
                    <CgInstagram className='text-footer-bg w-3/5 h-3/5 group-hover:text-text-light duration-1000' />
                  </a>
                  <a className='flex justify-center items-center bg-accent ml-[0.2rem] w-[60px] h-[60px] rounded-xl
                                hover:bg-orange-400 duration-700 hover:cursor-pointer group hover:rounded-3xl hover:scale-95' >
                    <CgFacebook className='text-footer-bg w-3/5 h-3/5 group-hover:text-text-light duration-1000' />
                  </a>
                  <a className='flex justify-center items-center bg-accent ml-[0.2rem] w-[60px] h-[60px] rounded-xl
                                hover:bg-orange-400 duration-700 hover:cursor-pointer group hover:rounded-3xl hover:scale-95' >
                    <FaLinkedinIn className='text-footer-bg w-3/5 h-3/5 group-hover:text-text-light duration-1000' />
                  </a>
              </div>
          </div>

          
      </div>
      <div className='text-text-light text-[0.7rem] py-4 px-4 bg-accent text-center' >
      <div className='flex flex-col  overflow-hidden' >
              <p>Website by Bennett Humphrey</p>
              <a 
                className='hover:text-orange-400 duration-500 hover:scale-125' 
                href="https://bennetthumphrey.com" target="_blank">
                <p>bennetthumphrey.com</p>
              </a>
          </div>
          {/* <p>Some copyright company 2023</p> */}
      </div>
  </footer>
  )
}

export default Footer