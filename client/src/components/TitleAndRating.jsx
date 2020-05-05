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
          TITLEGOESHERE
        </div>
        <div className="gameRating">
          GameRating
        </div>
        <div className="gamePublisher">
          PublisherName
        </div>
      </div>
    )
  }
}

export default TitleAndRating;
