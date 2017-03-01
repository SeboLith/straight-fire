import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import AppContainer from './AppContainer';
import Home from './Home';
import Register from './Register';
import Login from './Login';

const Routes = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={Home} />
        <Route path="/account/login" component={Login} />
        <Route path="/account/register" component={Register} />
      </Route>
    </Router>
  );
};

export default Routes;