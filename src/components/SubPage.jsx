import React from 'react'
import Footer from './Footer';
import Nav from './Nav/Nav';
import ReviewsButton from './ReviewsButton';
import SubPageHeader from './SubPageHeader';
import { useLoaderData } from 'react-router-dom';
// import { contactInfo } from '../resources/data';

const SubPage = ({ colors, contactInfo, navOptions }) => {

  const data = useLoaderData();
    

  return (
    <div style={{backgroundColor: colors?.bgLight}} >
      <Nav colors={colors} contactInfo={contactInfo} navOptions={navOptions} />
          <SubPageHeader colors={colors} data={data} />


          <div className='sm:flex sm:flex-col text-center sm:items-center sm:justify-items-center'>
          {/* If using data.bodyTitle, change mb-12 to my-12 here and on the line (l20) */}
            <div className="flex flex-col mb-12 mx-auto justify-center">
                {/* <h2 className='text-center sm:mx-8 text-2xl' >{data.bodyTitle}</h2> */}
                <div className="h-px w-[30%] bg-line mb-12 mx-auto z-50"/>
                <div className="list-none leading-[1.6] text-xl
                               flex flex-col justify-center lg:flex-row" >
                    <div className="sm:py-0 sm:px-8 sm:max-w-[60vw]">
                    <p className='text-xl px-4 sm:px-0 sm:text-base md:text-xl' >{data.bodyText}</p>
                  </div>
                </div>
            </div>
              <div className={`flex justify-center flex-col
                              `}>
                <ReviewsButton colors={colors}  />
                <p className='text-center text-xl my-12' >{contactInfo.phone}</p>
              </div>
          </div>
      <Footer colors={colors} contactInfo={contactInfo} />
    </div>
  )
}

export default SubPage