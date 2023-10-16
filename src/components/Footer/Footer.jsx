import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
      <ul className="footer__navigation">

        <li className="footer__wrapper">
          <ul className="footer__list">
            Скидки
            <li className="footer__item">
              <Link to="#" className="footer__item">
                Посмотреть предложения!
              </Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__item">
                Фото
              </Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__item">
                Видеосъемка
              </Link>
            </li>
          </ul>
        </li>

        <li className="footer__wrapper">
          <ul className="footer__list">
            Площадки
            <li className="footer__item">
              <Link
                to="https://www.avito.ru/user/7abe81bd51747f6d21ad77a2e15dd89a/profile/all/kvartiry?id=2465832266&src=item&page_from=from_item_card&iid=2465832266&sellerId=7abe81bd51747f6d21ad77a2e15dd89a"
                target='_blank'
                rel='noreferrer'
                className="footer__item">
                Авито
              </Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__item">
                Островок
              </Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__item">
                Суточно.ру
              </Link>
            </li>
          </ul>
        </li>

        <li className="footer__wrapper">
          <ul className="footer__list">
            Компания
            <li className="footer__item">
              <Link to="#" className="footer__item">
                Реквизиты
              </Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__item">
                Оферта
              </Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__item">
                Рекомендации
              </Link>
            </li>
          </ul>
        </li>

        <li className="footer__wrapper">
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
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
