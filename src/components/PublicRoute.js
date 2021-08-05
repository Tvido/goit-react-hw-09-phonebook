import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authSelector } from '../redux/auth';
import { useSelector } from 'react-redux';

export default function PublicRoute({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelector.getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PublicRoute);
