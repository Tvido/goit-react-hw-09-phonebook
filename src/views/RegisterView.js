import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

import './RegisterView.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1 className="loginView__title">Registration Page</h1>

        <form
          className="loginView__form"
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <label className="loginView__form__label">
            Name:
            <input
              className="loginView__form__input"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label className="loginView__form__label">
            Email:
            <input
              className="loginView__form__input"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className="loginView__form__label">
            Password:
            <input
              className="loginView__form__input"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button className="loginView__button" type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
