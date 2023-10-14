import React, {
  // useState,
  // useEffect
} from 'react';


import {
  Routes,
  Route,
  // useLocation,
  // useNavigate,
  // Navigate
} from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main.jsx';
import ApartPage from '../ApartPage/ApartPage';
import Booking from '../Booking/Booking'
import AboutUs from '../AboutUs/AboutUs'
import Gallery from '../Gallery/Gallery'
import Contacts from '../Contacts/Contacts'
import Footer from '../Footer/Footer.jsx';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';

const App = () => {

  return (
    <div className='page'>
      <Header></Header>
      <Routes>
        <Route
          path='/'
          element={<Main></Main>} />
        <Route
          path='/booking'
          element={<Booking></Booking>}
        />
        <Route
          path='/about-us'
          element={<AboutUs></AboutUs>}
        />
        <Route
          path='/gallery'
          element={<Gallery></Gallery>}
        />
        <Route
          path='/contacts'
          element={<Contacts></Contacts>}
        />
        <Route
          path='/apartment/*'
          element={<ApartPage></ApartPage>}
        />
        <Route
          path='*'
          element={
            <PageNotFound></PageNotFound>
          } />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
