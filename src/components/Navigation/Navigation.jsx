import React from 'react';
import { NavLink } from 'react-router-dom'
import './Navigation.css';

const Navigation = () => {
  return (

    <nav className="header__navigation navigation">
      <ul className="navigation__list">

        <li className="navigation__item">
          <NavLink
            to="/booking"
            className={({ isActive, isPending }) =>
              isPending
                ? "navigation__link"
                : isActive
                  ? "navigation__link navigation__link_type_active"
                  : "navigation__link"}>
            Забронировать</NavLink>
        </li>

        <li className="navigation__item">
          <NavLink
            to="/about-us"
            className={({ isActive, isPending }) =>
              isPending
                ? "navigation__link"
                :
                isActive
                  ? "navigation__link navigation__link_type_active"
                  : "navigation__link"}>
            О нас</NavLink>
        </li>

        <li className="navigation__item">
          <NavLink
            to="/gallery"
            className={({ isActive, isPending }) =>
              isPending
                ? "navigation__link"
                :
                isActive
                  ? "navigation__link navigation__link_type_active"
                  : "navigation__link"}>
            Галерея</NavLink>
        </li>

        <li className="navigation__item">
          <NavLink to="/contacts"
            className={({ isActive, isPending }) =>
              isPending
                ? "navigation__link"
                :
                isActive
                  ? "navigation__link navigation__link_type_active"
                  : "navigation__link"}>
            Контакты</NavLink>
        </li>


      </ul>
    </nav>

  );
}

export default Navigation;
