import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    full_name: '',
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

  formSubmit = (evt) => {
    const loginForm = document.querySelector('#loginForm');
    loginForm.preventDefault();
    console.log('Moi teille kaikille.');
  };

  render() {
    return (
        <React.Fragment>
          <h1>Moi</h1>
          <form onSubmit={this.formSubmit} id="loginForm">
            <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleInputChange}/>
            <input type="password" name="password" placeholder="password"/>
            <input type="submit"/>
          </form>
        </React.Fragment>
    );
  }
}

Login.propTypes = {
  match: PropTypes.object,
};

export default Login;