import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../redux/auth';
import { useSelector } from 'react-redux';

export default function PrivateRoute({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route
      {...routeProps}
      render={props =>
        isLoggedIn ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
}
// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PrivateRoute);
