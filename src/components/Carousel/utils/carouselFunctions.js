


export const nextSlide = (slideIndexFunc, slideCounterFunc, data) => {
    slideIndexFunc((prevIndex) => (prevIndex + 1) % data.length);
    slideCounterFunc(0)
  };

export const prevSlide = (slideIndexFunc, slideCounterFunc, data) => {
    slideIndexFunc((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
    slideCounterFunc(0)
  };

export const goToSlide = (index, slideIndexFunc, slideCounterFunc) => {
  slideIndexFunc(index);
  slideCounterFunc(0)
};

export const autoplay = (options, slideIndexFunc, slideCounterFunc, data) => {

  if (options.autoplay) {
      const intervalId = setInterval(() => {
          slideCounterFunc((prevSlideCounter) => {
              const newSlideCounter = prevSlideCounter + 1;
              
              if (newSlideCounter >= options.autoplayDelay) {
                  nextSlide(slideIndexFunc, slideCounterFunc, data);
                  return 0; // Reset slide counter
              }
              
              return newSlideCounter;
          });
      }, 1000); // Run every second

      // Return cleanup function to stop autoplay when component unmounts or when options change
      return () => clearInterval(intervalId);
  }
};

