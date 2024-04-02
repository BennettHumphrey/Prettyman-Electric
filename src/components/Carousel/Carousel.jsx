import React, { useState, useEffect } from 'react';
import { FaBolt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { autoplay, goToSlide, nextSlide, prevSlide } from './utils/carouselFunctions';
import CarouselDots from './Atoms/CarouselDots';
import CarouselArrows from './Atoms/CarouselArrows';
import { fetchData } from '../../functions/fetchData';
import { urlFor } from '../../../Sanity/imageBuilder';



const Carousel = ({ colors, options, styles }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [slideCounter, setSlideCounter] = useState(0);


  const [data, setData] = useState([])
  


  useEffect(() => {
    fetchData(setData, '*[_type == "headerSlides"]');
  }, []);


  
  // useEffect(() => {
  //   if(data && data.length > 0) {
  //   console.log(`Raw data svg: ${JSON.stringify(data[0])}`)
  //   console.log(`urlFor svg: ${urlFor(data[0].svg)}`)}
  // }, [data]);



  useEffect(() => {
    const cleanupAutoplay = autoplay(options, setActiveSlideIndex, setSlideCounter, data);

    return () => {
        cleanupAutoplay(); // Cleanup function to stop autoplay when component unmounts
    };
}, [options, data]);

  return (


    //* Structure of color vars in css file:
    // :root {
    //   --accent-color: #8bc34a;
    //   --accent-whitewashed: #e2f0cb;
    //   --text-color-light: white;
    // }

    <div style={{'--accent-color': colors?.accent, '--text-color-light': colors?.textLight}}
      className={`${styles.slideshowContainer}`}>
      {data.map((slide, index) => (
        <Link
          to={slide.link && `./subPage/${slide.link}`}
          key={index}
          className={`${styles.slides} ${styles.fade} ${
            index === activeSlideIndex ? styles.slidesActive : styles.slidesInactive
          }`}
        >
          <img className={`${styles.img}`} alt={slide.title} src={urlFor(slide.image)} />
          <div className={`${styles.overlay}`}>
            <div className={`${styles.icon}`} >
              <img src={urlFor(slide.svg)}  />
            </div>
            <p className={`${styles.title}`} >{slide.title}</p>
              <div className={`${styles.lines}`}>
                <div className={`${styles.line}`} />
                <FaBolt className={`${styles.linesIcon}`} />
                <div className={`${styles.line}`} />
              </div>
            <p className={`${styles.text}`} >{slide.body}</p>
          </div>
        </Link>
      ))}
      <CarouselArrows styles={styles} nextSlide={nextSlide} prevSlide={prevSlide}
        setActiveSlideIndex={setActiveSlideIndex} setSlideCounter={setSlideCounter} data={data} 
        />
      <CarouselDots styles={styles} data={data} goToSlide={goToSlide} 
        activeSlideIndex={activeSlideIndex} setActiveSlideIndex={setActiveSlideIndex} 
        setSlideCounter={setSlideCounter}
        />
    </div>
  );
};

export default Carousel;




