import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
  return (
      <React.Fragment>
        <h1>Profile</h1>

        <p>{props.user}</p>

      </React.Fragment>
  );
};

Profile.propType  = {
  picArray: PropTypes.array.isRequired,
};



export default Profile;