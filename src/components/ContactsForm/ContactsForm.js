import { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';

import shortid from 'shortid';

import './ContactsForm.css';

class ContactsForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  contactUniqueId = shortid.generate();

  addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
      id: shortid.generate(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className="" onSubmit={this.handleSubmit}>
        <label className="contacts__form-item" id={this.contactUniqueId}>
          Name
          <input
            className="contacts__form-text"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="title"
            onChange={this.handleInputChange}
            value={this.state.name}
            required
          />
        </label>

        <label className="contacts__form-item" id={this.contactUniqueId}>
          Number
          <input
            className="contacts__form-text"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="title"
            onChange={this.handleInputChange}
            value={this.state.number}
            required
          />
        </label>
        <button className="contacts__form-button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapDaspatchToProps = dispatch => ({
  onSubmit: contact => dispatch(contactsOperations.addContact(contact)),
});

export default connect(null, mapDaspatchToProps)(ContactsForm);
