import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class GamePrices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPrice: true,
      usedPrice: false,
      digitalPrice: false,
    }
    this.newHandler = this.newHandler.bind(this);
    this.usedHandler = this.usedHandler.bind(this);
    this.digitalHandler = this.digitalHandler.bind(this);
    this.selectedStyler = this.selectedStyler.bind(this);
  }

  // componentDidMount() {
  //   //
  // }

  newHandler() {
    this.setState({
      newPrice: true,
      usedPrice: false,
      digitalPrice: false,
    })
  }

  usedHandler() {
    this.setState({
      newPrice: false,
      usedPrice: true,
      digitalPrice: false,
    })
  }

  digitalHandler() {
    this.setState({
      newPrice: false,
      usedPrice: false,
      digitalPrice: true,
    })
  }

  selectedStyler(state) {
    if(state) {
      return 'white'
    } else {
      return 'whitesmoke'
    }
  }

  render() {
    return (
      <div className="gamePrices">
        <div className="newPrice" onClick={this.newHandler} style={{backgroundColor: this.selectedStyler(this.state.newPrice)}}>
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
        <div className="usedPrice" onClick={this.usedHandler} style={{backgroundColor: this.selectedStyler(this.state.usedPrice)}}>
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
        <div className="digitalPrice" onClick={this.digitalHandler} style={{backgroundColor: this.selectedStyler(this.state.digitalPrice)}}>
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
