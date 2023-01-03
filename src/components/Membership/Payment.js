import React from "react";

const Payment = () => {
  return (
    <div className="payments mobview">
      <div className="top">
        <div className="heading">Payments</div>

        <div className="calender-range">
          <img src="assets/icons/calendar-range.png" alt="" />
          <span>23 - 30 March 2022</span>
        </div>
      </div>

      <div className="payinfobox">
        <div className="payinfo">
          <div className="eventsinfo">
            <div className="box">
              <div className="icon">
                <img src="assets/icons/arrow symbol.png" alt="" />
              </div>
              <div className="name-and-date">
                <div className="eventname">SIA Membership</div>
                <div className="eventdate">27 March 2022, at 12:30 PM</div>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <img src="assets/icons/arrow symbol.png" alt="" />
              </div>
              <div className="name-and-date">
                <div className="eventname">Music Festival</div>
                <div className="eventdate">27 March 2022, at 04:30 AM</div>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <img src="assets/icons/arrow symbol.png" alt="" />
              </div>
              <div className="name-and-date">
                <div className="eventname">Indoor Hall</div>
                <div className="eventdate">26 March 2022, at 13:45 PM</div>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <img src="assets/icons/arrow symbol.png" alt="" />
              </div>
              <div className="name-and-date">
                <div className="eventname">Sports Club</div>
                <div className="eventdate">26 March 2022, at 12:30 PM</div>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <img src="assets/icons/arrow symbol.png" alt="" />
              </div>
              <div className="name-and-date">
                <div className="eventname">Dance Festival</div>
                <div className="eventdate">26 March 2022, at 08:30 AM</div>
              </div>
            </div>
          </div>
          <div className="prices">
            <div className="pr">- $ 2,500</div>
            <div className="pr">- $ 2,500</div>
            <div className="pr">+ $ 750</div>
            <div className="pr">+ $ 1,000</div>
            <div className="pr">+ $ 2,500</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
