import React, { useCallback } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import './UserMenu.css';

export default function UserMenu() {
  const dispatch = useDispatch();

  const email = useSelector(authSelectors.getUsermail);
  // const onLogout = () => dispatch(authOperations.logOut());

  const onLogout = useCallback(
    () => dispatch(authOperations.logOut()),
    [dispatch],
  );

  return (
    <div className="userMenu__container">
      <p className="userMenu__email">{email}</p>
      <button className="userMenu__button" type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

// const UserMenu = ({ email, onLogout }) => (
//   <div className="userMenu__container">
//     <p className="userMenu__email">{email}</p>
//     <button className="userMenu__button" type="button" onClick={onLogout}>
//       Logout
//     </button>
//   </div>
// );

// const mapStateToProps = state => ({
//   email: authSelectors.getUsermail(state),
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
