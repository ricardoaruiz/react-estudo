import React from 'react'
import { useRouteMatch, Switch } from 'react-router-dom';
import Route from './Route';


import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';

const InternalRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={path} exact isPrivate></Route>
      <Route path={`${path}/dashboard`} component={Dashboard} isPrivate />
      <Route path={`${path}/users`} component={Users} isPrivate />
      <Route path="*" component={() => (<h1>Not Found 1</h1>)} isPrivate />
    </Switch>
  )
}

export default InternalRoutes;
