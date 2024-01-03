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
            <li className="footer__item">
              <Link
                to="/place/flatsharing"
                className="footer__link">
                Flatsharing
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
            <li className="footer__item footer__item_type_container">
              <Link
                target='_blank'
                rel='noreferrer'
                to='https://wa.me/message/VRG2MXM22RWQG1'
                className="footer__link footer__link_type_icon footer__link_type_whatsapp" />
              <Link
                target='_blank'
                rel='noreferrer'
                to='https://t.me/belova_rentier_nn'
                className="footer__link footer__link_type_icon footer__link_type_telegram" />
              <Link
                target='_blank'
                rel='noreferrer'
                to="https://www.instagram.com/apart.nn/"
                className="footer__link footer__link_type_icon footer__link_type_instagram" />
              <Link
                target='_blank'
                rel='noreferrer'
                to="https://vk.com/apart.nizhnynovgorod"
                className="footer__link footer__link_type_icon footer__link_type_vkontakte" />
            </li>

          </ul>
        </li>
      </ul >
    </footer >
  );
}

export default Footer;
