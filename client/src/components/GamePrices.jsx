import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

        <div className="newPrice" onClick={this.divClick}>
          <div className="mapMarker">
            <FontAwesomeIcon icon="map-marker-alt" />
          </div>
          <div className="new">
            NEW
          </div>
          <div className="nPrice">
            ${this.props.game[0].newPrice}.00
          </div>
        </div>

        <div className="usedPrice" onClick={this.divClick}>
          <div className="mapMarker">
            <FontAwesomeIcon icon="map-marker-alt" />
          </div>
          <div className="used">
            PRE-OWNED
          </div>
          <div className="uPrice">
            ${this.props.game[0].usedPrice}.00
          </div>
        </div>

        <div className="digitalPrice" onClick={this.divClick}>
          <div className="digital">
            DIGITAL
          </div>
          <div className="dPrice">
            ${this.props.game[0].digitalPrice}.00
          </div>
        </div>

      </div>
    )
  }
}

export default GamePrices;
