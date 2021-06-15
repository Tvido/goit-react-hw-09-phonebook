import { Component } from 'react';

class ContactsForm extends Component {
  state = {
    // contacts: InitialContacts,
    filter: '',
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form>
        <label className="">
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

        <label className="">
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
