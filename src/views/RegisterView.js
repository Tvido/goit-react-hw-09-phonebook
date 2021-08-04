import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

import './RegisterView.css';

export default function RegisterView() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(authOperations.register({ name, email, password }));

    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <div>
      <h1 className="registerView__title">Registration Page</h1>

      <form
        className="registerView__form"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className="registerView__form__label">
          Name:
          <input
            className="registerView__form__input"
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </label>

        <label className="registerView__form__label">
          Email:
          <input
            className="registerView__form__input"
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>

        <label className="registerView__form__label">
          Password:
          <input
            className="registerView__form__input"
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>

        <button className="registerView__button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

// class RegisterView extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onRegister(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { name, email, password } = this.state;

//     return (
//       <div>
//         <h1 className="registerView__title">Registration Page</h1>

//         <form
//           className="registerView__form"
//           onSubmit={this.handleSubmit}
//           autoComplete="off"
//         >
//           <label className="registerView__form__label">
//             Name:
//             <input
//               className="registerView__form__input"
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label className="registerView__form__label">
//             Email:
//             <input
//               className="registerView__form__input"
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label className="registerView__form__label">
//             Password:
//             <input
//               className="registerView__form__input"
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </label>

//           <button className="registerView__button" type="submit">
//             Register
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);
