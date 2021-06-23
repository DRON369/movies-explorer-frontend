import React from 'react';
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="register__logo"></div>
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form" method="POST" name="register">

      <label className="register__label">Имя
        <input
          className="register__input"
          id="username"
          type="text"
          name="username"
          required
          value="Андрей"
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
          value="dron@ya.ru"
        />
        </label>


        <label className="register__label">Пароль
        <input
          className="register__input register__input_error"
          id="password"
          type="password"
          name="password"
          autoComplete="off"
          required
          value="Qwe123"
        />

        </label>
        <span id="form-error" className="register__error">Что-то пошло не так...</span>


        <button className="register__button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <p className="register__link-label">Уже зарегистрированы? <Link className="register__link" to="/signin"> Войти</Link></p>
    </div>
  );
}

export default Register;
