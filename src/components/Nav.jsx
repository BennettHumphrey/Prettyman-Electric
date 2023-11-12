import React from 'react'
import { logo } from '../assets/data'

const Nav = () => {
  return (
    <div className='sticky top-0 z-[100]' >
        <div  className='bg-main z-10 flex h-12 text-xl' >
            <div href='#top' >
                <img 
                    src={logo} 
                    height='50px'
                    width='50px' 
                    className='h-10 w-10 mt-1 ml-3' 
                    alt='company-logo'
                />
            </div>
            <div className='w-full flex items-center justify-center
                                gap-[5vw] pr-[6vw]'>
                <p className='font-bold text-company text-3xl' >
                    Fake Electric
                </p>
            </div>
        </div>
    </div>
  )
}

export default Nav