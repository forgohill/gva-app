import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './SliderMain.css';
import './sliderMainStyle.css';

import SlideMain from '../SlideMain/SlideMain.jsx';
import { slidesMain } from '../../utils/constantsSource.js';

const SliderMain = () => {
  const [relationWidht, setRelationWidht] = useState(undefined);
  const [isBreakpoint, setIsBreakpoint] = useState(0);

  const resizeDelay = () => {
    let time;
    if (!time) {
      time = setTimeout(() => {
        time = null;
        // handleResize();
        setRelationWidht(window.innerWidth);
      }, 1);
    };
  };

  const handleResize = () => {

    setRelationWidht(window.innerWidth);
  };

  useEffect(() => {
    // навешиваем слушатель
    handleResize();
    window.addEventListener('resize', resizeDelay);
    setIsBreakpoint(relationWidht);
    // снимаем слушатель
    return () => window.removeEventListener('resize', resizeDelay);
  }, []);

  useEffect(() => {
    if (relationWidht <= 1280 && relationWidht > 600) {
      setIsBreakpoint(1280);
      console.log(isBreakpoint);
    } else {
      if (relationWidht <= 936 && relationWidht > 612) {
        setIsBreakpoint(936);
        console.log(isBreakpoint);
      } else {
        if (relationWidht <= 612 && relationWidht > 0) {
          setIsBreakpoint(612);
          console.log(isBreakpoint);
        }
      }
    }
  }, [relationWidht]);

  const renderSlide = slidesMain.map((slide) => {
    return (
      <SlideMain
        key={slide.lot}
        card={slide}
        relationWidht={relationWidht}
      />
    )
  });

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 8000,
    cssEase: "linear",
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 936,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 612,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      {
        relationWidht >= 480
          ?
          <div className='slider-main'>
            <Slider {...settings}>
              {renderSlide}
            </Slider>
          </div>
          :
          <div className='slider-main__scroll'>
            {renderSlide}
          </div>
      }
    </>
  );
}

export default SliderMain;
