import React from 'react'

const RequestQuote = () => {
  return (
    <div className="request-quote bg-accent text-text-light text-center flex 
                    flex-col items-center pb-8">
      <h2 className="pt-8 mx-1 mb-8 text-xl">Trusted Electricians, Home Advisor Approved</h2>
      <a href="./sub-pages/contact.html">
        <button className="w-[80vw] h-12 bg-[#333645] text-text-light 
                            cursor-pointer transition duration-500 rounded-md 
                            max-w-[600px] hover:bg-main hover:text-black">
          REQUEST A QUOTE
        </button>
      </a>
    </div>
  )
}

export default RequestQuote