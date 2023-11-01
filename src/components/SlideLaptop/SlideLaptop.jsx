import React from 'react';

import './SlideLaptop.css';

const SlideLaptop = ({ card, onClickImage }) => {
  const { image } = card;

  return (
    <div
      className='slide-laptop'
    >
      <img
        className='slide-laptop__image'
        onClick={onClickImage}
        src={image} alt="" />
    </div>
  );
}

export default SlideLaptop;
