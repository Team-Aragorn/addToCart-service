import React from 'react';

class GamePrices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
  }

  render() {
    return (
      <div className="gamePrices">
        <div className="newPrice">NEW $##.##</div>
        <div className="usedPrice">PRE-OWNED $##.##</div>
        <div className="digitalPrice">DIGITAL $##.##</div>
      </div>
    )
  }
}

export default GamePrices;
