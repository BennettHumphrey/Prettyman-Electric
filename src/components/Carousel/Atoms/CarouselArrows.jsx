import React from 'react'

const CarouselArrows = ({ styles, nextSlide, prevSlide, setActiveSlideIndex, setSlideCounter, data }) => {
  return (
    <div>
        <p className={`${styles.next}`} onClick={() => {nextSlide(setActiveSlideIndex, setSlideCounter, data)}}>
        &#10095;
        </p>
        <p className={`${styles.prev}`} onClick={() => {prevSlide(setActiveSlideIndex, setSlideCounter, data)}}>
        &#10094;
        </p>
    </div>
  )
}

export default CarouselArrows