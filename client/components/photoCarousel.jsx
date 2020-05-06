/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
import React from 'react';
// import PropTypes from 'prop-types';
import Photo from './Photo.jsx';

const PhotoCarousel = ({ photos }) => (
  <div className="carousel-container">
    {photos.map((photo, key) => <Photo photo={photo} key={key} />)}
  </div>
);

// PhotoCarousel.propTypes = {
//   photos: PropTypes.shape.isRequired,
// };

export default PhotoCarousel;
