import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

import './LoginView.css';

export default function LoginView() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <div>
      <h1 className="loginView__title">PLEASE LOGIN</h1>

      <form
        className="loginView__form"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className="loginView__form__label">
          Email:
          <input
            className="loginView__form__input"
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>

        <label className="loginView__form__label">
          Password:
          <input
            className="loginView__form__input"
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>

        <button className="loginView__button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginView);

// class LoginView extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onLogin(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { email, password } = this.state;

//     return (
//       <div>
//         <h1 className="loginView__title">PLEASE LOGIN</h1>

//         <form
//           className="loginView__form"
//           onSubmit={this.handleSubmit}
//           autoComplete="off"
//         >
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
//             Login
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginView);
