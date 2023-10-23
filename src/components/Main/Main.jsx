import React from 'react';
import './Main.css';

import Presentation from '../Presentation/Presentation.jsx';
import AboutUsMain from '../AboutUsMain/AboutUsMain.jsx';
import Advantage from '../Advantage/Advantage.jsx';
import Apartments from '../Apartments/Apartments.jsx';
import Callback from '../Callback/Callback.jsx';
import PopUpCallback from '../PopUpCallback/PopUpCallback.jsx';

const Main = ({ onOpenPopupCallback, onClosePopup, onPopupCallback }) => {
  return (
    <main className='main'>
      <Presentation />
      <AboutUsMain />
      <Advantage />
      <Apartments />
      <Callback
        onOpenPopupCallback={onOpenPopupCallback}
      />
      <PopUpCallback
        onPopupCallback={onPopupCallback}
        onClosePopup={onClosePopup}
      />
    </main >
  );
}

export default Main;
