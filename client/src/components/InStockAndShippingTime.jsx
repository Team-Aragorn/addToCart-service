import React from 'react';

import styles from '../app.css';

class InStockAndShippingTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inStock: false,
    }
  }

  componentDidMount() {
    if(this.props.game[0].inStock) {
      this.setState({
        inStock: true,
      })
    };
  };

  render() {
    return (
      <>
        <div className={styles.inStock} style={ { color: this.state.inStock ? 'rgb(38, 151, 113)' : 'red' } }>
          {this.state.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
        </div>
        <ul className={styles.shippingTime}>
         <li>Usually ships within 24hrs.</li>
        </ul>
        <div className={styles.theDiv}><hr></hr></div>
      </>
    )
  }
}

export default InStockAndShippingTime;
