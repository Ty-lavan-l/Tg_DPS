import React from 'react';
import DashBoard from '../components/dashboard/DashBoard';
import LoginPage from '../components/loginform/LoginPage';



function Routes() {

    let isUserLoggedIn = false;

    if (localStorage.getItem('token')) {
        isUserLoggedIn = true;
    } else {
        isUserLoggedIn = false;
    }

    return isUserLoggedIn ? <DashBoard/> : <LoginPage/>;
}

export default Routes;
