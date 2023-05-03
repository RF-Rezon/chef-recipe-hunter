import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "./app";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // Create User
    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    };
    
    const signInUser =()=>{

    }

    const authInfo = {user, createUser, signInUser, loading};
    return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
