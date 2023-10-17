import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUsMain.css';

const AboutUsMain = () => {
  return (
    <section className='about-us-main'>
      <div className="about-us-main__wrapper">
        <div className="about-us-main__content">
          <h2 className='about-us-main__title'>
            Про
            <span className="about-us-main__accent">
              Good Vibes Апартаменты
            </span>
          </h2>
          <p className='about-us-main__pharagraph'>
            Мы предлагаем широкий выбор квартир в разных районах города, чтобы каждый мог найти идеальный вариант для своего пребывания. Наша миссия - сделать ваше проживание максимально удобным и беззаботным.
          </p>
          <Link
            to='/about-us'
            className='about-us-main__link'
          >Читать еще</Link>
        </div>
        <div className="about-us-main__image"></div>
        <div className="about-us-main__rectangle_one"></div>
        <div className="about-us-main__rectangle_two"></div>
      </div>
    </section>
  );
}

export default AboutUsMain;
