import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './SliderLaptop.css';
import './sliderLaptopStyle.css';

import SlideLaptop from '../SlideLaptop/SlideLaptop.jsx';

import { galleryApart } from '../../utils/galleryApart';

const SliderLaptop = ({ currentPathname }) => {
  const [currentGallery, setCurrentGallery] = useState([]);
  const [isFullScreenImage, setIsFullScreenImage] = useState(false);
  const [currentGalleryApart, setCurrentGalleryApart] = useState([{
    key: '1',
    image: '1',
  }]);
  const [currentImage, setCurrentImage] = useState(
    {
      key: '1',
      image: '1',
    }
  );

  const handleClickImage = (e) => {
    setIsFullScreenImage(!isFullScreenImage);
  }

  useEffect(() => {
    const checkEndPoint = galleryApart.find((item) => {
      return item.endpoint === `${currentPathname}`;
    });

    if (checkEndPoint !== undefined) {
      setCurrentGallery(checkEndPoint);
    }
  }, [currentPathname]);

  useEffect(() => {
    if (currentGallery.galleryApartSlider !== undefined) {
      setCurrentGalleryApart(currentGallery.galleryApartSlider);
      setCurrentImage(currentGallery.galleryApartSlider.slice(0, 1)[0]);
    }
  }, [currentGallery]);


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "transparent" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "transparent" }}
        onClick={onClick}
      />
    );
  }

  // контроль сброса реакт-слик-слайдер на [0]  
  const sliderRef = useRef();
  const handlePathHasChanged = index => {
    console.log('handleOnClick')
    sliderRef.current.slickGoTo(0);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

    appendDots: dots => (
      <div
        className='slide-laptop__dots-wrapper'
      >
        <div className='slide-laptop__dots-container'>
          <ul
            className='slide-laptop__list'
          >
            {dots}
          </ul>
        </div>
      </div >
    ),
    customPaging: i => (
      <div
        className='slide-laptop__item'
      >
        {i + 1}
      </div>
    ),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

  };

  const renderSlideLaptop = currentGalleryApart.map((slide) => {
    return (
      <SlideLaptop
        key={slide.key}
        card={slide}
        onClickImage={handleClickImage}
      />
    )
  });

  useEffect(() => {
    document.body.style.overflow = "auto";
    if (isFullScreenImage) {
      document.body.style.overflow = "hidden";
    }
  }, [isFullScreenImage]);

  // эффект сбрасывает реакт-слик-слайдер на [0]
  useEffect(() => {
    handlePathHasChanged();
  }, [currentPathname]);

  return (
    <article className={`apart__slider-laptop slider-laptop ${isFullScreenImage ? 'slider-laptop_type_fullscreen' : ''}`}>
      <div
        className='slider-laptop__wrapper'
      >
        <Slider {...settings}
          ref={sliderRef}
        >
          {renderSlideLaptop}
        </Slider>
      </div>
    </article>
  );
}

export default SliderLaptop;

