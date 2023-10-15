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

      <Helmet>
        <title>Галерея | Good Vibes Апартаменты</title>
      </Helmet>
    </main>
  );
}

export default Gallery;
