import React from 'react';
import { Redirect, Route } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem("jwtToken") ? (
                <Component {...props} {...rest} />
            ) : (
                <Redirect 
                    to={{
                        pathname: "/login",
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
);


export default PrivateRoute;
