import React, { useState } from 'react'
import { logo } from '../assets/data'
import Modal from './Modal'

const Banner = () => {

const [modalOpen, setModalOpen] = useState(false)


  return (
    <div>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
      <div className='bg-[url(/Vancouver-Sunset.jpg)] h-[440px]
                      bg-cover bg-fixed flex flex-col gap-20
                      lg:flex-row lg:justify-center lg:gap-40
                      xl:h-[65vw] max-h-[85vh]'>
        <div className='flex justify-center items-center my-6' >
          <img
            src={logo}
            className='h-[100px] w-[100px]'
          />
        </div>
        <div className='flex flex-col gap-8 lg:h-[200px] my-auto'>
          <p className='text-main bg-bubble text-center text-xl font-bold rounded-2xl
                          w-[80%] max-w-[300px] m-auto p-1 font-serif lg:max-w-[360px]' >
            To contact an electrician call
            206-555-5555 now!
          </p>
          <button className='flex justify-center items-center bg-main w-[10rem]
              h-8 my-[2%] mx-auto rounded-full text-center transition duration-700
              border border-text hover:scale-110 hover:bg-company hover:text-white z-10' 
              onClick={() => setModalOpen(true)}>
              Request a Service!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner