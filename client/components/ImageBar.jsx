import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImageBar = ({ photos }) => (
  <ImageBarWrapper>
    <Inner>
      {
        photos.map((photo) => (
          <img
            src={photo}
            alt=""
            style={{
              width: '110px',
              height: '60px',
            }}
          />
        ))
      }
    </Inner>
  </ImageBarWrapper>
);

const ImageBarWrapper = styled.div`
  width: 100%;
  max-width: 910px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding-bottom: 40px;
  img{
    width: 110px;
    height: 60px;
    padding: 0 10px;
  }
`;

const Inner = styled.div`
  margin: 0 auto;
`;

ImageBar.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageBar;
