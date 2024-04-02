import React from 'react'

const ReviewsButton = ({ colors }) => {
  return (
    <div className='w-[70vw] max-w-[550px] m-auto group'>
      <a href=" " className=''>
        <button style={{ backgroundColor: colors?.accent, color: colors?.textLight }} 
          className="leading-3 p-2 text-[13px]
                            h-12 flex justify-center items-center mt-12 mx-auto w-full
                            hover:rounded-xl hover:scale-110 duration-700">
            READ MORE REVIEWS HERE
        </button>
      </a>
    </div>
  )
}

export default ReviewsButton