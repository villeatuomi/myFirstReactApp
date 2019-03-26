import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
      <nav>
        <ul>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/profile`}>Profile</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Nav;