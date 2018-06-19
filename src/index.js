import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';
import Home from './pages/home.js';
import './index.less';

ReactDOM.render(
  (<BrowserRouter>
    <Switch>
      <Route path='/home' component={Home}></Route>
      <Redirect from="/" to="/home"></Redirect>
    </Switch>
  </BrowserRouter>),
  document.getElementById('root')
);
