import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo-textstyle">
        <Link
          className='header__logolink-textstyle'
          to="/"><span className='header__logo-small'></span><span className="header__logo-text">Good <span className="headerlogo-text_type_accent">Vibes</span></span> <span className="header__logo-text-accent">Апартаменты</span>
        </Link>
      </h1>
      <Navigation></Navigation>
      <BurgerMenu></BurgerMenu >
    </header>
  );
}

export default Header;
