import React from 'react';
import { Link } from 'react-router-dom'
import './Advantage.css';

const Advantage = () => {
  return (
    <section className='advantage'>
      <h2 className="advatage__title">
        Почему гости выбирают
        <p className='advatage__space'></p>
        <span className="advatage__accent">Good Vibes Апартаменты</span>
      </h2>
      <ul className="advantage__list">
        <li className="advantage__item">
          <Link href="" className="advantage__link advantage__link_number_one">
            <span className="advantage__number">1</span>
            <div className="advantage__wrapper">
              <h3 className="advantage__subtitle">Бесконтактное заселение</h3>
              <p className="advantage__pharagraph">Во всех наших квартирах установлены замки электорнные Flatsharing, гость получет инструкции и производит самостоятельное заселение.</p>
            </div>
          </Link>
        </li>
        <li className="advantage__item">
          <Link href="" className="advantage__link advantage__link_number_two">
            <span className="advantage__number">2</span>
            <div className="advantage__wrapper">
              <h3 className="advantage__subtitle">Welcome набор</h3>
              <p className="advantage__pharagraph">Помимо стандартного набора: одноразовых тапочек, зебной пасты и шапочек для душа. Мы угощаем гостей чаем или кофе с «вкусняшками»</p>
            </div>
          </Link>
        </li>
        <li className="advantage__item">
          <Link href="" className="advantage__link advantage__link_number_three">
            <span className="advantage__number">3</span>
            <div className="advantage__wrapper">
              <h3 className="advantage__subtitle">Современный дизайн</h3>
              <p className="advantage__pharagraph">При создании наших квартир мы привлекали услуги дизайнера, и если вам нравятся наши интерьеры, мы всегда можем с вами контактом нашего дизайнера.</p>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Advantage;
