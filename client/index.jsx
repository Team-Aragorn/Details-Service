/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import PhotoCarousel from './components/photoCarousel.jsx';


class GameDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    const url = window.location.href;
    const id = url.slice(url.indexOf('=') + 1);
    axios.get(`/api/game/${id}`)
      .then((res) => {
        const { images } = res.data[0];
        this.updateImages(images);
      });
  }

  updateImages(data) {
    this.setState({
      images: data,
    });
  }

  render() {
    const photos = this.state;
    return (
      <PhotoCarousel photos={photos.images} />
    );
  }
}


ReactDOM.render(<GameDetails />, document.getElementById('game-details'));
