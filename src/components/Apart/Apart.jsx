import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import './Apart.css';
import Description from '../Description/Description.jsx'
// import './BookingForm.css';

import YandexMap from '../YandexMap/YandexMap.jsx';

const Apart = ({ insertApart }) => {

  const [isActiveYandexMap, setIsActiveYandexMap] = useState(false);

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
    shortAdress,
    shortInfo,
    coordinatesX,
    coordinatesY,
    description,
    homeInfo,
    parking,
  } = insertApart;

  const handleShowMap = () => {
    console.log('handleShowMap');
    console.log(isActiveYandexMap);
    setIsActiveYandexMap(!isActiveYandexMap);
  }

  return (
    <section className='apart'>
      <div className="apart__container">
        <div className="apart__wrapper-left">

          <div className="apart__wrapper-header">
            <h2 className='apart__title'>{name}</h2>
            <p className='apart__title apart__title_type_bold'>{shortInfo}</p>
            <h3 className='apart__subtitle'>{shortAdress}</h3>

          </div>
          <h4 className='apart__title-list'>О квартире</h4>
          <ul className='apart__list'>
            <li className='apart__item'>
              <p className="apart__pharagraph">
                Количество комнат: <span className='apart__span'>{amountRoom}</span>
              </p>
            </li>
            <li className='apart__item'>
              <p className="apart__pharagraph">
                Общая площадь: <span className='apart__span'>{place}</span>
              </p>
            </li>
            <li className='apart__item'>
              <p className="apart__pharagraph">
                Этаж: <span className='apart__span'>{floor}</span>
              </p>
            </li>
            <li className='apart__item'>
              <p className="apart__pharagraph">
                Балкон или лоджия: <span className='apart__span'>{balcony}</span>
              </p>
            </li>
            <li className='apart__item'>
              <p className="apart__pharagraph">
                Техника: <span className='apart__span'>{technics}</span>
              </p>
            </li>
            <li className='apart__item'>
              <p className="apart__pharagraph">
                Интернет и ТВ: <span className='apart__span'>{communications}</span>
              </p>
            </li>
            <li className='apart__item'>
              <p className="apart__pharagraph">
                Комфорт: <span className='apart__span'>{comfort}</span>
              </p>
            </li>
            <li className='apart__item'>
              <p className="apart__pharagraph">
                Залог: <span className='apart__span'>{deposit}</span>
              </p>
            </li>
          </ul>
          <h4 className='apart__title-list'>Правила</h4>
          <ul className='apart__list'>
            <li>
              <p className="apart__pharagraph">
                Количество гостей: <span className='apart__span'>{amountQuest}</span>
              </p>
            </li>
            <li>
              <p className="apart__pharagraph">
                Можно с детьми: <span className='apart__span'>{likeChildren}</span>
              </p>
            </li>
            <li>
              <p className="apart__pharagraph">
                Можно с животными: <span className='apart__span'>{likeAnimals}</span>
              </p>
            </li>
            <li>
              <p className="apart__pharagraph">
                Можно курить: <span className='apart__span'>{likeSmoke}</span>
              </p>
            </li>
            <li>
              <p className="apart__pharagraph">
                Разрешены вечеринки: <span className='apart__span'>{likeParty}</span>
              </p>
            </li>
            <li>
              <p className="apart__pharagraph">
                Есть отчётные документы: <span className='apart__span'>{accountingDocuments}</span>
              </p>
            </li>
          </ul>

          <h4 className='apart__title-list'>Расположение</h4>
          <ul className='apart__list'>
            <li className='apart__item'>
              <p className="apart__pharagraph">
                {adress}
              </p>
            </li>

            <li className='apart__item'>
              <div className="apart__button-wrapper">
                <button
                  onClick={handleShowMap}
                  className={`apart__button-map ${isActiveYandexMap ? 'apart__button-map_active' : ''}`}>
                  {`${!isActiveYandexMap ? 'Показать на карте ↓' : 'Скрыть карту 	↑'}`}
                </button>
              </div>
            </li>
          </ul>

          <div className={`apart__map-wrapper ${!isActiveYandexMap ? 'apart__map-wrapper_active' : ''}`}>
            <YandexMap
              coordinatesX={coordinatesX}
              coordinatesY={coordinatesY}
            ></YandexMap>
          </div>

          <h4 className='apart__title-list'>Описание</h4>
          <Description
            lot={lot}
          />

          {/* <p className='apart__description'>{description}</p> */}
          <h4 className='apart__title-list'>О доме</h4>
          <ul className='apart__list'>
            <li className='apart__item'>
              <p className="apart__pharagraph">
                Этажей в доме: <span className='apart__span'>{homeInfo}</span>
              </p>
            </li>
            <li className='apart__item'>
              <p className="apart__pharagraph">
                Парковка: <span className='apart__span'>{parking}</span>
              </p>
            </li>
          </ul>
        </div>

        {/*           <h4 className='apart__title-list'>Расположение</h4>
          <ul className='apart__list'>
            <li className='apart__item'>
              <p className="apart__pharagraph">
                {adress}
              </p>
            </li>

            <li className='apart__item'>
              <div className="apart__button-wrapper">
                <button
                  onClick={handleShowMap}
                  className={`apart__button-map ${isActiveYandexMap ? 'apart__button-map_active' : ''}`}>
                  {`${!isActiveYandexMap ? 'Показать на карте ↓' : 'Скрыть карту 	↑'}`}
                </button>
              </div>
            </li>
          </ul> */}


        <div className="apart__wrapper-right">
          <div

            id={`realtycalendar-widget-container-${lot}`}
            className='realty-calendar-widget-wrap'></div>
          <div
            className=''
            id="rc-small-bookings-widget-root"></div>

        </div>
      </div>

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

