import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, location }) => {
  console.log(location.state);
  if (location.state.isAuth) {
    return <Route path="/dashboard" component={Component} />;
  } else {
    return <Redirect path="/dashboard" component={Component} />;
  }
};

export default PrivateRoute;
