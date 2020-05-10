/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SliderContent from './SliderContent.jsx';
import Slide from './Slide.jsx';


const Slider = ({ photos }) => {
  const getWidth = () => (window.innerWidth * 0.8);

  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.5,
  });

  const { translate, transition, activeSlide } = state;

  const nextSlide = () => {
    if (activeSlide === photos.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeSlide: 0,
      });
    }

    setState({
      ...state,
      activeSlide: activeSlide + 1,
      translate: (activeSlide + 1) * getWidth(),
    });
  };

  const prevSlide = () => {
    if (activeSlide === 0) {
      return setState({
        ...state,
        translate: (photos.length - 1) * getWidth(),
        activeSlide: photos.length - 1,
      });
    }

    setState({
      ...state,
      activeSlide: activeSlide - 1,
      translate: (activeSlide - 1) * getWidth(),
    });
  };

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
      <LeftButton onClick={prevSlide} />
      <RightButton onClick={nextSlide} />
    </SliderCSS>
  );
};

const SliderCSS = styled.div`
  position: relative;
  width: 80vw;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const LeftButton = styled.button`
  display: flex;
  position: absolute;
  left: 0;
  height: 50px;
  width: 35px;
  background: url(left-arrow.png);
  cursor: pointer;
  outline: none;
  border: none;
`;

const RightButton = styled.button`
  display: flex;
  position: absolute;
  right: 0;
  height: 50px;
  width: 35px;
  background: url(right-arrow.png);
  cursor: pointer;
  outline: none;
  border: none;
`;

Slider.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
