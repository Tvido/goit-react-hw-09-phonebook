import React from 'react';
import PropTypes from 'prop-types';

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

export default ContactsList;
