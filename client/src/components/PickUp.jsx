import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../app.css';

class PickUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
  }

  render() {
    return (
      <div className={styles.pickUp}>
        <div className={styles.pickUpInfo}>
          <div>
            <span className={styles.marker}>
              <FontAwesomeIcon icon="map-marker-alt" />
            </span>
            <span className={styles.pickup1}>
            FREE PICK UP AT STORE WITH DELIVERY@DOOR
            </span>
          </div>
          <div className={styles.pickup2}>Order by 6pm local time to pick up TODAY!</div>
        </div>
      </div>
    )
  }
}

export default PickUp;

