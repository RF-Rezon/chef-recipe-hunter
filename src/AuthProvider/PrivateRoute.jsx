import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spninner from '../Utils/spninner';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div>{<Spninner/>}</div>
    }
    if(user){
        return children
    }
    return <Navigate state={{path: location}} to={"/login"}/>
};

export default PrivateRoute;