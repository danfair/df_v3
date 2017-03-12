import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Main from '../Main';
import Page from '../Page';

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={ Main }>
      <IndexRoute component={ Page } />
      <Route path='/:pageSlug' component={ Page } />
    </Route>
  </Router>
);

export default routes;