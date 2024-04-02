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


const Footer = ({ colors, contactInfo }) => {


  console.log(`Colors?.accent in Footer: ${colors?.accent}`)

  return (
    <footer style={{backgroundColor: colors?.bgDark}}> 
      <h3 style={{backgroundColor: colors?.accent, color: colors?.textLight}}
        className='text-xl relative top-0 w-full
      h-20 my-auto text-center leading-[4.8rem]' >Fake Electric</h3>
      <div className='flex flex-col justify-center sm:flex-row sm:mb-8' >
          <div className='flex flex-col justify-center' >
              <h4 style={{borderBottomColor: colors?.accent, color: colors?.textLight}} 
                className=' font-bold border-b-[2px]
              max-w-[200px] mt-8 mx-4' >Fake Electric LLC</h4>
              <div style={{color: colors?.textLight}}
                className='my-2 mx-4 flex items-center' >
                  <div style={{borderColor: colors?.textLight, color: colors?.textLight}}
                    className='flex justify-center items-center border mr-2 w-[35px] h-[35px]' >
                    <HiMapPin style={{color: colors?.accent}} 
                      className='h-full w-full p-2' />
                  </div>
                  <p className='text-wrap' >{contactInfo.address}</p>
              </div>
              <div style={{borderColor: colors?.accent, color: colors?.textLight}} 
                className='my-2 mx-4 flex items-center' >
                  <div className='flex justify-center items-center border mr-2 w-[35px] h-[35px]' >
                    <HiPhone style={{color: colors?.accent}}
                      className='h-full w-full p-2' />
                  </div>
                  <p>{contactInfo.phone}</p>
              </div>
              <div style={{borderColor: colors?.accent, color: colors?.textLight, '--hover': colors?.accent}} 
                className='my-2 mx-4 flex items-center 
                            hover:text-[--hover] group duration-700'>
                  <div className='flex justify-center items-center border  mr-2 w-[35px] h-[35px]
                                  group-hover:rounded-lg group-hover:scale-110 duration-1000'>
                    <a href="mailto:Poweronelectric23@gmail.com">
                      <HiEnvelope  style={{color: colors?.accent, '--hover': colors?.accent}}
                        className=' h-full w-full p-2 group-hover:text-[--hover] duration-1000
                                              group-hover:scale-150' />
                    </a>
                  </div>
                  <a href="mailto:Poweronelectric23@gmail.com">
                    {emailBreak(contactInfo.email)}
                  </a>
              </div>
          </div>


          

              {/* Social Media div */}


              <div className='flex justify-center flex-col'>
        <h4
          style={{ color: colors?.textLight, borderBottomColor: colors?.accent }}
          className='font-bold border-b-[2px] max-w-[200px] mt-8 mb-8 mx-4 sm:mb-[71px]'>
          Social Media
        </h4>
        <div className='flex ml-4 pb-12'>
          <a
            style={{ '--bg': colors?.accent, '--hover-bg': colors?.bgLight }}
            className='flex justify-center bg-[--bg] items-center ml-[0.2rem] w-[60px] h-[60px] rounded-xl
                        duration-700 hover:cursor-pointer 
                        hover:bg-[--hover-bg]
                        group hover:rounded-3xl hover:scale-95'>
            <CgInstagram
              style={{ '--hover-color': colors?.accent }}
              className={`w-3/5 h-3/5 duration-1000 group-hover:text-[--hover-color]`}
            />
          </a>
          <a
            style={{ '--bg': colors?.accent, '--hover-bg': colors?.bgLight }}
            className='flex justify-center bg-[--bg] items-center ml-[0.2rem] w-[60px] h-[60px] rounded-xl
                        duration-700 hover:cursor-pointer 
                        hover:bg-[--hover-bg]
                        group hover:rounded-3xl hover:scale-95'>
            <CgFacebook
              style={{ '--hover-color': colors?.accent }}
              className={`w-3/5 h-3/5 duration-1000 group-hover:text-[--hover-color]`}
            />
          </a>
          <a
            style={{ '--bg': colors?.accent, '--hover-bg': colors?.bgLight }}
            className='flex justify-center bg-[--bg] items-center ml-[0.2rem] w-[60px] h-[60px] rounded-xl
                        duration-700 hover:cursor-pointer 
                        hover:bg-[--hover-bg]
                        group hover:rounded-3xl hover:scale-95'>
            <FaLinkedinIn
              style={{ '--hover-color': colors?.accent }}
              className={`w-3/5 h-3/5 duration-1000 group-hover:text-[--hover-color]`}
            />
          </a>
        </div>
      </div>

          
      </div>
      <div style={{backgroundColor: colors?.accent, color: colors?.textLight}} 
        className='text-[0.7rem] py-4 px-4 text-center' >
      <div className='flex flex-col  overflow-hidden' >
              <p>Website by Bennett Humphrey</p>
              <a style={{'--hover': 'orange'}}
                className='hover:text-[--hover] duration-500 hover:scale-125' 
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