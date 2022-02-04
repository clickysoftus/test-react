import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Login from 'views/login.js'
import Register from 'views/register.js'
import React from 'react';
import setAuthToken from './setAuthToken.js'
import jwt_decode from "jwt-decode";
import {sessionLogin} from './redux/actions/authActions'
function App() {
   
    if (localStorage.getItem('jwtToken')) {
        
        setAuthToken(localStorage.getItem('jwtToken'));
        const decoded = jwt_decode(localStorage.getItem('jwtToken'));
        store.dispatch(sessionLogin(decoded));
       
      }
  return (
  
<BrowserRouter>
    <Provider store={store}>
    <Switch>
      <Route exact path={'/'} render={(props)=> <Login {...props}/>}/>
      <Route exact path={'/register'} render={(props)=> <Register {...props}/>}/>
      <Route  path="/admin" render={(props) => <AdminLayout {...props} />} />
     
    </Switch>
    </Provider>
  </BrowserRouter>
);
}

export default App;
