import React from 'react';
import './Callback.css';

const Callback = () => {
  return (
    <section className='callback'>

      <div className="callback__wrraper">
        <h1 className="callback__title">
          <span className="callback__accent">Обратный</span>
          <p className='callback__space'></p>
          звонок</h1>
        <button
          onClick={() => {
            console.log('onClick__Заказать')
          }}
          className='callback__button'>
          Заказать
        </button>
      </div>
      <div className='callback__image'></div>
    </section>
  );
}

export default Callback;
