import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFoundApart.css';

const PageNotFoundApart = () => {
  return (
    <section className='pnf-apart'>
      <h2>PageNotFoundApart</h2>
      <div className='page-not-found'>
        {/* <h1 className='page-not-found__title'>404</h1> */}
        <h2 className='page-not-found__subtitle'>Страница не найдена</h2>
        <Link
          to={-1}
          className='page-not-found__link'
        >Назад</Link>
      </div >
    </section>
  );
}

export default PageNotFoundApart;
