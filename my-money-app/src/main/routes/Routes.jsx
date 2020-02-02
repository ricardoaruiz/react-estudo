import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import BillingCycles from '../../billing-cycles/BillingCycles';
import Dashboard from '../../dashboard/Dashboard';

export default props => (
    <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/billingCycles" component={BillingCycles} />
        <Redirect from="*" to="/dashboard"/>
    </Switch>
)