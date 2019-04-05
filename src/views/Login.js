import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {login, register} from '../utils/MediaAPI';

class Login extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    full_name: '',
  };

  //
  handleLoginSubmit = (evt) => {
    evt.preventDefault();
    this.doLogin();
  };

  //
  handleRegisterSubmit = (evt) => {
    evt.preventDefault();
    register(this.state).then(user => {
      console.log(user);
      this.doLogin();
    });
  };

  //
  doLogin = () => {
    login(this.state.username, this.state.password).then(response => {
      console.log(response);
      this.props.setUser(response.user);
      localStorage.setItem('token', response.token);
      this.props.history.push('/home');
    });
  };


  handleInputChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    console.log(value, name);

    this.setState({
      [name]: value,
    });
  };


  render() {
    return (
        <React.Fragment>
          <h1>Moi</h1>
          <form onSubmit={this.handleLoginSubmit}>
            <fieldset>
              <input type="text" name="username" placeholder="username"
                     value={this.state.username}
                     onChange={this.handleInputChange}/>
              <input type="password" name="password" placeholder="password"
                     value={this.state.password}
                     onChange={this.handleInputChange}/>
              <input type="submit"/>
            </fieldset>
          </form>
          <form onSubmit={this.handleRegisterSubmit}>
            <fieldset>
              <input type="text" name="username" placeholder="username"
                     value={this.state.username}
                     onChange={this.handleInputChange}/>
              <input type="password" name="password" placeholder="password"
                     value={this.state.password}
                     onChange={this.handleInputChange}/>
              <input type="email" name="email" placeholder="email"
                     value={this.state.email}
                     onChange={this.handleInputChange}/>
              <input type="text" name="fullName" placeholder="full name"
                     value={this.state.full_name}
                     onChange={this.handleInputChange}/>
              <input type="submit"/>
            </fieldset>
          </form>
        </React.Fragment>
    );
  }
}

Login.propTypes = {
  setUser: PropTypes.func,
  history: PropTypes.object,
};

export default Login;