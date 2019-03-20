import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
import PropTypes from 'prop-types';
import Tr from './Tr';

class Tbody extends Component {
  render() {

    return this.props.tbody.map((item) => (
      <Tr key={item.title} tr={item}/>
    ));

  }
}

Tbody.propTypes = {
  tbody: PropTypes.array.isRequired,
};

export default Tbody;
