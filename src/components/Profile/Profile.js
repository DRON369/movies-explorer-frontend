import React, { useEffect, useState } from 'react';
import { UserContext } from '../contexts/CurrentUserContext';
import { useContext } from 'react';

function Profile(props) {

  const currentUser = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [editEnable, setEditEnable] = useState(false);

  function usernameHandler(event) {
    setUsername(event.target.value);
  }

  function emailHandler(event) {
    setEmail(event.target.value);
  }

  function logoutHandler() {
    props.onLogout();
  }

  function editProfileHandler() {
    setEditEnable(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onEditUserInfo({ username, email });
    setEditEnable(false);
  }

  useEffect(() => {
    setUsername(currentUser.email);
    setEmail(currentUser.name);
  }, [])

  return (
    <div className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <form className="profile__info" method="POST" name="profileEdit" onSubmit={handleSubmit}>
        <p className="profile__label">Иия</p>
        <input
          className={`profile__input ${editEnable ? 'profile__input_enabled' : ''}`}
          id="username"
          type="text"
          name="username"
          required
          placeholder="Введите имя"
          onChange={usernameHandler}
          defaultValue={currentUser.name}
          disabled={!editEnable ? 'disabled' : ''}
        />
        <div className="profile__line"></div>
        <p className="profile__label">E-mail</p>
        <input
          className={`profile__input ${editEnable ? 'profile__input_enabled' : ''}`}
          id="email"
          type="email"
          name="email"
          autoComplete="off"
          minLength="2"
          maxLength="30"
          required
          placeholder="Введите email"
          onChange={emailHandler}
          defaultValue={currentUser.email}
          disabled={!editEnable ? 'disabled' : ''}
        />
        <button className={`profile__button ${!editEnable ? 'profile__button_hidden' : ''}`} type="submit" onClick={handleSubmit}>Готово</button>
      </form>

      <div className="profile__buttons">
        <button className="profile__button" type='button' onClick={editProfileHandler} disabled={editEnable ? 'disabled' : ''}>Редактировать</button>
        <button className="profile__button profile__button_logout" type="button" onClick={logoutHandler}>Выйти из аккаунта</button>
      </div>

    </div>
  );
}

export default Profile;
