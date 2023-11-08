import React from 'react';
import { slidesMain } from '../../utils/constantsSource';
import SlideMoreApart from '../SlideMoreApart/SlideMoreApart.jsx'

import './MoreApartmentDesktop.css';

const MoreApartmentDesktop = () => {

  const renderSlide = slidesMain.map((slide) => {
    return <SlideMoreApart
      key={slide.lot}
      slide={slide}
    />
  });

  return (
    <article
      className='more-apartment-desktop'
    >
      <h4 className="more-apartment-desktop__title">
        Другие наши квартиры</h4>
      <ul
        className='more-apartment-desktop__list'>
        {renderSlide}
      </ul>
    </article>
  );
}

export default MoreApartmentDesktop;
