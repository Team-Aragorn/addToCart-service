import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../app.css';

class WishlistAndTradeIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
  }

  render() {
    return (
      <div className={styles.wishlistAndTradeValue}>
        <div className={styles.addToWishlist}>
        <FontAwesomeIcon icon="bars" />ADD TO WISHLIST
        </div>
        <div className={styles.seeTradeValue}>
        <FontAwesomeIcon icon="retweet" />SEE TRADE VALUE
        </div>
      </div>
    )
  }
}

export default WishlistAndTradeIn;
