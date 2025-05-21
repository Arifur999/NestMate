import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthContext';
import {Navigate, useLocation } from 'react-router';
import Loader from './Loader';

const PrivateRouts = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    console.log(loading);
    const location =useLocation()
    if(loading){
        return <Loader></Loader>
    }
    if(!user || !user.email){
        return<Navigate state={{from:location.pathname}} to='/login'></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};
export default PrivateRouts;