import React, { Suspense } from 'react';
import {  Route, Switch } from 'react-router-dom';
import DashBoard from '../components/dashboard/DashBoard';



function PrivateRoutes() {
    return (
        <Suspense >
            <Switch>
                <Route exact path="/dashboard" component={DashBoard} />
                <Route exact path='/user'  />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
