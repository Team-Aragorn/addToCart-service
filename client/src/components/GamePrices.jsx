import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../app.css';

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
      return {
        backgroundColor: 'white',
        borderBottom: 'rgb(218, 41, 28) solid 4px'
      }
    } else {
      return {
        backgroundColor: 'whitesmoke'
      }
    }
  }

  render() {
    return (
      <div className={styles.gamePrices}>
        <div className={styles.newPrice} onClick={this.newHandler} style={this.selectedStyler(this.state.newPrice)}>
          <div className={styles.mapMarker}>
            <FontAwesomeIcon icon="map-marker-alt" />
          </div>
          <div className={styles.new}>
            NEW
          </div>
          <div className={styles.nPrice}>
            ${this.props.game[0].newPrice}.00
          </div>

        </div>
        <div className={styles.usedPrice} onClick={this.usedHandler} style={this.selectedStyler(this.state.usedPrice)}>
          <div className={styles.mapMarker}>
            <FontAwesomeIcon icon="map-marker-alt" />
          </div>
          <div className={styles.used}>
            PRE-OWNED
          </div>
          <div className={styles.uPrice}>
            ${this.props.game[0].usedPrice}.00
          </div>
        </div>
        <div className={styles.digitalPrice} onClick={this.digitalHandler} style={this.selectedStyler(this.state.digitalPrice)}>
          <div className={styles.digital}>
            DIGITAL
          </div>
          <div className={styles.dPrice}>
            ${this.props.game[0].digitalPrice}.00
          </div>
        </div>

      </div>
    )
  }
}

export default GamePrices;
