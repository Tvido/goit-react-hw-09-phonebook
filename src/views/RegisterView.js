import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from '../redux/auth';

import './RegisterView.css';

export default function RegisterView({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({ name, email, password });

    reset();
  };

  // const handleSubmit = event => {
  //   event.preventDefault();

  //   dispatch(
  //     authOperations({
  //       name,
  //       email,
  //       password,
  //     }),
  //   );

  //   reset();
  // };

  const reset = () => {
    setName('');
    setEmail('');
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
            onChange={handleChange}
          />
        </label>

        <label className="registerView__form__label">
          Email:
          <input
            className="registerView__form__input"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className="registerView__form__label">
          Password:
          <input
            className="registerView__form__input"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
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
//         <h1 className="loginView__title">Registration Page</h1>

//         <form
//           className="loginView__form"
//           onSubmit={this.handleSubmit}
//           autoComplete="off"
//         >
//           <label className="loginView__form__label">
//             Name:
//             <input
//               className="loginView__form__input"
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label className="loginView__form__label">
//             Email:
//             <input
//               className="loginView__form__input"
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label className="loginView__form__label">
//             Password:
//             <input
//               className="loginView__form__input"
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </label>

//           <button className="loginView__button" type="submit">
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
