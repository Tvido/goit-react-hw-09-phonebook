import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactsOperations } from './redux/contacts';
import { getLoading } from './redux/contacts/contacts-selectors';
import ContactsList from './components/ContactsList';
import ContactsForm from './components/ContactsForm';
import Filter from './components/Filter';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactsForm />

        <h2>Contacts</h2>
        <Filter />

        <ContactsList />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(App);
