import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';
import { headerSlides } from '../../resources/data';

const Carousel = ({ options }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const nextSlide = () => {
    setActiveSlideIndex((prevIndex) => (prevIndex + 1) % headerSlides.length);
  };

  const prevSlide = () => {
    setActiveSlideIndex((prevIndex) =>
      prevIndex === 0 ? headerSlides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setActiveSlideIndex(index);
  };

  return (
    <div className={`${styles.slideshowContainer}`}>
      {headerSlides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.mySlides} ${styles.fade} ${
            index === activeSlideIndex ? styles.mySlidesActive : styles.mySlidesInactive
          }`}
        >
          <img className={`${styles.slideImg}`} alt={slide.title} src={slide.img} />
          <div className={`${styles.mySlidesOverlay}`}>
            <h1>{slide.title}</h1>
            <div className={`${styles.mySlidesLines}`}>
              <div className={`${styles.mySlidesLine}`} />
              <div className={`${styles.mySlidesLine}`} />
            </div>
            <p>{slide.text}</p>
          </div>
        </div>
      ))}
      <p className={`${styles.next}`} onClick={nextSlide}>
        &#10095;
      </p>
      <p className={`${styles.prev}`} onClick={prevSlide}>
        &#10094;
      </p>
      <div className={`${styles.dots}`}>
        {headerSlides.map((slide, index) => (
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






{/* <div class="slideshow-container">
        
        <a href="./sub-pages/resi.html" aria-label="residential services">
          <div class="mySlides fade">
            <img class="slideImg" srcset="./resources/imgs/Office-Interior-600.webp 600w, ./resources/imgs/Office-Interior-900.webp 900w, ./resources/imgs/Office-Interior-1200.webp 1200w, ./resources/imgs/Office-Interior-1680.webp 1800w"
             sizes="(max-width: 720px) 600px, (max-width: 1024px) 900px, (max-width: 1400px) 1200px, 1680px" alt="Office Interior" src="./resources/imgs/template-1-600.webp">
            <div class="mySlides-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mySlides-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
              <h1>Residential Services</h1>
              <div class="mySlides-lines">
                <div class="mySlides-line"></div>
                <svg class="mySlides-lines-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                <div class="mySlides-line"></div>
              </div>
              <p>Service upgrades, renovations, new construction, and more!</p>
            </div>
          </div>
        </a>
        
        <a href="./sub-pages/commercial.html" aria-label="commercial services">
          <div class="mySlides fade">
            <img class="slideImg" srcset="./resources/imgs/City-Skyline-600.webp 600w, ./resources/imgs/City-Skyline-900.webp 900w, ./resources/imgs/City-Skyline-1200.webp 1200w, ./resources/imgs/City-Skyline-1800.webp 1800w"
             sizes="(max-width: 720px) 600px, (max-width: 1024px) 900px, (max-width: 1400px) 1200px, 1800px" alt="City Skyline" src="./resources/imgs/template-1-600.webp">
            <div class="mySlides-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mySlides-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
              </svg>
              <h1><span class="com-stroke">Comm</span>ercial Services</h1>
              <div class="mySlides-lines">
                <div class="mySlides-line"></div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-6 h-6 mySlides-lines-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                <div class="mySlides-line"></div>
              </div>
              <p>Data wiring, alarm systems, new construction, and much more!</p>
            </div>
          </div>
        </a>
      
        <a href="./sub-pages/lighting.html" aria-label="lighting services">
          <div class="mySlides fade">
            <img class="slideImg" srcset="./resources/imgs/Light-600.webp 600w, ./resources/imgs/Light-900.webp 900w, ./resources/imgs/Light-1200.webp 1200w, ./resources/imgs/Light-1680.webp 1800w"
             sizes="(max-width: 720px) 600px, (max-width: 1024px) 900px, (max-width: 1400px) 1200px, 1680px" alt="Light with Blue Sky Background" src="./resources/imgs/template-1-600.webp">
            <div class="mySlides-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mySlides-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
              <h1>Lighting D<span class="lighting-span-2">esign</span></h1>
              <div class="mySlides-lines">
                <div class="mySlides-line"></div>
                <svg class="mySlides-lines-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                <div class="mySlides-line"></div>
              </div>
              <p>Our electricians have a wealth of exp<span class="lighting-span-2">erience</span> and knowledge with the latest technology!</p>
            </div>
          </div>
        </a>
      
        <p class="prev" onclick="plusSlides(-1)">&#10094;</p>
        <p class="next" onclick="plusSlides(1)">&#10095;</p>
      </div>
      <br>
      
      <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
      </div> */}