import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './Header.css';

const Header = () => {
  return (
    <header className="header">

      <h1 className="header__logo">
        <Link
          className='header__logolink'
          to="/">Good Vibes Апартаменты</Link>
      </h1>
      <nav className="header__navigation">
        <ul className="header__list">

          <li className="header__item">
            <NavLink
              to="/booking"
              className={({ isActive, isPending }) =>
                isPending
                  ? "header__link"
                  : isActive
                    ? "header__link header__link_type_active"
                    : "header__link"}>
              Забронировать</NavLink>
          </li>

          <li className="header__item">
            <NavLink
              to="/about-us"
              className={({ isActive, isPending }) =>
                isPending
                  ? "header__link"
                  :
                  isActive
                    ? "header__link header__link_type_active"
                    : "header__link"}>
              О нас</NavLink>
          </li>

          <li className="header__item">
            <NavLink
              to="/gallery"
              className={({ isActive, isPending }) =>
                isPending
                  ? "header__link"
                  :
                  isActive
                    ? "header__link header__link_type_active"
                    : "header__link"}>
              Галерея</NavLink>
          </li>

          <li className="header__item">
            <NavLink to="/contacts"
              className={({ isActive, isPending }) =>
                isPending
                  ? "header__link"
                  :
                  isActive
                    ? "header__link header__link_type_active"
                    : "header__link"}>
              Контакты</NavLink>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
