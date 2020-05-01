import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
  }

  componentDidMount() {
    //
  }

  render() {
    return (
      <>
        <div className="titleANDrating">
          <div className="gameTitle">
            TITLEGOESHERE
          </div>
          <div className="gameRating">
            GameRating
          </div>
          <div className="gamePublisher">
            PublisherName
          </div>
        </div>
        <div className="gameReview">
          <div className="reviewStars">*****</div>
          <div className="reviewScore">#.# (####)</div>
          <div className="writeReview">Write a review</div>
        </div>
        <div className="gamePrices">
          <div className="newPrice">NEW $##.##</div>
          <div className="usedPrice">PRE-OWNED $##.##</div>
          <div className="digitalPrice">DIGITAL $##.##</div>
        </div>
        <div className="pickUp">
          <div className="pickUpInfo">
            PICKUP TEXT GOES HERE!!
          </div>
        </div>
        <div className="storeChecker">
          STORE CHECKER TEXT GOES HERE!!
        </div>
        <div className="protectionPlan">
          <div className="protectionDropdown"></div>
          <div className="planDetails">Plan Details</div>
        </div>
        <div className="addToCart">
          <button>ADD TO CART</button>
        </div>
        <div className="inStock">
          STOCK TEXT HERE
        </div>
        <div className="shippingTime">
          SHIPPING TIME HERE
        </div>
        <div className="footer">
          <div className="addToWishlist">
            ADD TO WISHLIST
          </div>
          <div className="seeTradeValue">
            SEE TRADE VALUE
          </div>
        </div>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));