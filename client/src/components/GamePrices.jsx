import React from 'react';

class GamePrices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'new',
    }
  }

  // componentDidMount() {
  //   //
  // }

  divClick = (e) => {
    console.log("e", e)
    // if(/* */) {
    //   this.setState({
    //     /* */
    //   })
    // } else if (/* */) {
    //   this.setState({
    //     /* */
    //   })
    // } else {
    //   this.setState({
    //     /* */
    //   })
    // }
  }

  render() {
    return (
      <div className="gamePrices">
        <div className="newPrice" onClick={this.divClick}><div className="new">NEW</div>${this.props.game[0].newPrice}.00</div>
        <div className="usedPrice" onClick={this.divClick}><div className="used">PRE-OWNED</div>${this.props.game[0].usedPrice}.00</div>
        <div className="digitalPrice" onClick={this.divClick}><div className="digital">DIGITAL</div>${this.props.game[0].digitalPrice}.00</div>
      </div>
    )
  }
}

export default GamePrices;
