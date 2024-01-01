import React, {
  useState,
  useEffect
} from 'react';


import {
  Routes,
  Route,
  useLocation,
  // useNavigate,
  // Navigate
} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import './App.css';
import './BookingForm.css';
import './ApartPageBookingForm.css';
import './RealtyCalendar.css';


import Header from '../Header/Header';
import Main from '../Main/Main.jsx';
import ApartPage from '../ApartPage/ApartPage';
import Booking from '../Booking/Booking';
import AboutUs from '../AboutUs/AboutUs';
import Gallery from '../Gallery/Gallery';
import Contacts from '../Contacts/Contacts';
import Sales from '../Sales/Sales.jsx';
import Place from '../Place/Place.jsx';
import Requisites from '../Requisites/Requisites.jsx';
import Offer from '../Offer/Offer.jsx';
import Recommendations from '../Recommendations/Recommendations.jsx';
import Filming from '../Filming/Filming.jsx';

import Footer from '../Footer/Footer.jsx';


import VideoPresentation from '../VideoPresentation/VideoPresentation.jsx';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';

const App = () => {
  const { pathname } = useLocation();

  const [isPopupCallback, setIsPopupCallback] = useState(false);




  const handleOpenPopupCallback = () => {
    setIsPopupCallback(!isPopupCallback);
  }

  const closePopup = () => {
    setIsPopupCallback(false);
  }

  // при смене пути прокручивает наверх
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='page'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Main
            onOpenPopupCallback={handleOpenPopupCallback}
            onClosePopup={closePopup}
            onPopupCallback={isPopupCallback}
          />} />
        <Route
          path='/booking'
          element={<Booking />}
        />



        <Route
          path='/about-us'
          element={<AboutUs />}
        />
        <Route
          path='/gallery'
          element={<Gallery></Gallery>}
        />
        <Route
          path='/contacts'
          element={<Contacts />}
        />
        <Route
          path='/apartment/*'
          element={<ApartPage></ApartPage>}
        />

        <Route
          path='/video-presentation'
          element={<VideoPresentation></VideoPresentation>}
        />
        <Route
          path='/sales'
          element={
            <Sales></Sales>
          } />
        <Route
          path='/place/place-ostrovok'
          element={
            <Place></Place>
          } />
        <Route
          path='/place/place-sutochnoru'
          element={
            <Place
              pathname={pathname}

            ></Place>
          } />
        <Route
          path='/requisites'
          element={
            <Requisites></Requisites>
          } />
        <Route
          path='/offer'
          element={
            <Offer></Offer>
          } />
        <Route
          path='/recommendations'
          element={
            <Recommendations></Recommendations>
          } />
        <Route
          path='/filming'
          element={
            <Filming></Filming>
          } />

        <Route
          path='*'
          element={
            <PageNotFound></PageNotFound>
          } />
      </Routes>
      <Footer />



      <Helmet>
        <title>Good Vibes Апартаменты</title>
      </Helmet>
    </div>
  );
}

export default App;
