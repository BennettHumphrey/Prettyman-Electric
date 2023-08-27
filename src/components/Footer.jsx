import React from 'react'
import { navOptions } from '../resources/data'
import { Link } from 'react-router-dom'

const Footer = () => {

    const scrollToTop = () => {
        const scroll = () => {window.scrollTo({
            top: "-999px",
            behavior: 'smooth'
        })};
        return setInterval(scroll, 500);
    };

  return (
    <div>
        <div className='flex flex-col justify-center text-center leading-[1.2]
                        text-footer-text bg-footer-bg pt-12 px-[1.2rem] pb-2
                        xsm:flex-row xsm:flex-wrap'>
          <div className='semi-footer-info'>
            <h4 className='my-8 mx-4 text-[1.75rem] text-text-light' >Fake Electrical</h4>
            <p className='text-footer-text' >Office: 250-555-5555</p>
            <p className='text-footer-text' >Cell: 250-555-5556</p>
            <p className='text-footer-text' >Cell: 250-555-5557</p>
            <p className='text-footer-text' >1234 Fake St, Victoria BC V1E 9U4</p>
            <br/>
            <p className='text-footer-text' >Electrical Troubleshooting Specialist</p>
            <p className='text-footer-text' >Emergency Services 24/7 Service</p>
            <br/>
            <p className='text-footer-text' >Insured, Bonded, Licensed</p>
          </div>
          <div className="semi-footer-menu">
            <h4 className='my-8 mx-4 text-[1.75rem] text-text-light'>Our Services</h4>
            <ul onClick={scrollToTop}>
              {navOptions.map((data, i) => (
                <li key={i}
                    className='w-[70%] text-center m-auto group hover:cursor-pointer
                             border-b border-b-footer-text py-[0.4rem]' >
                    <Link to={data.href}
                        className='duration-[0.4s] group-hover:text-accent'>
                        {data.title}
                    </Link>
                </li>
                ))}
            </ul>
          </div>
          <div>
            <h4 className='my-8 mx-4 text-[1.75rem] text-text-light'>Satisfaction Guarenteed</h4>
            <div className="grid grid-rows-[150px_150px] grid-cols-[100px_100px]
                            justify-center justify-items-center gap-4">
              <figure>
                <img className='w-24 h-24' src="/imgs/partner-logo.svg" alt="Logo"/>
                <figcaption>Seal of Approval</figcaption>
              </figure>
              <figure>
                <img className='w-24 h-24' src="/imgs/partner-logo.svg" alt="Logo"/>
                <figcaption>Seal of Approval</figcaption>
              </figure>
              <figure>
                <img className='w-24 h-24' src="/imgs/partner-logo.svg" alt="Logo"/>
                <figcaption>Partner Logo</figcaption>
              </figure>
              <figure>
                <img className='w-24 h-24' src="/imgs/partner-logo.svg" alt="Logo"/>
                <figcaption>Partner Logo</figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className='text-center leading-[1.2] bg-footer-bg pb-6 pt-[3.2rem]' >
          <p className='text-footer-text' >Website developed by Bennett Humphrey</p>
          <a href='https://bennetthumphrey.com/' target='blank' 
            className='text-footer-text duration-500 hover:text-accent' >
              Bennetthumphrey.com
            </a>
        </div>
    </div>
  )
}

export default Footer