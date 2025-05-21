import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthContext';
import {Navigate, useLocation } from 'react-router';
import Loader from './Loader';

const PrivateRouts = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};
export default PrivateRouts;