import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';

import './Filter.css';

const Filter = ({ value, onChange }) => (
  <label className="filter">
    Find contacts by name
    <input type="text" value={value} onChange={onChange}></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDaspatchToProps = dispatch => ({
  onChange: event => dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDaspatchToProps)(Filter);
