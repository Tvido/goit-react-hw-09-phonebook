import { Component } from 'react';
import ContactsList from './components/ContactsList';
import ContactsForm from './components/ContactsForm';

import InitialContacts from './components/ContactsList/contacts.json';

class App extends Component {
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

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <ContactsForm />

        <ContactsList
          contacts={contacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
