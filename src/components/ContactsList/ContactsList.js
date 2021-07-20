import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as contactsOperations from '../../redux/contacts/contacts-operations';

import './ContactsList.css';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className="contacts__list">
    {contacts.map(({ id, name, number }) => (
      <li className="contacts__list-item" key={id}>
        <p className="contacts__list-name">{name}</p>
        <p className="contacts__list-number">{number}</p>

        <button
          className="contacts__list-button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const getVisibleContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDaspatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDaspatchToProps)(ContactsList);
