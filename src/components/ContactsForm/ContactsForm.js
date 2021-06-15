import { Component } from 'react';
import shortid from 'shortid';

class ContactsForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  contactUniqueId = shortid.generate();

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    // this.props.onSubmit({ ...this.state });
    this.props.onSubmit(this.state.event);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="">
          Name
          <input
            id={this.contactUniqueId}
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
            id={this.contactUniqueId}
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
