import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class GameReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    }
  }

  componentDidMount() {
    this.setState({
      rating: this.props.game[0].reviewScore,
    })
  }

  scorePicker() {
    if(this.state.rating === 0) {
      return (
        <>
          BAD GAME 0 STARS BOOO DONT BUY THIS
        </>
      );
    }

    if(this.state.rating === 1) {
      return (
        <>
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon={['far', 'star']} />
          <FontAwesomeIcon icon={['far', 'star']} />
          <FontAwesomeIcon icon={['far', 'star']} />
          <FontAwesomeIcon icon={['far', 'star']} />
        </>
      );
    }

    if(this.state.rating === 2) {
      return (
        <>
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon={['far', 'star']} />
          <FontAwesomeIcon icon={['far', 'star']} />
          <FontAwesomeIcon icon={['far', 'star']} />
        </>
      );
    }

    if(this.state.rating === 3) {
      return (
        <>
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon={['far', 'star']} />
          <FontAwesomeIcon icon={['far', 'star']} />
        </>
      );
    }

    if(this.state.rating === 4) {
      return (
        <>
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon={['far', 'star']} />
        </>
      );
    }

    if(this.state.rating === 5) {
      return (
        <>
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
        </>
      );
    }
  }


  render() {
    return (
      <div className="gameReview">
        <div className="reviewStars">{this.scorePicker()}</div>
        <div className="reviewScore">{this.props.game[0].reviewScore}.0 ({this.props.game[0].reviewCount})</div>
        <div className="writeReview">Write a review</div>
      </div>
    );
  }
}

export default GameReview;
