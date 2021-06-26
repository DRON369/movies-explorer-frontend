import React from 'react';
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navigation__links">
        <Link to="/movies" className="navigation__link navigation__link_active">Фильмы</Link>
        <Link to="/saved-movies" className="navigation__link">Сохранённые фильмы</Link>
        <Link to="/profile" className="navigation__link">Аккаунт <div className="navigation__icon"></div></Link>
      </nav>
    </div>
  );
}

export default Navigation;
