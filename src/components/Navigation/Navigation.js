import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import './Navigation.css';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav>
      <NavLink
        className="navigation__link"
        activeClassName="navigation__activeLink"
        to={routes.HomeView}
        exact
      >
        HOME
      </NavLink>

      {isLoggedIn && (
        <NavLink
          className="navigation__link"
          activeClassName="navigation__activeLink"
          to={routes.ContactsView}
          exact
        >
          CONTACTS
        </NavLink>
      )}
    </nav>
  );
}

// const Navigation = ({ isAuthenticated }) => (
//   <nav>
//     <NavLink
//       className="navigation__link"
//       activeClassName="navigation__activeLink"
//       to={routes.HomeView}
//       exact
//     >
//       HOME
//     </NavLink>

//     {isAuthenticated && (
//       <NavLink
//         className="navigation__link"
//         activeClassName="navigation__activeLink"
//         to={routes.ContactsView}
//         exact
//       >
//         CONTACTS
//       </NavLink>
//     )}
//   </nav>
// );

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Navigation);
