import { Redirect } from "react-router";
import { Route } from 'react-router-dom';

const PublicRoute = ({component: Component, authenticated, ...rest}) => (
    <Route
        {...rest}
        render = {props => 
            authenticated === false
            ? <Component {...props} />
            : <Redirect to="/" />
        }
    />
);

export default PublicRoute;