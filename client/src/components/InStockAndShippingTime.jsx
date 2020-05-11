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
      this.setState({
        inStock: true,
      })
    };
  };

  render() {
    return (
      <>
        <div className="inStock" style={ { color: this.state.inStock ? 'rgb(38, 151, 113)' : 'red' } }>
          {this.state.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
        </div>
        <ul className="shippingTime">
         <li>Usually ships within 24hrs.</li>
        </ul>
        <div className="theDiv"><hr></hr></div>
      </>
    )
  }
}

export default InStockAndShippingTime;
