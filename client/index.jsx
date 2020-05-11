/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';


import PhotoCarousel from './components/photoCarousel.jsx';
import Slider from './components/Slider.jsx';
import Details from './components/Details.jsx';
import ImageBar from './components/ImageBar.jsx';


class GameDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      details: '',
    };
  }

  componentDidMount() {
    const url = window.location.href;
    const id = url.slice(url.indexOf('=') + 1);
    axios.get(`/api/game/${id}`)
      .then((res) => {
        const { images } = res.data[0];
        const dummyDetails = res.data[0].details;
        this.updateState(images, dummyDetails);
      });
  }

  updateState(images, dummyDetails) {
    this.setState({
      images,
      details: dummyDetails,
    });
  }

  render() {
    const data = this.state;
    return (
      <Wrapper>
        <Details details={data.details} />
        <Slider photos={data.images} />
        <ImageBar photos={data.images} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 1100px;
  -webkit-font-smoothing: antialiased;
`;


ReactDOM.render(<GameDetails />, document.getElementById('game-details'));
