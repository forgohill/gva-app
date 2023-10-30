import React, { useState, useEffect } from 'react';

import GalleryApartItem from '../GalleryApartItem/GalleryApartItem';

import { galleryApart } from '../../utils/galleryApart'
import './GalleryApart.css';

const GalleryApart = ({ currentPathname }) => {
  const [currentGallery, setCurrentGallery] = useState([]);
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
  const [isIndexOf, setIsIndexOf] = useState(0);
  const [isFullScreenImage, setIsFullScreenImage] = useState(false);


  const handleClickImage = () => {
    console.log('handleClickImage');
    setIsFullScreenImage(!isFullScreenImage);
    console.log(isFullScreenImage);
  }

  const handleCurrenImage = (slide) => {
    console.log(slide)
    setCurrentImage(slide);
    setIsIndexOf(currentGalleryApart.indexOf(slide));
  };

  const isGrowingIndex = () => {
    const etalon = isIndexOf + 1;
    if (currentGalleryApart.length === etalon) {
      setIsIndexOf(0);
      return;
    }
    setIsIndexOf(isIndexOf + 1);
  };

  const isReducedIndex = () => {
    if (isIndexOf === 0) {
      setIsIndexOf(currentGalleryApart.length - 1);
      return;
    }
    setIsIndexOf(isIndexOf - 1);
  };

  const renderGalleryItem = currentGalleryApart.map((slide) => {
    return (<GalleryApartItem
      key={slide.key}
      slide={slide}
      onCurrenImage={handleCurrenImage}
      currentImage={currentImage}
    />)
  });

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

  useEffect(() => {
    if (currentGalleryApart !== undefined) {
      setCurrentImage(currentGalleryApart[isIndexOf]);
    }
  }, [isIndexOf]);


  return (
    <>

      <div>
        <button
          onClick={() => {
            console.log(currentGalleryApart);
          }}
        >
          ----currentGalleryApart----
        </button>
      </div>

      {currentGalleryApart.length !== 0
        ?
        <div
          style={{
            backgroundImage: `url(${currentImage.image})`,
            width: "600px",
            minHeight: "450px"
          }}
          className='gallery-apart__header-image-contaner'>
          <img
            onClick={handleClickImage}
            className='gallery-apart__header-image'
            src={currentImage.image} alt="" />

          <button
            onClick={isReducedIndex}
            className='gallery-apart__button gallery-apart__button_type_left'
          ></button>
          <button
            onClick={isGrowingIndex}
            className='gallery-apart__button gallery-apart__button_type_right'
          ></button>
        </div >
        : ''}

      <ul className='apart__gallery-apart gallery-apart'>
        {renderGalleryItem}
      </ul>

    </>
  );
}

export default GalleryApart;


/**
 * 
 * 
 * 
 * 
  const renderSlide = slidesMain.map((slide) => {
    return (
      <SlideMain
        key={slide.lot}
        card={slide}
        relationWidht={relationWidht}
      />
    )
  });



        <div>
        <button
          onClick={() => {
            console.log(currentPathname);
          }}
        >
          ----currentPathname----
        </button>
      </div>

      <div>

        <button
          onClick={() => {
            console.log(currentGalleryApart);
          }}
        >
          ----currentGalleryApart----
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            console.log(currentGallery);
          }}
        >
          ----currentGallery----
        </button>
      </div>


      
      <div>
        <button
          onClick={() => {
            isReducedIndex();
            console.log(`${isIndexOf} — индекс масива`);
          }}
        >
          ----Изменяем индекс массива----
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            console.log(currentGalleryApart);
            console.log(currentGalleryApart.length);
          }}
        >
          ----currentGalleryApart----
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            console.log(currentImage);
          }}
        >
          ----currentImage----
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            console.log(isIndexOf);
          }}
        >
          ----isIndexOf----
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            isReducedIndex();
            console.log(`${isIndexOf} — индекс масива`);
          }}
        >
          ----Изменяем индекс массива----
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            console.log(currentGalleryApart);
            console.log(currentGalleryApart.length);
          }}
        >
          ----currentGalleryApart----
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            console.log(currentImage);
          }}
        >
          ----currentImage----
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            console.log(isIndexOf);
          }}
        >
          ----isIndexOf----
        </button>
      </div>


 */