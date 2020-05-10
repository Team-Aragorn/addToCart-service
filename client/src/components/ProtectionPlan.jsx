import React from 'react';

class ProtectionPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
  }

  render() {
    return (
      <div className="protectionPlan">
        <div className="protectionDropdown">
          <select name="plan" id="plan-select">
              <option value="NO">NO PROTECTION PLAN +$0.00</option>
              <option value="1YR">1-YEAR PLAN +$3.00</option>
          </select>
        </div>
        <div className="planDetails">Plan Details</div>
      </div>
    )
  }
}

export default ProtectionPlan;
