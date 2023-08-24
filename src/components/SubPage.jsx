import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Footer from './Footer';
import Nav from './Nav/Nav';
import ReviewsButton from './ReviewsButton';

const SubPage = () => {

    const data = useLoaderData();

  return (
    <div className='bg-main' >
      <Nav  />
          <div className="flex flex-col justify-center text-center z-10
                          bg-[url(/imgs/outdoor-panel-1200.webp)] bg-cover bg-[35%]
                          sm:bg-[left_52%]">
            <div className="h-full w-full bg-[#FFFA] z-20">
                <h1 className='my-8 mx-4 z-30 text-3xl' >{data.headerTitle}</h1>
                <div className="h-px w-[30%] bg-line my-12 mx-auto"/>
                <p className='text-xl font-bold my-8 mx-4 z-30' >{data.headerText}</p>
                <svg
                 className='fill-main p-0 relative'
                 xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" 
                    viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C40 0 60 0 100 100 Z"></path>
                </svg>
            </div>
          </div>

          <div className="sm:flex sm:items-center sm:justify-items-center">
            <div className="flex flex-col my-12 mx-auto justify-center">
                <h2 className='text-center sm:mx-8 text-2xl' >{data.bodyTitle}</h2>
                <div className="h-px w-[30%] bg-line my-12 mx-auto"/>
                <ul className='ml-6 list-none leading-[1.6] text-xl
                               flex flex-col justify-center lg:flex-row' >
                  <div className="sm:py-0 sm:px-8 sm:max-w-[60vw]">
                    <p className='text-xl sm:text-base md:text-xl' >{data.bodyText}</p>
                  </div>
                </ul>
            </div>
              <div className="flex justify-center flex-col
                              sm:mr-[5vw] lg:mr-[10vw]">
                <img className="relative w-[100px] h-[100px] m-auto mt-12" 
                    src="/imgs/partner-logo.svg" alt="Cat"/>
                <figcaption className='text-center'>
                  Seal of Approval
                </figcaption>
                <ReviewsButton  />
                <p className='text-center text-xl my-12' >250-555-5555</p>
              </div>
          </div>
      <Footer  />
    </div>
  )
}

export default SubPage