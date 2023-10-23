import React from 'react';

import { Link } from 'react-router-dom'
import './PopUpCallback.css';

const PopUpCallback = ({ onPopupCallback, onClosePopup }) => {

  const handleClosePopup = () => {
    console.log('handleClosePopup');
    onClosePopup();
  }

  return (
    <section className={`popup-callback ${onPopupCallback ? 'popup-callback_active' : ''}`}>
      <div className="popup-callback__wrapper">
        <h4 className='popup-callback__title'>Обратный звонок</h4>
        <p className='popup-callback__pharagraph'>Для того чтобы связаться с нами напишите пожалуйста в WhatsApp, или Telegram сообщение с датами желаемого бронирования.</p>
        <Link
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
          to='https://t.me/belova_rentier_nn'
          onClick={handleClosePopup}

        >
          Написать в Telegram
        </Link>
        <button
          onClick={handleClosePopup}
          type="button"
          className='popup-callback__close-button'
        >

        </button>
      </div>
      <div
        className='popup-callback__background-cover'
        onClick={handleClosePopup}
      ></div>


    </section >
  );
}

export default PopUpCallback;
