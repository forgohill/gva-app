import React from 'react';
import SliderMain from '../SliderMain/SliderMain.jsx';

import './Apartments.css';

const Apartments = () => {
  return (
    <section
      className='apartment'
      id='apartment'>
      <h2 className="apartment__title">
        Актуальные цены&nbsp;и&nbsp;даты
        <p className='advatage__space'></p>
        <span className="apartment__accent">Апартаменты</span>
      </h2>
      <SliderMain></SliderMain>
    </section>
  );
}

export default Apartments;
