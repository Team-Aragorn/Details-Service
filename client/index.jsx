/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import PhotoCarousel from './components/photoCarousel.jsx';
import Slider from './components/Slider.jsx';
import Details from './components/Details.jsx';


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
      <div>
        <div className="details">
          <Details details={data.details} />
        </div>
        <div className="slider">
          <Slider photos={data.images} />
        </div>
      </div>
    );
  }
}


ReactDOM.render(<GameDetails />, document.getElementById('game-details'));
