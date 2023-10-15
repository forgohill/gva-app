import React from 'react';
import './Main.css';

import Presentation from '../Presentation/Presentation.jsx';
import AboutAsMain from '../AboutAsMain/AboutAsMain.jsx';
import Advantage from '../Advantage/Advantage.jsx';
import Apartments from '../Apartments/Apartments.jsx';
import Callback from '../Callback/Callback.jsx';

const Main = () => {
  return (
    <main className='main'>
      <Presentation></Presentation>
      <AboutAsMain></AboutAsMain>
      <Advantage></Advantage>
      <Apartments></Apartments>
      <Callback></Callback>
    </main >
  );
}

export default Main;
