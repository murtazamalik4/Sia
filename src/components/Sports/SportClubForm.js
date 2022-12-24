import React from "react";
import { Link } from "react-router-dom";
import "./SportClubForm.css";

const SportClubForm = () => {
  return (
    <div className="sportclubform">
      <div className="events_component_1">
        <div className="events_1">
          <h1>SPORTS CLUB</h1>
        </div>
        <div className="events_2">
          HOME - Bookings - Sports Club - All Sports Club
        </div>
      </div>

      <div className="main">
        <form action="" className="form">
          <div className="memberfield">
            <div className="Membership">Membership*</div>
            <div>
              <div>
                <input type="radio" name="member" id="newmember" />{" "}
                <label htmlFor="newmember">New Member</label>
              </div>
              <div>
                <input type="radio" name="member" id="renewal" />{" "}
                <label htmlFor="renewal">Renewal</label>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="membershiptype">Membership Type*</div>
            <div>
              <select name="" id="">
                <option value="">Membership Type</option>
              </select>
            </div>
          </div>
          <div className="field">
            <div className="fullname">Full Name*</div>
            <div>
              <input type="text" name="" id="" placeholder="Full Name" />
            </div>
          </div>
          <div className="field">
            <div className="email">Email Id*</div>
            <div>
              <input type="text" name="" id="" placeholder="Email Id" />
            </div>
          </div>
          <div className="field">
            <div className="phoneno">Phone No*</div>
            <div>
              <input type="text" name="" id="" placeholder="Phone Number" />
            </div>
          </div>
          <div className="addressfield">
            <div className="address">Address*</div>

            <div className="addressboxes">
              <div className="addressbox">
                <input type="text" placeholder="Address Line 1" />
              </div>
              <div className="addressbox">
                <input type="text" placeholder="Address Line 2" />
              </div>
              <div className="addressbox">
                <input type="text" placeholder="ZIP Code" />
                <input type="text" placeholder="Country" />
              </div>
            </div>
          </div>

          <div className="consent1 consent">
            {" "}
            <input type="checkbox" name="" id="" className="checkboox" />{" "}
            <p>I understand that information i submitted is true.</p>{" "}
          </div>
          <div className="consent2 consent">
            {" "}
            <input type="checkbox" name="" id=""  />{" "}
            <p>
              I agree to abide by SIA rules & regulations as present or as maybe
              changed from time to time.
            </p>{" "}
          </div>
          <Link to="/review_message">
            <div className="submit">Submit</div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SportClubForm;
