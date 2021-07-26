import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../components/ContactsForm';
import ContactList from '../components/ContactsList';
import Filter from '../components/Filter';
import { contactsOperations } from '../redux/contacts';
import { getLoading } from '../redux/contacts/contacts-selectors';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter />
        {this.props.isLoadingContacts && <h1>Loading</h1>}
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
