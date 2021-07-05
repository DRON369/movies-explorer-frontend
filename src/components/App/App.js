import { useHistory } from 'react-router';
import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import { UserContext } from '../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import ErrorPage from '../ErrorPage/ErrorPage';
import SideMenu from '../SideMenu/SideMenu';

function App() {

  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [regError, setRegError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');

  const history = useHistory();

  useEffect(() => {
    tokenCheck();
  }, []);

  function handleOpenSideMenuClick() {
    setSideMenuOpen(!isSideMenuOpen);
  }

  function handleRegister({ name, email, password }) {
    mainApi.registration({ name, email, password })
      .then((res) => {
        if (!res || res.statusCode === 400) {
          throw new Error("Что-то пошло не так");
        }
      })
      .then(() => {
        console.log("Регистрация успешна!");
        history.push("/signin");
      })
      .catch((err) => {
        setRegError(true);
        console.log(`При загрузке данных возникла ошибка: ${err.status}`);
      });
  }

  function handleLogin({ email, password }) {
    mainApi
      .authorization(email, password)
      .then((data) => {
        if (!data) throw new Error("Неверные имя пользователя или пароль");
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          tokenCheck();
          history.push("/movies");
        }
      })
      .catch((err) =>
        console.log(`При загрузке данных возникла ошибка: ${err.status}`)
      );
  }

  const tokenCheck = () => {
    if (localStorage.getItem("jwt")) {
      let jwt = localStorage.getItem("jwt");
      mainApi
        .getUserInfo(jwt)
        .then((data) => {
          if (data._id) {
            setLoggedIn(true);
            setCurrentUser({ id: data._id, email: data.email, name: data.name });
          }
        })
        .catch((err) =>
          console.log(`При загрузке данных возникла ошибка: ${err.status}`)
        );
    }
  };

  function handleLogout() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    setCurrentUser('');
    history.push("/");
  }

  return (
    <UserContext.Provider value={currentUser}>
      <div className="App">
        <div className="pageContainer">
          <Switch>

            <Route exact path="/">
              <Header loggedIn={loggedIn} onOpenSideMenu={handleOpenSideMenuClick} isSideMenuOpen={isSideMenuOpen} />
              <Main />
              <Footer />
            </Route>

            <Route path="/movies">
              <Header loggedIn={loggedIn} onOpenSideMenu={handleOpenSideMenuClick} isSideMenuOpen={isSideMenuOpen} />
              <Movies />
              <Footer />
            </Route>

            <Route path="/saved-movies">
              <Header loggedIn={loggedIn} onOpenSideMenu={handleOpenSideMenuClick} isSideMenuOpen={isSideMenuOpen} />
              <SavedMovies />
              <Footer />
            </Route>

            <Route path="/profile">
              <Header loggedIn={loggedIn} onOpenSideMenu={handleOpenSideMenuClick}  />
              <Profile onLogout={handleLogout} />
            </Route>

            <Route path="/signup">
              <Register onRegister={handleRegister} onError={regError} />
            </Route>

            <Route path="/signin">
              <Login onLogin={handleLogin} onError={loginError} />
            </Route>

            <Route path="*">
              <ErrorPage />
            </Route>

          </Switch>
          <SideMenu isOpen={isSideMenuOpen} onOpenSideMenu={handleOpenSideMenuClick} />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
