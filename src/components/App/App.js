import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import ErrorPage from '../ErrorPage/ErrorPage';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="pageContainer">

        <Switch>

          <Route exact path="/">
            <Header />
            <Main />
            <Footer />
          </Route>

          <Route path="/movies">
            <Header />
            <Movies />
            <Footer />
          </Route>

          <Route path="/saved-movies">
            <Header />
            <SavedMovies />
            <Footer />
          </Route>


          <Route path="/profile">
            <Header />
            <Profile />
          </Route>

          <Route path="/signup">
            <Register />
          </Route>

          <Route path="/signin">
            <Login />
          </Route>

          <Route path="*">
            <ErrorPage />
          </Route>

        </Switch>

      </div>
    </div>
  );
}

export default App;
