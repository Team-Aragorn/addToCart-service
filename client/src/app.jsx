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
      //
    }
  }

  componentDidMount() {
    //
  }

  render() {
    return (
      <>
        <TitleAndRating/>
        <GameReview/>
        <GamePrices/>
        <PickUp/>
        <StoreChecker/>
        <ProtectionPlan/>
        <AddToCart/>
        <InStockAndShippingTime/>
        <WishlistAndTradeIn/>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));