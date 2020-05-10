import React from 'react';
import PropTypes from 'prop-types';


const Details = ({ details }) => (
  <>
    <h1>DETAILS</h1>
    {details}
  </>
);

Details.propTypes = {
  details: PropTypes.string.isRequired,
};

export default Details;
