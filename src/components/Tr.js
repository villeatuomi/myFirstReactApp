import React, {Component} from 'react';
//import './App.css';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Tr extends Component {
  render() {

    return (
        <tr style={{display: 'flex', alignItems: 'center'}}>
          <td>
            <img src={`http://media.mw.metropolia.fi/wbma/uploads/${this.props.tr.thumbnails.w160}`} alt={'moi'}/>
          </td>
          <td>
            <h3>{this.props.tr.title}</h3>
            <p>{this.props.tr.description}</p>
          </td>
          <td style={{margin: '0 50px'}}>
            <Link to={`/single/${this.props.tr.file_id}`}>View</Link>
          </td>
        </tr>
    );

  }
}

Tr.propTypes = {
  tr: PropTypes.object.isRequired,
};

export default Tr;
