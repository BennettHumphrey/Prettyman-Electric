import React from 'react'

const CarouselDots = ({ styles, data, goToSlide, activeSlideIndex, setActiveSlideIndex, setSlideCounter }) => {
  return (
    <div className={`${styles.dots}`}>
        {data.map((x, index) => (
        <span
            key={index}
            className={`${styles.dot} ${
            index === activeSlideIndex ? styles.active : ''
            }`}
            onClick={() => goToSlide(index, setActiveSlideIndex, setSlideCounter)}
        />
        ))}
    </div>
  )
}

export default CarouselDots