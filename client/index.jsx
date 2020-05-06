/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PhotoCarousel from './components/PhotoCarousel.jsx';


class GameDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    this.getImages();
  }

  getImages() {
    const url = window.location.href;
    const id = url.slice(-1);
    $.ajax({
      type: 'GET',
      url: `/api/game/${id}`,
      success: (data) => {
        this.setState({ images: data[0].images });
      },
      error: () => {
        console.log('GET ERROR!');
      },
    });
  }

  render() {
    return (
      <div>
        <h1>Game Details</h1>
        <PhotoCarousel photos={this.state.images} />
      </div>
    );
  }
}


ReactDOM.render(<GameDetails />, document.getElementById('game-details'));
