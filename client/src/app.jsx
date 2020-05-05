import React from 'react';
import ReactDOM from 'react-dom';

import TitleAndRating from './components/TitleAndRating.jsx';
import GameReview from './components/GameReview.jsx';
import GamePrices from './components/GamePrices.jsx';
import PickUp from './components/PickUp.jsx';
import StoreChecker from './components/StoreChecker.jsx';
import ProtectionPlan from './components/ProtectionPlan.jsx';
import AddToCart from './components/AddToCart.jsx';
import InStockAndShippingTime from './components/InStockAndShippingTime.jsx';
import WishlistAndTradeIn from './components/WishlistAndTradeIn.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameid: 0,
      game: [],
      loading: true,
    }
    this.getGame = this.getGame.bind(this);
    this.url = 'http://localhost:3001/game/'
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
          game: [data],
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
        <TitleAndRating />
        <GameReview />
        <GamePrices />
        <PickUp />
        <StoreChecker />
        <ProtectionPlan />
        <AddToCart />
        <InStockAndShippingTime />
        <WishlistAndTradeIn />
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));