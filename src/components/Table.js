import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
import Tbody from './Tbody';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    console.log(this.props.table);
    return (
        <table>
          <Tbody tbody={this.props.table}/>
        </table>
    );
  }
}

Table.propTypes = {
  table: PropTypes.array.isRequired,
};

export default Table;
