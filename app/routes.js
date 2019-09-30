import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage';

export default (
  <Switch>
    <Route exact path="/Headers" component={Headers} />
    <Route exact path="/" component={HomePage} />
  </Switch>
);
