import React from 'react';

import styles from '../app.css';

class ProtectionPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
  }

  render() {
    return (
      <div className={styles.protectionPlan}>
        <div className={styles.protectionDropdown}>
          <select className={styles.plan} className={styles.planselect}>
              <option value="NO">NO PROTECTION PLAN +$0.00</option>
              <option value="1YR">1-YEAR PLAN +$3.00</option>
          </select>
        </div>
        <div className={styles.planDetails}>Plan Details</div>
      </div>
    )
  }
}

export default ProtectionPlan;
