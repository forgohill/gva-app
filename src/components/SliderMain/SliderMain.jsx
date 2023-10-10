import React from 'react';
import './SliderMain.css';
import SlideMain from '../SlideMain/SlideMain.jsx';
import { slidesMain } from '../../utils/constantsSource.js';

const SliderMain = () => {
  const renderSlide = slidesMain.map((slide) => {
    return (
      <SlideMain
        key={slide.lot}
        card={slide}
      />
    )
  })

  return (
    <ul className='slider-main'>
      {renderSlide}
    </ul>
  );
}

export default SliderMain;
