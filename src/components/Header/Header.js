import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo"></Link>
      <nav className="header__links">
        <Link to="/signup" className="header__link">Регистрация</Link>
        <Link to="/signin" className="header__link header__link_signin">Войти</Link>
      </nav>
    </header>
  );
}

export default Header;
