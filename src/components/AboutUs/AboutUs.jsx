import React from 'react';
import { Helmet } from 'react-helmet-async';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <main className='main'>
      <section className='about-us-page'>

        <h2 className="about-us-page__title">О нас</h2>
        <p className='about-us-page__pharagraph'>
          <b>&laquo;Good Vibes Апартаменты&raquo;</b> была основана в&nbsp;2022 году с&nbsp;целью предоставления комфортного и&nbsp;уютного жилья для наших гостей.
        </p>
        <p className='about-us-page__pharagraph'>
          Мы&nbsp;предлагаем широкий выбор квартир в&nbsp;разных районах города, чтобы каждый мог найти идеальный вариант для своего пребывания. Наша миссия&nbsp;&mdash; сделать ваше проживание максимально удобным и&nbsp;беззаботным.
        </p>
        <p className='about-us-page__pharagraph'>
          Мы&nbsp;тщательно следим за&nbsp;чистотой и&nbsp;комфортом наших квартир, регулярно проводя проверки и&nbsp;обновления. Все наши квартиры оснащены современной бытовой техникой, высокоскоростным интернетом и&nbsp;всем необходимым для комфортного проживания.
        </p>
        <p className='about-us-page__pharagraph'>
          Наши преимущества:
        </p>
        <ul className="about-us-page__list">
          <li className="about-us-page__item">
            <p className='about-us-page__pharagraph'>
              <b>Широкий выбор квартир:</b> мы&nbsp;предлагаем квартиры в&nbsp;разных районах и&nbsp;ценовых категориях, чтобы удовлетворить потребности каждого гостя.
            </p>
          </li>
          <li className="about-us-page__item">
            <p className='about-us-page__pharagraph'>
              <b>Безопасность:</b> все наши квартиры проходят проверку на&nbsp;безопасность и&nbsp;соответствие стандартам качества. Мы&nbsp;гарантируем конфиденциальность и&nbsp;защиту ваших личных данных.
            </p>
          </li>
          <li className="about-us-page__item">
            <p className='about-us-page__pharagraph'>
              <b>Поддержка 24/7:</b> наши менеджеры всегда готовы помочь вам с&nbsp;выбором квартиры, ответить на&nbsp;вопросы и&nbsp;решить любые возникающие проблемы.
            </p>
          </li>
          <li className="about-us-page__item">
            <p className='about-us-page__pharagraph'>
              <b>Гибкость:</b> мы&nbsp;предлагаем различные варианты бронирования и&nbsp;оплаты, чтобы сделать ваше пребывание максимально комфортным.
            </p>
          </li>
          <li className="about-us-page__item">
            <p className='about-us-page__pharagraph'>
              <b>Скидки и&nbsp;акции:</b> для постоянных клиентов и&nbsp;при длительном бронировании мы&nbsp;предлагаем специальные скидки и&nbsp;акции.
            </p>
          </li>
        </ul>
        <p className='about-us-page__pharagraph about-us-page__pharagraph_type_center'>
          С&nbsp;нами ваше пребывание в&nbsp;городе станет приятным и&nbsp;беззаботным!</p>
        <div className='about-us-page__background-rectangle'></div>
      </section>
      <Helmet>
        <title>О нас | Good Vibes Апартаменты</title>
      </Helmet>
    </main>
  );
}

export default AboutUs;
