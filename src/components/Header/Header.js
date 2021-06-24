import React from 'react';
import { Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation';


function Header(props) {
  const isAuth = props.auth;
  if (isAuth) {
    return (
      <header className="header">
        <Link to="/" className="header__logo"></Link>
        <nav className="header__links">
          <Navigation />

        </nav>
        <button className={`header__button ${props.isSideMenuOpen ? 'header__button_close' : ''}`} type="button" aria-label="Открыть меню" onClick={props.onOpenSideMenu}></button>
      </header>
    );
  }
  else {
    return (
      <header className="header"  style={{backgroundColor: "#073042"}}>
        <Link to="/" className="header__logo"></Link>
        <nav className="header__links">
          <Link to="/signup" className="header__link">Регистрация</Link>
          <Link to="/signin" className="header__link header__link_signin">Войти</Link>
        </nav>
        <button className={`header__button ${props.isSideMenuOpen ? 'header__button_close' : ''}`} type="button" aria-label="Открыть меню" onClick={props.onOpenSideMenu}></button>
      </header>
    );
  }


}

export default Header;
