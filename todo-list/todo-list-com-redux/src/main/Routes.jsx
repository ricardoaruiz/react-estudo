import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from '../about/About';
import Todo from '../todo/Todo';

export default props => 
    <Switch>
        <Route path="/todo" component={Todo} />
        <Route path="/about" component={About} />
        <Route path="/" component={Todo}  />
        <Redirect from="*" to="/" />
    </Switch>