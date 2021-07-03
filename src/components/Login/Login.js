import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';

function Login(props) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   function emailHandler(event) {
     setEmail(event.target.value);
   }

   function passwordHandler(event) {
     setPassword(event.target.value);
   }

   function handleSubmit(event) {
     event.preventDefault();
     props.onLogin({email, password});
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
          placeholder="Введите email"
          onChange={emailHandler}
          value={email || ""}
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
          placeholder="Введите пароль"
          onChange={passwordHandler}
          value={password || ""}
        />

        </label>
        <span id="form-error" className="login__error">{props.onError && 'Что-то пошло не так...'}</span>


        <button className="login__button" type="submit" aria-label="Войти в аккаунт">
          Войти
        </button>
      </form>
      <p className="login__link-label">Ещё не зарегистрированы? <Link className="login__link" to="/signup"> Регистрация</Link></p>
    </div>
  );
}

export default Login;
