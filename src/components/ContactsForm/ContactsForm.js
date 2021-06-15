import { Component } from 'react';
import shortid from 'shortid';

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

    // this.props.onSubmit({ ...this.state });
    this.props.onSubmit(this.state);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="" id={this.contactUniqueId}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="title"
            onChange={this.handleInputChange}
            value={this.state.name}
            required
          />
        </label>

        <label className="" id={this.contactUniqueId}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="title"
            onChange={this.handleInputChange}
            value={this.state.number}
            required
          />
        </label>
        <button className="" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactsForm;
