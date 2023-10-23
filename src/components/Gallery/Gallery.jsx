import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Apartments from '../Apartments/Apartments.jsx';
import './Gallery.css';

const Gallery = () => {
  return (
    <main className='main'>
      <Apartments />
      <Helmet>
        <title>Галерея | Good Vibes Апартаменты</title>
      </Helmet>
      <div className='booking-module__background-rectangle'></div>
    </main>
  );
}

export default Gallery;
