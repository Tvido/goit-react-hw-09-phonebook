import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import { contactsOperations } from '../redux/contacts';
import { getLoading } from '../redux/contacts/contacts-selectors';

import './ContactsView.css';

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div className="contactsView__container">
      <h1 className="contactsView__title">Phonebook</h1>
      <ContactForm onSubmit={this.formSubmitHandler} />
      <h2 className="contactsView__title">Contacts</h2>
      <Filter />
      {isLoadingContacts && (
        <h1 className="contactsView__loading-title">Loading...</h1>
      )}
      <ContactList />
    </div>
  );
}

// const mapStateToProps = state => ({
//   isLoadingContacts: getLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
// });

// class ContactsView extends Component {
//   componentDidMount() {
//     this.props.fetchContacts();
//   }

//   render() {
//     return (
//       <div className="contactsView__container">
//         <h1 className="contactsView__title">Phonebook</h1>
//         <ContactForm onSubmit={this.formSubmitHandler} />
//         <h2 className="contactsView__title">Contacts</h2>
//         <Filter />
//         {this.props.isLoadingContacts && (
//           <h1 className="contactsView__loading-title">Loading...</h1>
//         )}
//         <ContactList />
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   isLoadingContacts: getLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
