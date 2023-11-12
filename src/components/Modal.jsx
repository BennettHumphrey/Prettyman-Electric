import React from 'react'

const Modal = ({ setModalOpen }) => {
  return (
    <div className='fixed transition ease-in-out
                    top-0 left-0 right-0 bottom-0 bg-[#00000088]
                    flex justify-center items-center z-40'
                    onClick={() => setModalOpen(false)}>
      <div className='transition ease-in-out mt-8 h-[360px] p-3
          z-50 border-[2px] border-black rounded-lg bg-main max-w-[80%]'
          onClick={(e) => {
            e.stopPropagation()
          }}>
              <h1 className='pb-1 text-center text-black underline-offset-1 underline'>
                Request a Service!
              </h1>
              <form 
                target='_blank' 
                action='https://formspree.io/f/mvolylne' 
                method='POST'>
                <div className='flex justify-center mb-4'>
                  <div className='form-row'>
                    <div className='col'>
                      <input 
                        type='text' 
                        name='Name' 
                        className='mb-3 p-px border rounded-md m-1 border-black bg-main' 
                        placeholder='Full Name' 
                        required/>
                    </div>
                    <div className='col'>
                      <input 
                        type='email' 
                        name='Email' 
                        className='mb-3 p-px border rounded-md m-1 border-black bg-main' 
                        placeholder='Email Address' 
                        required/>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-center mb-4'>
                  <textarea 
                    placeholder='Your Message' 
                    className='mb-3 h-[150px] p-px border rounded-md m-1 
                              border-black bg-main resize-none' 
                    name='Message' 
                    rows='10' 
                    required>
                  </textarea>
                <button 
                  type='submit' 
                  className='m-auto text-center rounded-2xl border border-black p-2 duration-700
                            hover:bg-company hover:rounded-[2rem] hover:text-white'>
                  Submit Form
                            </button>
                </div>
              </form>
      </div>
  </div>
  )
}

export default Modal