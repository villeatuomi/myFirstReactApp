import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {login} from '../utils/MediaAPI';

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
    evt.preventDefault();
    console.log('Moi teille kaikille.');
    login(this.state.username, this.state.password).then(json => {
      console.log(json);
      const {token, user} = json;
      console.log(token);
      console.log(user);
      localStorage.setItem('token', token);

      // Tässä lähetetään App.js:ään user-objekti
      this.props.setUser(user);

      this.props.history.push('/home');


    });
  };

  render() {
    return (
        <React.Fragment>
          <h1>Moi</h1>
          <form onSubmit={this.formSubmit}>
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
          <form onSubmit={this.formSubmit}>
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