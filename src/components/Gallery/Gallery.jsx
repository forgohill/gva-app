import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './Gallery.css';

const Gallery = () => {
  const [isBook, setIsBook] = useState('');

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsBook(document.querySelector('.realty-calendar-booking-title'));
      console.log('Произошла проверка на доступноть формы заявки для бронирования!');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    if (isBook === null) {
      window.location.reload()
    }
    return () => {
      // cleanup
    };
  }, [isBook]);

  return (
    <main className='main'>
      Gallery
      <h1>Green apartment city view</h1>
      <div id='realtycalendar-widget-container-136044' className='realty-calendar-widget-wrap'></div>
      <div id='realtycalendar-booking-widget-container-136044' className='realty-calendar-bookin-widget-wrap'></div>
      <Helmet>
        <title>Gallery | Good Vibes Апартаменты</title>
        {/* <!-- скрип виджет календарь --> */}
        {/* <!-- календарь --> */}
        <script
          async='true'
          src='https://realtycalendar.ru/widgets/script?id=136044' type='text/javascript'></script>
        {/* <!-- форма бронирвоания --> */}
        <script
          async='true'
          src='https://realtycalendar.ru/widgets/booking?id=136044' type='text/javascript'></script>
      </Helmet>


    </main>
  );
}

export default Gallery;
