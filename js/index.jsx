import React from 'react';
import ReactDOM from 'react-dom';
import Router, { IndexRoute, Route } from 'react-router';
import Parse from 'parse';

import App from './components/App.jsx';
import LoginWrapper from './components/LoginWrapper.jsx';
import Main from './components/Main.jsx';

Parse.initialize("ky5FqpHAqX49VIW1wH7oXzEP2LCgebYEvDYUIEpG", "vShKYhBPfxONFawvbg151ZUGpTBbb5X6P1nVx5zA");

const routes = (
  <Route path='/'>
    <IndexRoute component={LoginWrapper}/>
  </Route>
);

ReactDOM.render(
  <Router>
    {routes}
  </Router>,
  document.getElementById('react')
);