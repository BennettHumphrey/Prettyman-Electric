import React from 'react'

const InfoSection = ({ header, body, href }) => {
  return (
    <div id={href} className='w-full py-12 bg-main'>
        <h2 className='font-serif text-2xl font-bold px-8 text-center 
                      mb-6 max-w-[500px] m-auto'>
          {header}
        </h2>
        <div className='bg-black h-px w-[95vw] mx-auto max-w-[500px] my-6'/>
        <p className='text-center text-xl leading-9 px-4 sm:px-[10vw]' >
          {body}
        </p>
    </div>
  )
}

export default InfoSection