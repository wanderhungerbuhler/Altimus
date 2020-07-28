import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';

import Dashboard from '../pages/Dashboard';
import Search from '../pages/Search';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/search" component={Search} isPrivate />
  </Switch>
);

export default Routes;
