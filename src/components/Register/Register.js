import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";


function Register(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function nameHandler(event) {
    setName(event.target.value);
  }

  function emailHandler(event) {
    setEmail(event.target.value);
  }

  function passwordHandler(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onRegister({ name, email, password });
  }

  return (
    <div className="register">
      <Link to="/" className="register__logo"></Link>
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form" method="POST" name="register" onSubmit={handleSubmit}>

        <label className="register__label">Имя
          <input
            className="register__input"
            id="username"
            type="text"
            name="username"
            required
            placeholder="Введите имя"
            onChange={nameHandler}
            value={name || ""}
          />
        </label>


        <label className="register__label">E-mail
          <input
            className="register__input"
            id="email"
            type="email"
            name="email"
            autoComplete="off"
            minLength="2"
            maxLength="30"
            required
            placeholder="Введите email"
            onChange={emailHandler}
            value={email || ""}
          />
        </label>


        <label className="register__label">Пароль
          <input
            className={`register__input ${props.onError && 'register__input_error'}`}
            id="password"
            type="password"
            name="password"
            autoComplete="off"
            required
            placeholder="Введите пароль"
            onChange={passwordHandler}
            value={password || ""}
          />
        </label>
        <span id="form-error" className="register__error">{props.onError && 'Что-то пошло не так...'}</span>

        <button className="register__button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <p className="register__link-label">Уже зарегистрированы? <Link className="register__link" to="/signin"> Войти</Link></p>
    </div>
  );
}

export default Register;
