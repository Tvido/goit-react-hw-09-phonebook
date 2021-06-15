import { Component } from 'react';
import ContactsList from './components/ContactsList';
import ContactsForm from './components/ContactsForm';
import Filter from './components/Filter';

import InitialContacts from './components/ContactsList/contacts.json';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: InitialContacts,
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
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
      contact.text.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <ContactsForm onSubmit={this.addContact} />

        <Filter value={filter} onChange={this.changeFilter} />

        <ContactsList
          contacts={contacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
