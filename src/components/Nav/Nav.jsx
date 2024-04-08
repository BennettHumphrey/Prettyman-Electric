import React from 'react';
import { useWindowWidth } from '../../functions/useWindowWidth';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
// import { contactInfo } from '../../resources/data';

const Nav = ({ colors, contactInfo, navOptions }) => {

    const width = useWindowWidth();

  return (
    //Call-Now and logo section is 144 px tall, so it gets hidden on scroll due to the top-[-48px]
    <div className='sticky top-[-120px] nav:top-[-76px] z-[100]' >
        <div className='flex h-25 flex-col items-center bg-black' >
            {/* <img src="./company-logo-large.webp"
              className='px-4 pb-2 h-[96px] w-[300px] bg-black' /> */}
              <p  style={{color: colors?.accent}}
                className='text-4xl text-center font-bold m-auto' >Nobody does it like Prettyman!</p>
            <h1 style={{backgroundColor: colors?.accent, color: colors?.textLight}} 
              className='text-2xl p-px w-full text-center' >
              Call us! {contactInfo.phone}
            </h1>
        </div>
        {width > 1018 ? <DesktopNav colors={colors} navOptions={navOptions}  /> : <MobileNav colors={colors} navOptions={navOptions}  />}
    </div>
  )
}





export default Nav