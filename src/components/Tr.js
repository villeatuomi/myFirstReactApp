import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
import PropTypes from 'prop-types';

class Tr extends Component {
  render() {

    return (
        <tr style={{display: 'flex', alignItems: 'center'}}>
          <td>
            <img src={`http://media.mw.metropolia.fi/wbma/uploads/${this.props.tr.filename.slice(0,-4)}-tn160.png`} alt={'moi'}/>
          </td>
          <td>
            <h3>{this.props.tr.title}</h3>
            <p>{this.props.tr.description}</p>
          </td>
          <td style={{margin: '0 50px'}}>
            <a href={`http://media.mw.metropolia.fi/wbma/uploads/${this.props.tr.filename}`}>View</a>
          </td>
        </tr>
    );

  }
}

Tr.propTypes = {
  tr: PropTypes.object.isRequired,
};

export default Tr;
