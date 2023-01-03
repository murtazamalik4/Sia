import React from "react";

const MembershipHistory = () => {
  return (
    <div className="history mobview">
      <div className="heading">Membership History</div>

      <div className="package">
        <div className="package1">
          <div className="left">
            <div className="packhead">Membership Package 1</div>
            <div className="membership">
              <span>Membership:</span> &nbsp; &nbsp; &nbsp; <span>Renewal</span>
            </div>
            <div className="eaddress">
              <span>Email Address:</span> &nbsp; &nbsp;{" "}
              <span>oliver@burrito.com</span>
            </div>
            <div className="memid">
              <span>Membership ID:</span> &nbsp; <span>#1234566</span>
            </div>
            <div className="amount">
              <span>Amount:</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;<span>SGD 100.00</span>
            </div>
          </div>
          <div className="right">
            <div className="appdue">
              <div className="approve">Approved</div>
              <div className="due">Due</div>
            </div>
            <div className="paynow">
              <button>Pay Now</button>
            </div>
            <div className="remdays">
              <span style={{ color: "#FF1A1A" }}>*</span> 10 days left
            </div>
          </div>
        </div>
        <div className="package2">
          <div className="left">
            <div className="packhead">Membership Package 1</div>
            <div className="membership">
              <span>Membership:</span> &nbsp; &nbsp; &nbsp;{" "}
              <span>New Member</span>
            </div>
            <div className="eaddress">
              <span>Email Address:</span> &nbsp; &nbsp;{" "}
              <span>oliver@burrito.com</span>
            </div>
            <div className="memid">
              <span>Membership ID:</span> &nbsp; <span>#1234566</span>
            </div>
            <div className="amount">
              <span>Amount:</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;<span>SGD 100.00</span>
            </div>
          </div>
          <div className="right">
            <div className="appdue">
              <div className="approve">Approved</div>
              <div className="paid">Due</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipHistory;
