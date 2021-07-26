import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterContacts } from '../../redux/contacts';
import { getFilter } from '../../redux/contacts/contacts-selectors';

import './Filter.css';

const Filter = ({ value, onChange }) => (
  <div>
    <label className="filter">
      Find contacts by name
      <input className="" type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

Filter.propTypes = {
  // value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
