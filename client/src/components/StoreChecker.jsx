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
          <span className="store-new">New</span> at {this.props.game[0].storeLocation} (Check Other Stores)
        </div>
        <div>
          <div className="truck"><FontAwesomeIcon icon="truck" /></div>
          <div className="freeship">
            FREE NO HURRY SHIPPING $35+
          </div>
        </div>
      </>
    )
  }
}

export default StoreChecker;
