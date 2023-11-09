import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { sourcePersons } from '../../utils/sourcePersons'
import RecommenadionItem from '../RecommenadionItem/RecommenadionItem.jsx';
import './RecommenadionPlace.css';

const RecommenadionPlace = ({ slide }) => {


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
  const { recommendations } = slide;

  const renderRecommenadionItem = recommendations.map((recommenadions) => {
    return <RecommenadionItem
      key={recommenadions.key}
      recommenadions={recommenadions}
    />
  });

  useEffect(() => {
    setCurrenGallery(slide.galleryApartSlider.slice(0, 5));
    setFirstElementGallery(slide.galleryApartSlider[0])
  }, [slide]);


  return (
    <article className='recommendations__space recommenadion-place'>
      {/* <button onClick={() => {
        console.log(slide);
      }}>
        {slide.name}
      </button> */}

      <div
        className='recommenadion-place__place-info'
      >
        <Link
          to={`/apartment/${slide.endpoint}`}
        >

          <div
            className='recommenadion-place__image-wrapper'>
            <img
              className='recommenadion-place__image'

              src={firstElementGallery.image} alt="" />
          </div>
        </Link>
        <div
          className='recommenadion-place__place-info-text'
        >
          <Link
            to={`/apartment/${slide.endpoint}`}
            className='recommenadion-place__link'
          >
            <h2
              className='recommenadion-place__title'
            >{slide.name}</h2>
            {/* <h3
              className='recommenadion-place__subtitle'
            >{slide.shortAdress}</h3> */}
          </Link>
        </div>

      </div>

      <ul
        className='recommenadion-place__list'>
        {renderRecommenadionItem}
      </ul>
    </article>
  );
}

export default RecommenadionPlace;

