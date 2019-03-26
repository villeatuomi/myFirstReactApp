import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  state = {

  };

  render() {
    return (
        <React.Fragment>
          <h1>Moi</h1>
        </React.Fragment>
    );
  }
}

Login.propTypes = {
  match: PropTypes.object,
};

export default Login;