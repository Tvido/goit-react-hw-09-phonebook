import { Component } from 'react';
import ContactsList from './components/ContactsList';

import InitialContacts from './components/ContactsList/contacts.json';

class App extends Component {
  // state = {
  //   contacts: [],
  //   name: '',
  // };

  state = {
    contacts: InitialContacts,
    filter: '',
    name: '',
    number: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="title"
          required
        />

        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="title"
          required
        />

        <ContactsList
          contacts={contacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
