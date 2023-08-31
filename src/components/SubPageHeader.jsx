import React from 'react'

const SubPageHeader = ({data}) => {


  return (
    <div className="flex flex-col justify-center text-center z-10
                          bg-[url(/imgs/Outdoor-Panel-1200.webp)] bg-cover bg-[35%]
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
  )
}

export default SubPageHeader