import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import User from './components/user/User';

const Routes = props => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/users" component={User} />
            <Redirect from="*" to="/" />
        </Switch>
    );
}
 
export default Routes;