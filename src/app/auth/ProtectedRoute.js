import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ loggedIn, children }) => {

    return loggedIn ? (
        <div>
            {children}
        </div>
    ) : (<Navigate to='/' />);
};

export default ProtectedRoute;

