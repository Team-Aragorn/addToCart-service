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
        <div className="newPrice">NEW ${this.props.game[0].newPrice}.00</div>
        <div className="usedPrice">PRE-OWNED ${this.props.game[0].usedPrice}.00</div>
        <div className="digitalPrice">DIGITAL ${this.props.game[0].digitalPrice}.00</div>
      </div>
    )
  }
}

export default GamePrices;
