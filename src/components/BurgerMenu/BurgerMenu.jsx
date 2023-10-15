import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import './BurgerMenu.css';


const BurgerMenu = () => {
  const [isOnMenu, setIsOnMenu] = useState(false);

  const handleMenu = () => {
    console.log('handleMenu');
    setIsOnMenu(!isOnMenu);
    console.log(isOnMenu);
  }
  const disableMenu = () => {
    setIsOnMenu(false);
  }

  return (
    <nav className='burger-menu'>
      <div
        onClick={handleMenu}
        className={`burger-menu__container ${isOnMenu && 'burger-menu__container_type_active'}`}>
      </div>

      <HashLink
        to='#root'
        className='burger-menu__button-up'
      ></HashLink>

      <div
        className={`burger-menu__cover ${isOnMenu && 'burger-menu__cover_type_active'}`}
        onClick={disableMenu}>
      </div>

      <ul className={`burger-menu__list ${isOnMenu && 'burger-menu__list_type_active'}`}>
        <li className="burger-menu__item">
          <NavLink
            to="/booking"
            onClick={disableMenu}
            className={({ isActive, isPending }) =>
              isPending
                ? "burger-menu__link"
                : isActive
                  ? "burger-menu__link burger-menu__link_type_active"
                  : "burger-menu__link"}>
            Забронировать</NavLink>
        </li>

        <li className="burger-menu__item">
          <NavLink
            to="/about-us"
            onClick={disableMenu}
            className={({ isActive, isPending }) =>
              isPending
                ? "burger-menu__link"
                :
                isActive
                  ? "burger-menu__link burger-menu__link_type_active"
                  : "burger-menu__link"}>
            О нас</NavLink>
        </li>

        <li className="burger-menu__item">
          <NavLink
            to="/gallery"
            onClick={disableMenu}
            className={({ isActive, isPending }) =>
              isPending
                ? "burger-menu__link"
                :
                isActive
                  ? "burger-menu__link burger-menu__link_type_active"
                  : "burger-menu__link"}>
            Галерея</NavLink>
        </li>

        <li className="burger-menu__item">
          <NavLink
            to="/contacts"
            onClick={disableMenu}
            className={({ isActive, isPending }) =>
              isPending
                ? "burger-menu__link"
                :
                isActive
                  ? "burger-menu__link burger-menu__link_type_active"
                  : "burger-menu__link"}>
            Контакты</NavLink>
        </li>
      </ul>
    </nav >
  );
}

export default BurgerMenu;
