import React from 'react';
import Table from '../components/Table';
import PropTypes from 'prop-types';

const Home = (props) => {
  return (
      <React.Fragment>
        <h1>Home</h1>
        <Table table={props.picArray}/>
      </React.Fragment>
  );
};

Home.propTypes = {
  picArray: PropTypes.array.isRequired,
};

export default Home;