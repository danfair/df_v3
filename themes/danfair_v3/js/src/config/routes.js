import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import About from './../About';
import Test from './../Test';

var routes = (
  <Router history={browserHistory}>
    <Route path='/'>
      <IndexRoute component={ About } />
      <Route path='/test' component={ Test } />
    </Route>
  </Router>
);

export default routes;