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
              <p className="advantage__pharagraph">Provide the best service and very fast response.</p>
            </div>
          </Link>
        </li>
        <li className="advantage__item">
          <Link href="" className="advantage__link advantage__link_number_two">
            <span className="advantage__number">2</span>
            <div className="advantage__wrapper">
              <h3 className="advantage__subtitle">Welcome набор</h3>
              <p className="advantage__pharagraph">With a 5-year warranty provided, providing satisfying service.</p>
            </div>
          </Link>
        </li>
        <li className="advantage__item">
          <Link href="" className="advantage__link advantage__link_number_three">
            <span className="advantage__number">3</span>
            <div className="advantage__wrapper">
              <h3 className="advantage__subtitle">Современный дизайн</h3>
              <p className="advantage__pharagraph">The room looks beautiful with a blend of contemporary and attractive
                design.</p>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Advantage;
