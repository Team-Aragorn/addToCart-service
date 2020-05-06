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

  render() {
    return (
      <>
        <div className="inStock" style={ { color: this.state.inStock ? 'green' : 'red' } }>
          {this.state.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
        </div>
        <ul className="shippingTime">
         <li>Usually ships within 24hrs.</li>
        </ul>
      </>
    )
  }
}

export default InStockAndShippingTime;
