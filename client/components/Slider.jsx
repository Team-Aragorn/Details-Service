/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SliderContent from './SliderContent.jsx';
import Slide from './Slide.jsx';


const Slider = ({ photos }) => {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    translate: 0,
    transition: 0.5,
  });

  const { translate, transition } = state;

  return (
    <SliderCSS>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * photos.length}
      >
        {
          photos.map((photo) => <Slide photo={photo} key={photo} />)
        }
      </SliderContent>
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
