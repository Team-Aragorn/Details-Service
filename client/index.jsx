import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class GameDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }


  render() {
    return (
      <div>
        <h1>Game Details</h1>
      </div>
    );
  }
}


ReactDOM.render(<GameDetails />, document.getElementById('game-details'));
