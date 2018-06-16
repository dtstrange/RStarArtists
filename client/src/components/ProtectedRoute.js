import React from "react";
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      (window.localStorage.getItem("token") != null)
        ? <Component {...props} />
        : <Redirect to='/manage/login' />
    )} />
  )

export default PrivateRoute;