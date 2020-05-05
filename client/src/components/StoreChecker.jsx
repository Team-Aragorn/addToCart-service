import React from 'react';

class StoreChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
  }

  render() {
    return (
      <div className="storeChecker">
        New at {this.props.game[0].storeLocation} (Check Other Stores)
      </div>
    )
  }
}

export default StoreChecker;
