import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faMapMarkerAlt, faTruck, faBars, faRetweet } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import TitleAndRating from './components/TitleAndRating.jsx';
import GameReview from './components/GameReview.jsx';
import GamePrices from './components/GamePrices.jsx';
import PickUp from './components/PickUp.jsx';
import StoreChecker from './components/StoreChecker.jsx';
import ProtectionPlan from './components/ProtectionPlan.jsx';
import AddToCart from './components/AddToCart.jsx';
import InStockAndShippingTime from './components/InStockAndShippingTime.jsx';
import WishlistAndTradeIn from './components/WishlistAndTradeIn.jsx';

library.add(faStar, farStar, faMapMarkerAlt, faTruck, faBars, faRetweet)

class AddToCartApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameid: 0,
      game: [],
      loading: true,
    }
    this.getGame = this.getGame.bind(this);
    this.url = 'http://localhost:3001/api/'
  }

  componentDidMount() {
    const gid = window.location.pathname.match(/\/games\/(\d+)\//);
    console.log("GID", gid)
    this.setState({
      gameid: gid[1],
    }, () => {
      this.getGame();
    })
  }

  getGame() {
    const { gameid } = this.state;

    fetch(`${this.url}${gameid}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          game: data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    if(this.state.loading) {
      return null;
    }
    return (
      <>
        <TitleAndRating game={this.state.game} />
        <GameReview game={this.state.game} />
        <GamePrices game={this.state.game} />
        <PickUp />
        <StoreChecker game={this.state.game} />
        <ProtectionPlan />
        <AddToCart />
        <InStockAndShippingTime game={this.state.game} />
        <WishlistAndTradeIn />
      </>
    )
  }
}

ReactDOM.render(<AddToCartApp />, document.getElementById('addToCart'));