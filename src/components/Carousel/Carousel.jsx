import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';
import { headerSlides } from '../../resources/data';
import { FaBolt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Carousel = ({ data, options }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [slideCounter, setSlideCounter] = useState(0);

    useEffect(() => {
        if(options.autoplay) {
          const interval = setInterval(() => {
          setSlideCounter((prevSlideCounter) => {
            const newSlideCounter = prevSlideCounter + 1;
            
            if (newSlideCounter >= options.autoplayDelay) {
              nextSlide();
              return 0; // Reset slide counter
            }
      
            return newSlideCounter;
          });
        }, 1000);
      
        return () => {
          clearInterval(interval);
        };
      }
      }, []);
      
      

  const nextSlide = () => {
    setActiveSlideIndex((prevIndex) => (prevIndex + 1) % headerSlides.length);
    setSlideCounter(0)
  };

  const prevSlide = () => {
    setActiveSlideIndex((prevIndex) =>
      prevIndex === 0 ? headerSlides.length - 1 : prevIndex - 1
    );
    setSlideCounter(0)
  };

  const goToSlide = (index) => {
      setActiveSlideIndex(index);
      setSlideCounter(0)
  };

  return (
    <div className={`${styles.slideshowContainer}`}>
      {data.map((slide, index) => (
        <Link
          to={slide.href}
          key={index}
          className={`${styles.slides} ${styles.fade} ${
            index === activeSlideIndex ? styles.slidesActive : styles.slidesInactive
          }`}
        >
          <img className={`${styles.img}`} alt={slide.title} src={slide.img} />
          <div className={`${styles.overlay}`}>
            <div className={`${styles.icon}`} >
              {slide.svg}
            </div>
            <h1>{slide.title}</h1>
            <div className={`${styles.lines}`}>
              <div className={`${styles.line}`} />
              <FaBolt className={`${styles.linesIcon}`} />
              <div className={`${styles.line}`} />
            </div>
            <p>{slide.text}</p>
          </div>
        </Link>
      ))}
      <p className={`${styles.next}`} onClick={nextSlide}>
        &#10095;
      </p>
      <p className={`${styles.prev}`} onClick={prevSlide}>
        &#10094;
      </p>
      <div className={`${styles.dots}`}>
        {headerSlides.map((x, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === activeSlideIndex ? styles.active : ''
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;




