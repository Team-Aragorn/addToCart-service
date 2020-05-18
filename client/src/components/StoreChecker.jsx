import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../app.css';

class StoreChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
  }

  render() {
    return (
      <>
        <div className={styles.storeChecker}>
          <span className={styles.storenew}>New</span> at {this.props.game[0].storeLocation}
        </div>
        <div className={styles.checkOthers}>
          (Check Other Stores)
        </div>
        <div>
          <div className={styles.freeship}>
            <span className={styles.truck}>
              <FontAwesomeIcon icon="truck" />
            </span>
            <span className={styles.freeshiptext}>
              FREE NO HURRY SHIPPING $35+
            </span>
          </div>
        </div>
      </>
    )
  }
}

export default StoreChecker;
