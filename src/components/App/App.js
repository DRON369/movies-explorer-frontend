import React from 'react';
import { useState } from 'react';
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
import SideMenu from '../SideMenu/SideMenu';

function App() {

  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  function handleOpenSideMenuClick() {
    setSideMenuOpen(!isSideMenuOpen);
  }

  return (
    <div className="App">
      <div className="pageContainer">

        <Switch>

          <Route exact path="/">
            <Header auth={false} onOpenSideMenu={handleOpenSideMenuClick} isSideMenuOpen={isSideMenuOpen}/>
            <Main />
            <Footer />
          </Route>

          <Route path="/movies">
            <Header auth={true} onOpenSideMenu={handleOpenSideMenuClick} isSideMenuOpen={isSideMenuOpen}/>
            <Movies />
            <Footer />
          </Route>

          <Route path="/saved-movies">
            <Header auth={true} onOpenSideMenu={handleOpenSideMenuClick} isSideMenuOpen={isSideMenuOpen}/>
            <SavedMovies />
            <Footer />
          </Route>


          <Route path="/profile">
            <Header auth={true} onOpenSideMenu={handleOpenSideMenuClick}/>
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
        <SideMenu isOpen={isSideMenuOpen} onOpenSideMenu={handleOpenSideMenuClick}/>
      </div>
    </div>
  );
}

export default App;
