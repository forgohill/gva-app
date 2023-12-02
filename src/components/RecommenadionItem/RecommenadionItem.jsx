
import React, { useState, useEffect } from 'react';
import './RecommenadionItem.css'
const RecommenadionItem = ({ recommenadions }) => {
  const { image } = recommenadions;

  const [isFullText, setIsFullText] = useState(false);
  const [isOnButtonFullText, setIsOnButtonFullText] = useState(true);

  const [isIcons, setIsIcons] = useState(0);


  let randomIndex = Math.floor(Math.random() * image.length);

  const handleIsFullText = () => {
    setIsFullText(!isFullText);
    setIsOnButtonFullText(!isOnButtonFullText);
  }

  useEffect(() => {
    if (isIcons === 0) {
      setIsIcons(randomIndex);
    }
  }, [isIcons]);

  useEffect(() => {
    if (recommenadions.text.slice(0, 90).length === recommenadions.text.length) {
      setIsOnButtonFullText(!isOnButtonFullText);
    }
  }, []);
  return (
    <li
      className='recommenadion-place__item recommenadion-item'
    >
      <div
        className='recommenadion-item__image-wrapper'
      >
        <img
          src={image[isIcons].image}
          alt=""
          className='recommenadion-item__image'
        />
      </div>
      <div>
        <p className='recommenadion-item__pharagraph'>

          {
            isFullText
              ? recommenadions.text
              : recommenadions.text.slice(0, 90)
          }



          {isOnButtonFullText
            ? <>
              {isFullText
                ? ''
                : '...'}
            </>
            : ''
          }




        </p>

        {
          isOnButtonFullText
            ? <button

              className='recommenadion-item__button'
              onClick={handleIsFullText}
            >читать полностью...</button>
            : ''
        }



        {/* 
        <button
          onClick={
            () => {
              console.log(isOnButtonFullText);
              console.log(recommenadions.text.length);
              console.log(recommenadions.text.slice(0, 150).length);
            }
          }>
          isOnButtonFullText
        </button> */}

      </div>
    </li>
  );
}

export default RecommenadionItem;
