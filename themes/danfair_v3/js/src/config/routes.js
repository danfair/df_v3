import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Services from '../components/Services';
import Home from '../components/Home';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Main from '../Main';

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={ Main }>
      <IndexRoute component={ Home } />
      <Route path='/contact' component={ Contact } />
      <Route path='/services' component={ Services } />
      <Route path='/work' component={ Work } />
    </Route>
  </Router>
);

export default routes;