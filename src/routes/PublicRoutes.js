import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginNew from '../components/loginform/LoginPage'

function PublicRoutes() {
    return (
        <Switch>
            <Route path='/' component={LoginNew}/>
            <Redirect to='/' />
        </Switch>
    );
}

export default PublicRoutes;
