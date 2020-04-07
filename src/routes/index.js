import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Orders from '~/pages/Orders';
import OrdersForm from '~/pages/OrdersForm';
import Deliverymans from '~/pages/Deliverymans';
import DeliverymansForm from '~/pages/DeliverymansForm';
import Recipients from '~/pages/Recipients';
import DeliveriesProblems from '~/pages/DeliveriesProblems';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/profile" isPrivate component={Profile} />

      <Route path="/orders" exact isPrivate component={Orders} />
      <Route path="/orders/create" isPrivate component={OrdersForm} />
      {/* <Route path="/orders/update" isPrivate component={OrdersForm} /> */}

      <Route path="/deliverymans" exact isPrivate component={Deliverymans} />
      <Route
        path="/deliverymans/create"
        isPrivate
        component={DeliverymansForm}
      />

      <Route path="/recipients" isPrivate component={Recipients} />
      <Route
        path="/deliveries-problems"
        isPrivate
        component={DeliveriesProblems}
      />
    </Switch>
  );
}
