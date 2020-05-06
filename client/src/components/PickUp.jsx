import React from 'react';

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
          <div className="pickup1">FREE PICK UP AT STORE WITH DELIVERY@DOOR</div>
          <div className="pickup2">Order by 6pm local time to pick up TODAY!</div>
        </div>
      </div>
    )
  }
}

export default PickUp;

