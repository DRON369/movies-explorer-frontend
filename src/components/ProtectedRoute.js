import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ Header, Component, Footer, ...props }) => {
  return (
    <Route>
      {() =>
        props.loggedIn === true ? (
          <>
            <Header {...props} />
            <Component {...props} />
            <Footer {...props} />
          </>
        ) : (
          <Redirect to="./signin" />
        )
      }
    </Route>
  );
};

export default ProtectedRoute;