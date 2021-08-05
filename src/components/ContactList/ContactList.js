import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

import './ContactsList.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  const onDeleteContact = useCallback(
    id => dispatch(contactsOperations.deleteContact(id)),
    [dispatch],
  );

  return (
    <ul className="contacts__list">
      {contacts.map(({ id, name, number }) => (
        <li className="contacts__list-item" key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            className="contacts__list-button"
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   contacts: getVisibleContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// const ContactList = ({ contacts, onDeleteContact }) => (
//   <ul className="contacts__list">
//     {contacts.map(({ id, name, number }) => (
//       <li className="contacts__list-item" key={id}>
//         <p>
//           {name}: {number}
//         </p>
//         <button
//           className="contacts__list-button"
//           type="button"
//           onClick={() => onDeleteContact(id)}
//         >
//           Delete
//         </button>
//       </li>
//     ))}
//   </ul>
// );

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   contacts: getVisibleContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
