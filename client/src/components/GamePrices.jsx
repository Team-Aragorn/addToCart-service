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
        <div className="newPrice"><div>NEW</div>${this.props.game[0].newPrice}.00</div>
        <div className="usedPrice"><div>PRE-OWNED</div>${this.props.game[0].usedPrice}.00</div>
        <div className="digitalPrice"><div>DIGITAL</div>${this.props.game[0].digitalPrice}.00</div>
      </div>
    )
  }
}

export default GamePrices;
