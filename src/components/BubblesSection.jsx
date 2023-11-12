import React from 'react'
import { useWindowWidth } from '../assets/useWindowWidth'

const BubblesSection = ({ bubbles, img, imgPos }) => {

  const width = useWindowWidth()


  return (
    <div className={`${img} ${imgPos} bg-cover bg-fixed min-h-[540px]
                    lg:h-[55vw] max-h-[85vh]'
                    flex flex-col justify-around items-around gap-6 p-8
                    ` + (bubbles.length >= 3 ? 'lg:flex-row' : 'md:flex-row')}>
        {bubbles.map((data, key) => (
          <div key={key}
              className='bg-bubble text-white rounded-2xl w-[80vw]
                          p-4 m-auto text-center max-w-[300px]'>
            <h3 className='text-xl font-semibold'>
              {data.header}
            </h3>
            {data.header && <div className='h-px w-4/5 bg-white m-auto mb-3' />}
            <p>
              {data.body}
            </p>
          </div>
        ))}
    </div>
  )
}

export default BubblesSection