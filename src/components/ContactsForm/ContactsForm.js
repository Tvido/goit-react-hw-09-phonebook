import { Component } from 'react';

class ContactsForm extends Component {
  render() {
    return (
      <form>
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

        <button className="" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactsForm;
