import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';



import { apartmentsPage } from '../../utils/constantsSource.js';
import Apart from '../Apart/Apart.jsx';
import PageNotFoundApart from '../PageNotFoundApart/PageNotFoundApart.jsx';
import './ApartPage.css';



const ApartPage = () => {
  const { pathname } = useLocation();

  const pathnameSlice = pathname.slice(11);
  const [insertApart, setInsertApart] = useState({ name: '' });
  const [isApartAccess, setIsApartAccess] = useState(false);

  useEffect(() => {
    setInsertApart(apartmentsPage.find((item) => {
      if (item.pathname === `${pathnameSlice}`) {
        setIsApartAccess(true);
      }
      return item.pathname === `${pathnameSlice}`;
    }));
  }, [pathnameSlice]);

  return (
    <main className='main'>
      {isApartAccess
        ? <Apart
          insertApart={insertApart}
        ></Apart>
        : <PageNotFoundApart></PageNotFoundApart>}
    </main >
  );
}

export default ApartPage;
