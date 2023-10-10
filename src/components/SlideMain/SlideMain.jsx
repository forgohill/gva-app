import React from 'react';
import { Link } from 'react-router-dom'
import './SlideMain.css';

const SlideMain = ({ card }) => {
  // console.log(card)
  const {
    name,
    slide,
    endpoint,
    price,

  } = card;
  return (
    <li className="slider-main__item slide-main">
      <Link to={`/apartment/${endpoint}`} className="slide-main__link">
        <img src={slide} alt="" className="slide-main__image"></img>
      </Link>
      <Link to="/apartment/art-роint-араrtmеnt" className="slide-main__link">
        <h3 className="slide-main__subtitle">
          {name}
        </h3>
      </Link>
      <Link to="/apartment/art-роint-араrtmеnt" className="slide-main__link">
        <p className="slide-main__price">{price}</p>
      </Link>
    </li>
  );
}

export default SlideMain;
