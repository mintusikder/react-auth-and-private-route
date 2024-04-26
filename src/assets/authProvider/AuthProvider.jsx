import { createContext } from "react";
import PropTypes from 'prop-types';
// import React from 'react';
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const info = {
        name: "Mintu"
    }
 
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.PropTypes ={
    children : PropTypes.node
}


export default AuthProvider;