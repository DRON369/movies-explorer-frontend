import React from 'react';
import { UserContext } from '../contexts/CurrentUserContext';
import { useContext } from 'react';


function Profile(props) {

  const currentUser = useContext(UserContext);

  function logoutHandler () {
    props.onLogout();
  }

  return (
    <div className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <div className="profile__info">
        <p className="profile__label">Иия</p>
        <p className="profile__field">{currentUser.name}</p>
        <div className="profile__line"></div>
        <p className="profile__label">E-mail</p>
        <p className="profile__field">{currentUser.email}</p>
      </div>
      <div className="profile__links">
        <a className="profile__link" target="_blank" rel="noreferrer" href="http://localhost:3000/profile">Редактировать</a>
        <button className="profile__link profile__link_logout" type="button" onClick={logoutHandler}>Выйти из аккаунта</button>
      </div>
    </div>
  );
}

export default Profile;
