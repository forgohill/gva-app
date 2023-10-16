import React from 'react';
import './Main.css';

import Presentation from '../Presentation/Presentation.jsx';
import AboutUsMain from '../AboutUsMain/AboutUsMain.jsx';
import Advantage from '../Advantage/Advantage.jsx';
import Apartments from '../Apartments/Apartments.jsx';
import Callback from '../Callback/Callback.jsx';

const Main = () => {
  return (
    <main className='main'>
      <Presentation></Presentation>
      <AboutUsMain></AboutUsMain>
      <Advantage></Advantage>
      <Apartments></Apartments>
      <Callback></Callback>
    </main >
  );
}

export default Main;
