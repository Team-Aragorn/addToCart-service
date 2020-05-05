import React from 'react';

class InStockAndShippingTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
  }

  render() {
    return (
      <>
        <div className="inStock">
          STOCK TEXT HERE
        </div>
        <div className="shippingTime">
          SHIPPING TIME HERE
        </div>
      </>
    )
  }
}

export default InStockAndShippingTime;
