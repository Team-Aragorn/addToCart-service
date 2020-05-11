import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <div className="storeChecker">
          <span className="store-new">New</span> at {this.props.game[0].storeLocation}
        </div>
        <div className="checkOthers">
          (Check Other Stores)
        </div>
        <div>
          <div className="freeship">
            <span className="truck">
              <FontAwesomeIcon icon="truck" />
            </span>
            <span className="freeship-text">
              FREE NO HURRY SHIPPING $35+
            </span>
          </div>
        </div>
      </>
    )
  }
}

export default StoreChecker;
