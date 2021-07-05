import React from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../contexts/CurrentUserContext';
import { useContext } from 'react';

function SideMenu(props) {
  const isOpen = props.isOpen;
  const currentUser = useContext(UserContext);
  return (
    <div className={`side-menu ${isOpen ? 'side-menu_opened' : ''}`}>
      <div className="side-menu__body">
        <ul className="side-menu__links">
          <li className="side-menu__link-item">
            <Link to="/" className="side-menu__link" onClick={props.onOpenSideMenu} >Главная</Link>
          </li>
          <li className="side-menu__link-item">
            <Link to="/movies" className="side-menu__link side-menu__link_active" onClick={props.onOpenSideMenu}>Фильмы</Link>
          </li>
          <li className="side-menu__link-item">
            <Link to="/saved-movies" className="side-menu__link" onClick={props.onOpenSideMenu}>Сохранённые фильмы</Link>
          </li>
        </ul>
        <Link to="/profile" className="side-menu__link side-menu__link_account" onClick={props.onOpenSideMenu}>{currentUser.name} <div className="side-menu__icon"></div></Link>
      </div>
    </div>
  );
}

export default SideMenu;
