import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Main from '../Main';

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={ Main }>
      <Route path='/:pageSlug' component={ Main } />
    </Route>
  </Router>
);

export default routes;