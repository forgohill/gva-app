import React from 'react';
import {
  Link,
  // NavLink
} from 'react-router-dom';
import Navigation from '../Navigation/Navigation'

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">
        <Link
          className='header__logolink'
          to="/">Good Vibes Апартаменты</Link>
      </h1>
      <Navigation></Navigation>
    </header>
  );
}

export default Header;
