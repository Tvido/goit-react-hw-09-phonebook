import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import './UserMenu.css';

const UserMenu = ({ email, onLogout }) => (
  <div className="userMenu__container">
    <p className="userMenu__email">{email}</p>
    <button className="userMenu__button" type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  email: authSelectors.getUsermail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
