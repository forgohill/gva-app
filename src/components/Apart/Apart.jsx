import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import './Apart.css';
import './BookingForm.css';

import YandexMap from '../YandexMap/YandexMap.jsx'
const Apart = ({ insertApart }) => {

  const {
    lot,
    name,
    amountRoom,
    place,
    floor,
    balcony,
    technics,
    communications,
    comfort,
    deposit,
    amountQuest,
    likeChildren,
    likeAnimals,
    likeSmoke,
    likeParty,
    accountingDocuments,
    adress,
    coordinatesX,
    coordinatesY,
    description,
    homeInfo,
    parking,
  } = insertApart;


  return (
    <section className='apart'>
      <h2>{name}</h2>
      <h3>О квартире</h3>
      <ul>
        <li>Количество комнат: <span>{amountRoom}</span></li>
        <li>Общая площадь: <span>{place}</span></li>
        <li>Этаж: <span>{floor}</span></li>
        <li>Балкон или лоджия: <span>{balcony}</span></li>
        <li>Техника: <span>{technics}</span></li>
        <li>Интернет и ТВ: <span>{communications}</span></li>
        <li>Комфорт: <span>{comfort}</span></li>
        <li>Залог: <span>{deposit}</span></li>
      </ul>
      <h3>Правила</h3>
      <ul>
        <li>Количество гостей: <span>{amountQuest}</span></li>
        <li>Можно с детьми: <span>{likeChildren}</span></li>
        <li>Можно с животными: <span>{likeAnimals}</span></li>
        <li>Можно курить: <span>{likeSmoke}</span></li>
        <li>Разрешены вечеринки: <span>{likeParty}</span></li>
        <li>Есть отчётные документы: <span>{accountingDocuments}</span></li>
      </ul>
      <h3>Расположение</h3>
      <p>{adress}</p>
      <YandexMap
        coordinatesX={coordinatesX}
        coordinatesY={coordinatesY}
      ></YandexMap>
      <h3>Описание</h3>
      <p className='apart__description'>{description}</p>
      <h3>О доме</h3>
      <ul>
        <li>Этажей в доме: <span>{homeInfo}</span></li>
        <li>Парковка: <span>{parking}</span></li>
      </ul>

      <div
        id={`realtycalendar-widget-container-${lot}`}
        className='realty-calendar-widget-wrap'></div>
      <div
        className=''
        id="rc-small-bookings-widget-root"></div>

      <Helmet>
        <title>{`${name} | Good Vibes Апартаменты`}</title>
        {/* <!-- скрип виджет календарь --> */}
        {/* <!-- календарь --> */}
        <script
          async='true'
          src={`https://realtycalendar.ru/widgets/script?id=${lot}`}
          type='text/javascript'></script>
        {/* <!-- модуль бронирвоания --> */}
        <script
          type="text/javascript">RC_SMALL_BOOKINGS_WIDGET.init('18a682d5b6e8dd87c30d92cbf743d596');
        </script>

      </Helmet>


    </section>

  );
}

export default Apart;
