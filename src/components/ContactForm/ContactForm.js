import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';

import './ContactsForm.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleInputName = useCallback(e => {
    setName(e.currentTarget.value);
  }, []);

  const handleInputNumber = useCallback(e => {
    setNumber(e.currentTarget.value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(
        contactsOperations.addContact({ id: shortid.generate(), name, number }),
      );
      reset();
    },
    [dispatch, name, number],
  );

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <label className="contacts__form-item" htmlFor={nameInputId}>
        Name
        <input
          className="contacts__form-text"
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleInputName}
          id={nameInputId}
        />
      </label>

      <label className="contacts__form-item" htmlFor={numberInputId}>
        Number
        <input
          className="contacts__form-text"
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleInputNumber}
          id={numberInputId}
        />
      </label>
      <button className="contacts__form-button" type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

// const mapDispatchToProps = dispatch => ({
//   onSubmit: ({ name, number }) =>
//     dispatch(contactsOperations.addContact({ name, number })),
// });

// export default connect(null, mapDispatchToProps)(ContactForm);

// class ContactForm extends Component {
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = shortid.generate();
//   numberInputId = shortid.generate();

//   handleInput = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <form className="" onSubmit={this.handleSubmit}>
//         <label className="contacts__form-item" htmlFor={this.nameInputId}>
//           Name
//           <input
//             className="contacts__form-text"
//             type="text"
//             value={this.state.name}
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//             onChange={this.handleInput}
//             id={this.nameInputId}
//           />
//         </label>

//         <label className="contacts__form-item" htmlFor={this.numberInputId}>
//           Number
//           <input
//             className="contacts__form-text"
//             type="tel"
//             value={this.state.number}
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//             onChange={this.handleInput}
//             id={this.numberInputId}
//           />
//         </label>
//         <button className="contacts__form-button" type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   onSubmit: ({ name, number }) =>
//     dispatch(contactsOperations.addContact({ name, number })),
// });

// export default connect(null, mapDispatchToProps)(ContactForm);
