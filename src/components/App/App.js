import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="pageContainer">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
