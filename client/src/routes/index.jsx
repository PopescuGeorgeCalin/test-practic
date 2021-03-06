import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import {
  Root, Login, Form, Logout, Movies,
} from '../pages';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Root} />
      <Route path="/login" exact component={Login} />
      <PrivateRoute path="/form" exact component={Form} />
      <Route path="/logout" exact component={Logout} />
      <Route path="/movies" exact component={Movies} />
    </Switch>
  </BrowserRouter>
);
