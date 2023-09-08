import React from 'react'
import Footer from './Footer';
import Nav from './Nav/Nav';
import ReviewsButton from './ReviewsButton';
import SubPageHeader from './SubPageHeader';
import { contactInfo } from '../resources/data';

const SubPage = ({ data }) => {
    

  return (
    <div className='bg-main' >
      <Nav  />
          <SubPageHeader data={data} />


          <div className={`${!data.seal && 'sm:flex-col text-center'} sm:flex sm:items-center sm:justify-items-center`}>
          {/* If using data.bodyTitle, change mb-12 to my-12 here and on the line (l20) */}
            <div className="flex flex-col mb-12 mx-auto justify-center">
                {/* <h2 className='text-center sm:mx-8 text-2xl' >{data.bodyTitle}</h2> */}
                <div className="h-px w-[30%] bg-line mb-12 mx-auto"/>
                <div className="list-none leading-[1.6] text-xl
                               flex flex-col justify-center lg:flex-row" >
                    <div className="sm:py-0 sm:px-8 sm:max-w-[60vw]">
                    <p className='text-xl px-4 sm:px-0 sm:text-base md:text-xl' >{data.bodyText}</p>
                  </div>
                </div>
            </div>
              <div className={`flex justify-center flex-col
                              ${data.seal && 'sm:mr-[5vw] lg:mr-[10vw]'}`}>
                {data.seal && 
                <div>
                  <img className="relative w-[100px] h-[100px] m-auto mt-12"
                      src="./imgs/partner-logo.svg" alt="Cat"/>
                  <figcaption className='text-center'>
                    Seal of Approval
                  </figcaption>
                </div>}
                <ReviewsButton  />
                <p className='text-center text-xl my-12' >{contactInfo.phone}</p>
              </div>
          </div>
      <Footer  />
    </div>
  )
}

export default SubPage