import React from 'react'
import { Switch, } from 'react-router-dom';
import Route from './Route';

import Main from '../pages/Main';
import Login from '../pages/Login';

const RootRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/login" exact component={Login} />
      <Route path="/main" component={Main} isPrivate />
      <Route path="*" component={() => (<h1>Not found</h1>)} />
    </Switch>
  )
}

export default RootRoutes;
