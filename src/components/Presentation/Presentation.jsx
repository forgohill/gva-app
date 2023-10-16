import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import './Presentation.css';


const Presentation = () => {
  const [mouseEnter, setMouseEnter] = useState(false);


  const handleMouseEnter = () => {
    setMouseEnter(true);
  }

  const handleMouseLeave = () => {
    setMouseEnter(false);
  }

  return (
    <section className='presentation'>
      <div className="presentation__content">
        <p className="presentation__subtitle">
          Нижний Новгород
        </p>
        <h2 className="presentation__title">
          Посуточная аренда квартир
        </h2>
        <div className="presentation__container">
          <HashLink
            to='#apartment'
            className='presentation__hash-link'>
            Квартиры
          </HashLink>
          <div className="presentation__wrapper">
            <Link
              to='/video-presentation'
              className={`presentation__button-play ${mouseEnter && 'presentation__button-play_type_active'}`}
            ></Link>
            <Link
              to='/video-presentation'
              className='presentation__link'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >О наших объектах</Link>
          </div>
        </div>
      </div>
      <div className='presentation__background-rectangle'></div>
      <div className='presentation__background-image'></div>
    </section>
  );
}

export default Presentation;
