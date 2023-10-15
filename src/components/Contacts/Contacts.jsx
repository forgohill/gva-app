import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'
import './Contacts.css'

const Contacts = () => {
  return (
    <main className='main'>
      Contacts
      <ul className="footer__list">
        Контакты
        <li className="footer__item">
          <Link to="#" className="footer__item">
            frozzehill@gmail.com
          </Link>
        </li>
        <li className="footer__item">
          <Link to="#" className="footer__item">
            +7(962)514 14 93
          </Link>
        </li>
        <li className="footer__item">
          <Link to="#" className="footer__item">
            Нижний Новгород 603116 А/Я ~
          </Link>
        </li>
      </ul>
      <Helmet>
        <title>Контакты | Good Vibes Апартаменты</title>
      </Helmet>
    </main >
  );
}

export default Contacts;
