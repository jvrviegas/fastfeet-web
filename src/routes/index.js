import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';
import Deliverymans from '~/pages/Deliverymans';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/deliverymans" isPrivate component={Deliverymans} />
    </Switch>
  );
}
