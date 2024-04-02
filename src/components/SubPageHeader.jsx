import React from 'react'
import { urlFor } from '../../Sanity/imageBuilder'
import { useState } from 'react'
import { useEffect } from 'react'

const SubPageHeader = ({ colors, data }) => {

  const [backgroundImage, setBackgroundImage] = useState('')

  useEffect(() => {
    setBackgroundImage(urlFor(data.image))
  }, [data])

  console.log(`Sub-Page image URL: ${backgroundImage}`)
 
  return (
    <div  style={{ backgroundImage: `url(${backgroundImage})` }} 
    className={`flex flex-col justify-center text-center z-10
                          bg-cover bg-bottom
                          sm:bg-[left_52%]`}>
        <div className="h-full w-full bg-[#FFFA] z-20">
            <h1 className='my-8 mx-4 z-30 text-3xl' >{data.headerTitle}</h1>
            <div className="h-px w-[30%] bg-line my-12 mx-auto"/>
            <p className='text-xl font-bold my-8 mx-4 z-30' >{data.headerText}</p>
            <svg style={{fill: colors?.bgLight}}
                className='p-0 relative bottom-[-1px]'
                xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" 
                viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C40 0 60 0 100 100 Z"></path>
            </svg>
        </div>
    </div>
  )
}

export default SubPageHeader