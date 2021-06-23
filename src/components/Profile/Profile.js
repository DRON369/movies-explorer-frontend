import React from 'react';


function Profile() {
  return (
    <div className="profile">
      <h1 className="profile__title">Привет, Андрей!</h1>
      <div className="profile__info">
        <p className="profile__label">Иия</p>
        <p className="profile__field">Андрей</p>
        <div className="profile__line"></div>
        <p className="profile__label">E-mail</p>
        <p className="profile__field">dron@ya.ru</p>
      </div>
      <div className="profile__links">
        <a className="profile__link" href="http://localhost:3000/profile">Редактировать</a>
        <a className="profile__link profile__link_logout" href="http://localhost:3000/profile">Выйти из аккаунта</a>
      </div>
    </div>
  );
}

export default Profile;
