import React from 'react';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';

function Login() {
   const history = useHistory();
  function handleSubmit(event) {
    event.preventDefault();
    history.push("/movies");
  }
  return (
    <div className="login">
      <Link to="/" className="login__logo"></Link>
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form" method="POST" name="login" onSubmit={handleSubmit}>

        <label className="login__label">E-mail
        <input
          className="login__input"
          id="email"
          type="email"
          name="email"
          autoComplete="off"
          minLength="2"
          maxLength="30"
          required
          defaultValue="dron@ya.ru"
        />
        </label>


        <label className="login__label">Пароль
        <input
          className="login__input"
          id="password"
          type="password"
          name="password"
          autoComplete="off"
          required
        />

        </label>
        <span id="form-error" className="login__error">Что-то пошло не так...</span>


        <button className="login__button" type="submit" aria-label="Войти в аккаунт">
          Войти
        </button>
      </form>
      <p className="login__link-label">Ещё не зарегистрированы? <Link className="login__link" to="/signup"> Регистрация</Link></p>
    </div>
  );
}

export default Login;
