import { Component } from 'react';
import ContactsList from './components/ContactsList';
import ContactsForm from './components/ContactsForm';
import Filter from './components/Filter';

import InitialContacts from './components/ContactsList/contacts.json';
// import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: InitialContacts,
    filter: '',
  };

  addContact = contact => {
    const { contacts } = this.state;
    const uniqueNames = contacts.map(contact => contact.name);

    uniqueNames.includes(contact.name)
      ? alert(`${contact.name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <ContactsForm onSubmit={this.addContact} />

        <Filter value={filter} onChange={this.changeFilter} />

        <ContactsList
          contacts={this.getVisibleContacts()}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
