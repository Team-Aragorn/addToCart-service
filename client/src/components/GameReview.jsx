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
        <div className="reviewStars">***** (PLACEHOLDER STARS)</div>
        <div className="reviewScore">{this.props.game[0].reviewScore}.0 ({this.props.game[0].reviewCount})</div>
        <div className="writeReview">Write a review</div>
      </div>
    )
  }
}

export default GameReview;
