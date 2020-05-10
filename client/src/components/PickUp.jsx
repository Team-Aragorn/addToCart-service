import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class PickUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
  }

  render() {
    return (
      <div className="pickUp">
        <div className="pickUpInfo">
          <div>
            <span className="marker">
              <FontAwesomeIcon icon="map-marker-alt" />
            </span>
            <span className="pickup1">
            FREE PICK UP AT STORE WITH DELIVERY@DOOR
            </span>
          </div>
          <div className="pickup2">Order by 6pm local time to pick up TODAY!</div>
        </div>
      </div>
    )
  }
}

export default PickUp;

