import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./MemberProfilePage.css";

const MemberProfilePage = () => {
  return (
    <div className="memberprofilepage">
      <div className="profilepagemain">
        <div className="userinfo">
          <div>
            <div className="pic">
              <img src="assets/images/image-profilepic.png" alt="" />
            </div>
            <div className="username">
              <div>John Smith</div>
              <div>#123456</div>
            </div>
          </div>

          <div className="fname">
            <span>Full Name:</span> <span>John Smith</span>
          </div>
          <div className="mobile">
            <span>Mobile:</span> <span>(44) 123 1234 123</span>
          </div>
          <div className="email">
            <span>Email:</span> <span>johnsmith@gmail.com</span>
          </div>
          <div className="location">
            <span>Location:</span> <span>Singapore</span>
          </div>
        </div>
        
        <div className="mobnavigation">
            <Link to = "memebershiphistory">MembershipHistory</Link> 
            <Link to = "payment">Payments</Link> 
          </div>
        <div className="bottom">
          <div className="history hide">
            <div className="heading">Membership History</div>

            <div className="package">
              <div className="package1">
                <div className="left">
                  <div className="packhead">Membership Package 1</div>
                  <div className="membership">
                    <span>Membership:</span> &nbsp; &nbsp; &nbsp;{" "}
                    <span>Renewal</span>
                  </div>
                  <div className="eaddress">
                    <span>Email Address:</span> &nbsp; &nbsp;{" "}
                    <span>oliver@burrito.com</span>
                  </div>
                  <div className="memid">
                    <span>Membership ID:</span> &nbsp; <span>#1234566</span>
                  </div>
                  <div className="amount">
                    <span>Amount:</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp;<span>SGD 100.00</span>
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
                    <span>Amount:</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp;<span>SGD 100.00</span>
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
          <div className="payments hide">
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
                      <div className="eventdate">
                        27 March 2022, at 12:30 PM
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="icon">
                      <img src="assets/icons/arrow symbol.png" alt="" />
                    </div>
                    <div className="name-and-date">
                      <div className="eventname">Music Festival</div>
                      <div className="eventdate">
                        27 March 2022, at 04:30 AM
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="icon">
                      <img src="assets/icons/arrow symbol.png" alt="" />
                    </div>
                    <div className="name-and-date">
                      <div className="eventname">Indoor Hall</div>
                      <div className="eventdate">
                        26 March 2022, at 13:45 PM
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="icon">
                      <img src="assets/icons/arrow symbol.png" alt="" />
                    </div>
                    <div className="name-and-date">
                      <div className="eventname">Sports Club</div>
                      <div className="eventdate">
                        26 March 2022, at 12:30 PM
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="icon">
                      <img src="assets/icons/arrow symbol.png" alt="" />
                    </div>
                    <div className="name-and-date">
                      <div className="eventname">Dance Festival</div>
                      <div className="eventdate">
                        26 March 2022, at 08:30 AM
                      </div>
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
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default MemberProfilePage;
