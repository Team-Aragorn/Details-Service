/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ photo }) => (
  <div className="carousel-slide">
    <img src={photo} alt="" />
  </div>
);

Photo.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default Photo;
