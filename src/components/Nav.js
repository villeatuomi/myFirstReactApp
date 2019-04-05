import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {Home, AccountBox, Input, VpnKey} from '@material-ui/icons';

const Nav = (props) => {
  return (
      <nav>
        <List>
          <ListItem component={Link} to='/home'>
            <ListItemIcon>
              <Home/>
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          {props.checkLogin() &&
          <React.Fragment>
            <ListItem component={Link} to='/profile'>
              <ListItemIcon>
                <AccountBox/>
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </ListItem>
            <ListItem component={Link} to='/logout'>
              <ListItemIcon>
                <Input/>
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItem>
          </React.Fragment>
          }
          {!props.checkLogin() &&
          <ListItem component={Link} to='/'>
            <ListItemIcon>
              <VpnKey/>
            </ListItemIcon>
            <ListItemText>Login</ListItemText>
          </ListItem>

          }

        </List>
      </nav>
  );
};

Nav.propTypes = {
  checkLogin: PropTypes.func,
};

export default Nav;