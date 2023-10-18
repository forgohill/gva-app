import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './SlideMain.css';


const SlideMain = ({ card, relationWidht }) => {

  const [mountMouse, setMountMouse] = useState(false);

  const {
    name,
    slide,
    endpoint,
    price,
  } = card;

  const navigate = useNavigate();

  const replaceToCard = () => {
    navigate(`/apartment/${endpoint}`, { replace: true });
  };
  const onMountMous = () => {
    setMountMouse(true);
  }
  const reMountMous = () => {
    setMountMouse(false);
  }
  return (

    <div className="slider-main__item slide-main">

      {relationWidht <= 1024
        ?
        < Link to={`/apartment/${endpoint}`} className="slide-main__link">
          <img src={slide} alt="" className="slide-main__image"></img>
        </Link>
        :
        < div
          onMouseEnter={onMountMous}
          onMouseLeave={reMountMous}
          className="slide-main__link">
          <img src={slide} alt="" className="slide-main__image"></img>
          {mountMouse
            ?
            <div className="slide-main__btn-wrapper">
              <button
                className='slide-main__button'
                onClick={replaceToCard}>Узнать больше...</button>
            </div>
            : ''
          }
        </div>
      }
      <Link
        to={`/apartment/${endpoint}`}
        className="slide-main__link">
        <h3 className="slide-main__subtitle">
          {name}
        </h3>
      </Link>
      <Link
        to={`/apartment/${endpoint}`}
        className="slide-main__link">
        <p className="slide-main__price">{price}</p>
      </Link>
    </div >
  );
}

export default SlideMain;
