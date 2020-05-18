import React from 'react';

import styles from '../app.css';

class TitleAndRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    }
    this.esrb = this.esrb.bind(this);
  }

  componentDidMount() {
    if(this.props.game[0].ageRating) {

      this.setState({
        rating: this.props.game[0].ageRating,
      })
    };
  }

  esrb(rating) {
    if(rating == 1) {
      return (
        "https://addtocartbucket.s3-us-west-1.amazonaws.com/ESRB/E.png"
      )
    }
    if(rating == 2) {
      return (
        "https://addtocartbucket.s3-us-west-1.amazonaws.com/ESRB/E10%2B.png"
      )
    }
    if(rating == 3) {
      return (
        "https://addtocartbucket.s3-us-west-1.amazonaws.com/ESRB/T.png"
      )
    }
    if(rating == 4) {
      return (
        "https://addtocartbucket.s3-us-west-1.amazonaws.com/ESRB/M.png"
      )
    }
    if(rating == 5) {
      return (
        "https://addtocartbucket.s3-us-west-1.amazonaws.com/ESRB/A.png"
      )
    }
    if(rating == 6) {
      return (
        "https://addtocartbucket.s3-us-west-1.amazonaws.com/ESRB/RP.png"
      )
    }
  }

  render() {
    return (
      <>
        <div className={styles.titleANDrating}>
        <div className={styles.ageRating}>
          <img src={this.esrb(this.props.game[0].ageRating)} />
        </div>
          <div className={styles.gameTitle}>
            {this.props.game[0].title}
          </div>
        </div>
        <div className={styles.gamePublisher}>
          {this.props.game[0].publisher}
        </div>
      </>
    )
  }
}

export default TitleAndRating;
