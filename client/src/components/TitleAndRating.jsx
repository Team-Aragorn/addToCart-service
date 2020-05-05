import React from 'react';

class TitleAndRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
  }

  render() {
    return (
      <div className="titleANDrating">
        <div className="gameTitle">
          {this.props.game[0].title}
        </div>
        <div className="ageRating">
          {this.props.game[0].ageRating}
        </div>
        <div className="gamePublisher">
          PublisherNameGoesHere
        </div>
      </div>
    )
  }
}

export default TitleAndRating;
