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
          <div>FREE PICK UP AT STORE WITH DELIVERY@DOOR</div>
          <div>Order by 6pm local time to pick up TODAY!</div>
        </div>
      </div>
    )
  }
}

export default PickUp;

