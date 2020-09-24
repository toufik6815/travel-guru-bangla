    import React, { useContext } from "react";
    import { Redirect, Route, useLocation } from "react-router-dom";
    import { userContext } from "../../App";

    const PrivateRoute = ({ children, ...rest }) => {
    const [setShowArea, loggedIn, setLoggedIn] = useContext(userContext);
    const location = useLocation();

    return (
        <Route
        {...rest}
        render={({ location }) =>
            loggedIn.email ? (
            children
            ) : (
            <Redirect
                to={{
                pathname: "/auth",
                state: { from: location },
                }}
            />
            )
        }
        />
    );
    };

    export default PrivateRoute;
