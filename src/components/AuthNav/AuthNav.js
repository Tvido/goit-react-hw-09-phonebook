import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

import './AuthNav.css';

const AuthNav = () => (
  <div>
    <NavLink
      className="authNav__link"
      activeClassName="authNav__activeLink"
      to={routes.RegisterView}
      exact
    >
      REGISTRATION
    </NavLink>
    <NavLink
      className="authNav__link"
      activeClassName="authNav__activeLink"
      to={routes.LoginView}
      exact
    >
      LOGIN
    </NavLink>
  </div>
);

export default AuthNav;
