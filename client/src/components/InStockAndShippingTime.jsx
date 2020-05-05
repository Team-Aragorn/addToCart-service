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
          {this.props.game[0].inStock}
        </div>
        <div className="shippingTime">
         Usually ships within 24hrs. (placeholder)
        </div>
      </>
    )
  }
}

export default InStockAndShippingTime;
