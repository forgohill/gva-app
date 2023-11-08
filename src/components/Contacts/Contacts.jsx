import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'
import './Contacts.css';

const Contacts = () => {
  return (
    <main className='main'>
      <section className='contacts'>
        <h2
          className='contacts__title'>
          Наши <span className='contacts__accent'>контакты</span>
        </h2>
        <ul className="contacts__list">
          <li className="contacts__item">
            <p className="contacts__pharagraph contacts__pharagraph_type_item">
              электронная почта:
            </p>
            <Link
              to="mailto:frozzehill@gmail.com"
              target='_blank'
              rel='noreferrer' className="contacts__link">
              frozzehill@gmail.com
            </Link>
          </li>
          <li className="contacts__item">
            <p className="contacts__pharagraph contacts__pharagraph_type_item">
              телефон:
            </p>
            <Link
              target='_blank'
              rel='noreferrer'
              to="tel:+79625141493"
              className="contacts__link">
              +7(962)514 14 93
            </Link>
          </li>

          <li className="contacts__item">
            <p className="contacts__pharagraph contacts__pharagraph_type_item">
              WhatsApp
            </p>
            <Link
              target='_blank'
              rel='noreferrer'
              to='https://wa.me/message/VRG2MXM22RWQG1'
              className="contacts__link">
              +7(962)514 14 93
            </Link>
          </li>

          <li className="contacts__item">
            <p className="contacts__pharagraph contacts__pharagraph_type_item">
              Telegram
            </p>
            <Link
              target='_blank'
              rel='noreferrer'
              to='https://t.me/belova_rentier_nn'
              className="contacts__link">
              @belova_rentier_nn
            </Link>
          </li>

        </ul>
        <div className='about-us-page__background-rectangle'></div>

      </section>
      <Helmet>
        <title>Контакты | Good Vibes Апартаменты</title>
      </Helmet>
    </main >
  );
}

export default Contacts;


/**
 * 
 * <Link
          target='_blank'
          rel='noreferrer'
          className='popup-callback__link'
          to='https://wa.me/message/VRG2MXM22RWQG1'
          onClick={handleClosePopup}

        >
          Написать в WhatsApp
        </Link>
        <Link
          target='_blank'
          rel='noreferrer'
          className='popup-callback__link'
          to='https://t.me/+79625141493'
          onClick={handleClosePopup}

        >
          Написать в Telegram
        </Link>
 */