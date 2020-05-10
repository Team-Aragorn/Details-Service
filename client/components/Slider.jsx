/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Slider = ({ photos }) => {

  return (
    <SliderCSS>
      {}
    </SliderCSS>
  );
};

const SliderCSS = styled.div`
  position: relative;
  width: 80vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border: 5px solid blue;
`;


Slider.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
