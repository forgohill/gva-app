import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
      <ul className="footer__navigation">

        <li className="footer__wrapper">

          <ul className="footer__list">
            <li className="footer__item">
              <h4 className="footer__title">Скидки</h4>
            </li>
            <li className="footer__item">
              <Link
                to="/sales"
                className="footer__link">
                Посмотреть предложения!
              </Link>
            </li>
            <li className="footer__item">
              <Link
                to="/filming"
                className="footer__link">
                Фотосъемка
              </Link>
            </li>
            <li className="footer__item">
              <Link
                to="/filming"
                className="footer__link">
                Видеосъемка
              </Link>
            </li>
          </ul>
        </li>

        <li className="footer__wrapper">
          <ul className="footer__list">

            <li className="footer__item">
              <h4 className="footer__title">Площадки</h4>
            </li>
            <li className="footer__item">
              <Link
                to="https://www.avito.ru/user/7abe81bd51747f6d21ad77a2e15dd89a/profile/all/kvartiry?id=2465832266&src=item&page_from=from_item_card&iid=2465832266&sellerId=7abe81bd51747f6d21ad77a2e15dd89a"
                target='_blank'
                rel='noreferrer'
                className="footer__link">
                Авито
              </Link>
            </li>
            <li className="footer__item">
              <Link
                to="/place/place-ostrovok"
                className="footer__link">
                Островок
              </Link>
            </li>
            <li className="footer__item">
              <Link
                to="/place/place-sutochnoru"
                className="footer__link">
                Суточно.ру
              </Link>
            </li>

          </ul>
        </li>

        <li className="footer__wrapper">
          <ul className="footer__list">
            <li className="footer__item">
              <h4 className="footer__title">Компания</h4>
            </li>
            <li className="footer__item">
              <Link
                to="/requisites"
                className="footer__link">
                Реквизиты
              </Link>
            </li>
            <li className="footer__item">
              <Link
                to="/offer"
                className="footer__link">
                Оферта
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/recommendations" className="footer__link">
                Рекомендации
              </Link>
            </li>
          </ul>
        </li>

        <li className="footer__wrapper">
          <ul className="footer__list">


            <li className="footer__item">
              <h4 className="footer__title">Контакты</h4>
            </li>

            <li className="footer__item">
              <Link to="mailto:frozzehill@gmail.com" className="footer__link">
                frozzehill@gmail.com
              </Link>
            </li>
            <li className="footer__item">
              <Link
                to="tel:+79625141493" className="footer__link">
                +7(962)514 14 93
              </Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__link">
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
