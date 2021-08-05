import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../redux/auth';
import { useSelector } from 'react-redux';

export default function PrivateRoute({
  // component: Component,
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route {...routeProps}>
      r{isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PrivateRoute);
