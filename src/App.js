import { Component } from 'react';

import ContactsList from './components/ContactsList';
import ContactsForm from './components/ContactsForm';
import Filter from './components/Filter';

import './App.css';

class App extends Component {
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

export default App;
