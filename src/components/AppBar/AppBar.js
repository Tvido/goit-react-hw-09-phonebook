import React from 'react';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { authSelectors } from '../../redux/auth';

import './AppBar.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header className="appBar__header">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

// const AppBar = ({ isAuthenticated }) => (
//   <header className="appBar__header">
//     <Navigation />
//     {isAuthenticated ? <UserMenu /> : <AuthNav />}
//   </header>
// );

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(AppBar);
