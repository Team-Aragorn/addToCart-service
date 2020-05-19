import React from 'react';

import styles from '../app.css';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
  }

  render() {
    return (
      <div className={styles.addToCartDiv}>
        <button className={styles.addToCartButton}>ADD TO CART</button>
      </div>
    )
  }
}

export default AddToCart;
