import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SlideMoreApart.css';

const SlideMoreApart = ({ slide, placeOstrovok, placeSutochno, placeFlatsharing, placeMoreApart }) => {
  const [currenGallery, setCurrenGallery] = useState([{
    key: 'none',
    image: 'none',
    preview: 'none'
  }]);
  const [firstElementGallery, setFirstElementGallery] = useState([{
    key: 'none',
    image: 'none',
    preview: 'none'
  }]);


  useEffect(() => {
    setCurrenGallery(slide.galleryApartSlider.slice(0, 5));
    setFirstElementGallery(slide.galleryApartSlider[0])
  }, [slide]);

  return (
    <li
      className='more-apartment-desktop__item slide-more-apart'>
      {placeOstrovok && <Link
        target='_blank'
        rel='noreferrer'
        to={slide.ostrovokru}
        className='slide-more-apart__link'
      >
        <div
          className='slide-more-apart__image-wrapper'
        >
          <img
            className='slide-more-apart__image'
            src={firstElementGallery.image} alt="" />
        </div>
        <p
          className='slide-more-apart__subtitle'
        >{slide.shortInfo}</p>
      </Link>}

      {placeSutochno && <Link
        target='_blank'
        rel='noreferrer'
        to={slide.sutocnoru}
        className='slide-more-apart__link'
      >
        <div
          className='slide-more-apart__image-wrapper'
        >
          <img
            className='slide-more-apart__image'
            src={firstElementGallery.image} alt="" />
        </div>
        <p
          className='slide-more-apart__subtitle'
        >{slide.shortInfo}</p>
      </Link>}

      {placeFlatsharing && <Link
        target='_blank'
        rel='noreferrer'
        to={slide.flatsharing}
        className='slide-more-apart__link'
      >
        <div
          className='slide-more-apart__image-wrapper'
        >
          <img
            className='slide-more-apart__image'
            src={firstElementGallery.image} alt="" />
        </div>
        <p
          className='slide-more-apart__subtitle'
        >{slide.shortInfo}</p>
      </Link>}

      {placeMoreApart && <Link
        target='_self'
        rel='noreferrer'
        to={`/apartment/${slide.endpoint}`}
        className='slide-more-apart__link'
      >
        <div
          className='slide-more-apart__image-wrapper'
        >
          <img
            className='slide-more-apart__image'
            src={firstElementGallery.image} alt="" />
        </div>
        <p
          className='slide-more-apart__subtitle'
        >{slide.shortInfo}</p>
      </Link>}

      <p
        className='slide-more-apart__paragraph'
      >{slide.price}</p>
      <p
        className='slide-more-apart__paragraph slide-more-apart__paragraph_type_accent'
      >{slide.shortAdress}</p>
    </li>
  );
}

export default SlideMoreApart;