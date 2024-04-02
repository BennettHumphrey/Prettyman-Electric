import React from 'react'
import { Link } from 'react-router-dom'

const DesktopNav = ({ colors, navOptions }) => {
  return (
    <div style={{backgroundColor: colors?.bgLight}}
      className='sticky z-10 flex justify-evenly h-12 text-xl' >
        <Link  onClick={() => {window.scrollTo(0, 0);}} to="/">
            <img 
            src="/company-logo.png" 
            height="50px"
            width="50px" 
            className="h-10 w-10 mt-1" 
            alt="company-logo"/>
        </Link>
        {navOptions && navOptions.map((o, i) => (
                    <Link  onClick={() => {window.scrollTo(0, 0);}} key={i} 
                          style={{'--hover-text': colors?.textLight, '--hover-bg': colors?.hover}}
                          className='h-full flex items-center px-6 duration-500 
                            hover:bg-[--hover-bg] hover:text-[--hover-text] 
                            active:bg-[--hover-bg] active:text-[--hover-text] active:duration-0
                              lg:px-[1.16rem]' 
                        to={o.href}>
                        <p>{o.title}</p>
                    </Link>
                ))}
    </div>
  )
}

export default DesktopNav