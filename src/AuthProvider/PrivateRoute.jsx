import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spninner from "../Utils/spninner";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  
 if (!user) {
   return <Navigate state={{ from: location }} to="/login" replace/>;
 } 
 return children;
  // if (loading) {
  //   return <div>{<Spninner />}</div>;
  // }
};

export default PrivateRoute;
