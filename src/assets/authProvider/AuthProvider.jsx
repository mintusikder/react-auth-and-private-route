import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
// import React from 'react';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Observing current user", currentUser);
      setLoading(false)
    });
    return () => {
      unSubscribe();
      
    };
  }, []);


//   useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);

//     });
//     return () => {
//       unSubscribe();
//     };
//   }, []);

  const info = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;

/*
1. create context and export it
2. set provider with value
3. use the auth provider in the main.jsx file
4.Access the children auth provider file and use it middle for the provider
*/
