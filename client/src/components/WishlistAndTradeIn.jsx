import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class WishlistAndTradeIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
  }

  render() {
    return (
      <div className="wishlistAndTradeValue">
        <div className="addToWishlist">
        <FontAwesomeIcon icon="bars" />ADD TO WISHLIST
        </div>
        <div className="seeTradeValue">
        <FontAwesomeIcon icon="retweet" />SEE TRADE VALUE
        </div>
      </div>
    )
  }
}

export default WishlistAndTradeIn;
