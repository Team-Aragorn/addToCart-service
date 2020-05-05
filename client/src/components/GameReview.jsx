import React from 'react';

class GameReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
  }

  render() {
    return (
      <div className="gameReview">
        <div className="reviewStars">*****</div>
        <div className="reviewScore">#.# (####)</div>
        <div className="writeReview">Write a review</div>
      </div>
    )
  }
}

export default GameReview;
