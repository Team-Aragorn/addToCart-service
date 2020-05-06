import React from 'react';

class InStockAndShippingTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inStock: false,
    }
  }

  componentDidMount() {
    if(this.props.game[0].inStock) {
      console.log("HELLO YES IN STOCK HAPPY!");
      this.setState({
        inStock: true,
      })
    };
  };

  // function inStock(props) {
  //   return <div className="in-stock">IN STOCK</div>
  // }

  // function outStock(props) {
  //   return <div className="out-stock">OUT OF STOCK</div>
  // }

  render() {
    return (
      <>
        <div className="inStock">
          {this.state.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
        </div>
        <div className="shippingTime">
         Usually ships within 24hrs.
        </div>
      </>
    )
  }
}

export default InStockAndShippingTime;
