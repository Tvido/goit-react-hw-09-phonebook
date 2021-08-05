import React, { useCallback } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

import { filterContacts } from '../../redux/contacts';
import { getFilter } from '../../redux/contacts/contacts-selectors';

import './Filter.css';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onChange = useCallback(
    e => dispatch(filterContacts(e.target.value)),
    [dispatch],
  );

  return (
    <div>
      <label className="filter">
        Find contacts by name
        <input className="" type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
}

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
// };

// const Filter = ({ value, onChange }) => (
//   <div>
//     <label className="filter">
//       Find contacts by name
//       <input className="" type="text" value={value} onChange={onChange} />
//     </label>
//   </div>
// );

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   value: getFilter(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(filterContacts(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
