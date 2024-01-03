import React from 'react';
import SlideMoreApart from '../SlideMoreApart/SlideMoreApart';

import { slidesMain } from '../../utils/constantsSource'

import './Place.css'
import {
  useLocation,
} from 'react-router-dom';


const Place = () => {
  const { pathname } = useLocation();


  const renderSlideOstrovok = slidesMain.map((slide) => {
    return <SlideMoreApart
      key={slide.lot}
      slide={slide}
      placeOstrovok={true}
    />
  });

  const renderSlideSutochno = slidesMain.map((slide) => {
    return <SlideMoreApart
      key={slide.lot}
      slide={slide}
      placeSutochno={true}
    />
  });

  const renderSlideFlatsharing = slidesMain.map((slide) => {
    return <SlideMoreApart
      key={slide.lot}
      slide={slide}
      placeFlatsharing={true}
    />
  });

  return (
    <main className='main'>
      <section
        className='place'>
        {
          pathname === '/place/place-ostrovok'
            ?
            <article
              className='place__content-wrapper'>
              <h2 className="place__title">Наши&nbsp;квартиры на&nbsp;<span className="place__accent">OSTROVOK.RU</span></h2>
              <p className="place__pharagraph">Цены на площадках могут быть дороже на 10-15%, это зависит от комиссии площадки!</p>

              <ul
                className='place__list'
              >
                {renderSlideOstrovok}
              </ul>
            </article>
            : ''
        }
        {
          pathname === '/place/place-sutochnoru'
            ?
            <article
              className='place__content-wrapper'>
              <h2 className="place__title">Наши&nbsp;квартиры на&nbsp;<span className="place__accent">Sutochno.ru</span></h2>
              <p className="place__pharagraph">Цены на площадках могут быть дороже на 10-15%, это зависит от комиссии площадки!</p>
              <ul
                className='place__list'
              >
                {renderSlideSutochno}
              </ul>
            </article>
            : ''
        }
        {
          pathname === '/place/flatsharing'
            ?
            <article
              className='place__content-wrapper'>
              <h2 className="place__title">Наши&nbsp;квартиры на&nbsp;<span className="place__accent">Flatsharing</span></h2>
              <p className="place__pharagraph">Цены на площадках могут быть дороже на 10-15%, это зависит от комиссии площадки!</p>
              <ul
                className='place__list'
              >
                {renderSlideFlatsharing}
              </ul>
            </article>
            : ''
        }
        <div className='place__background-rectangle'></div>
      </section>

    </main>
  );
}

export default Place;
