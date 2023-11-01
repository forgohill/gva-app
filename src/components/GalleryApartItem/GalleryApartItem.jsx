import React from 'react';
import './GalleryApartItem.css';

const GalleryApartItem = ({ slide, onCurrenImage, currentImage }) => {
  const { preview } = slide;

  const handleClickImage = () => {
    onCurrenImage(slide);
  };

  return (
    <li
      className='gallery-apart-item'
    >
      <button
        onClick={handleClickImage}
        className={`gallery-apart-item__button ${slide === currentImage ? 'gallery-apart-item__button_type_active' : ''}`}>
        <img
          className='gallery-apart-item__image'
          src={preview}
          alt="" />
      </button>
    </li>
  );
}

export default GalleryApartItem;
