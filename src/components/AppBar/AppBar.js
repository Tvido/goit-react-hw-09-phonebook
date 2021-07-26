import React from 'react';

import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import './AppBar.css';

const AppBar = ({ isAuthenticated }) => (
  <header className="appBar__header">
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
