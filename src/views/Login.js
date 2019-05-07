import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {login, register, getUser, checkUser} from '../utils/MediaAPI';
import {TextField, Button} from '@material-ui/core';
import {Send} from '@material-ui/icons';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

class Login extends Component {
  state = {
    user: {
      username: '',
      password: '',
      email: '',
      full_name: '',
      repeatPassword: '',
    },
    message: '',
    formToggler: true,
    validUser: true,
  };

  myRef = 'form';

  //
  handleLoginSubmit = (evt) => {
    evt.preventDefault();
    this.doLogin();
  };

  //
  handleRegisterSubmit = () => {
    const user = {...this.state.user};
    // remove repeatPassword
    delete user.repeatPassword;
    register(user).then(user => {
      console.log(user);
      if (user.message !== undefined) {
        this.setState({message: user.message});
        return;
      }
      this.doLogin();
    });
  };

  //
  doLogin = () => {
    login(this.state.user.username, this.state.user.password).then(response => {
      console.log(response);
      if (response.user !== undefined) {
        this.props.setUser(response.user);
        localStorage.setItem('token', response.token);
        this.props.history.push('/home');
      } else {
        this.setState({message: response.message});
      }
    }).catch((err) => {
      console.log(err);
    });
  };


  handleInputChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    console.log(value, name);

    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value,

      },
    }));

    if (name === 'username') {
      this.checkUsername(target.value);
    }
  };


  checkUsername = (username) => {
    checkUser(username).then((result) => {
      console.log(result.available);
      this.setState({validUser: result.available});
    });
  };

  toggleForm = () => {
    this.setState({formToggler: !this.state.formToggler});
  };

  componentDidMount() {
    console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token') !== null) {
      getUser(localStorage.getItem('token')).then(response => {
        this.props.setUser(response);
        this.props.history.push('/home');
      });
    }
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      return value === this.state.user.password;
    });
    ValidatorForm.addValidationRule('isUserAvailable', () => {
      return this.state.validUser;
    });
  }


  render() {
    return (
        <React.Fragment>
          <h1>Login form</h1>
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
          <h1>Register form</h1>
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