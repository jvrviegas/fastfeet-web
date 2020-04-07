import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import ListOrders from '~/pages/Orders/List';
import CreateOrder from '~/pages/Orders/Create';
import UpdateOrder from '~/pages/Orders/Update';
import Deliverymans from '~/pages/Deliverymans';
import Recipients from '~/pages/Recipients';
import DeliveriesProblems from '~/pages/DeliveriesProblems';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard/profile" isPrivate component={Profile} />

      <Route path="/dashboard/orders" exact isPrivate component={ListOrders} />
      <Route
        path="/dashboard/orders/create"
        isPrivate
        component={CreateOrder}
      />
      <Route
        path="/dashboard/orders/update"
        isPrivate
        component={UpdateOrder}
      />

      <Route
        path="/dashboard/deliverymans"
        isPrivate
        component={Deliverymans}
      />
      <Route path="/dashboard/recipients" isPrivate component={Recipients} />
      <Route
        path="/dashboard/deliveries-problems"
        isPrivate
        component={DeliveriesProblems}
      />
    </Switch>
  );
}
