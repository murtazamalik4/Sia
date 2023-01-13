import React from "react";
import "./CheckOut.css";

function CheckOut() {
  return (
    <div>
      <div className="events_component_1">
        <div className="events_1">
          <h1>MEMBERSHIP</h1>
        </div>
        <div className="events_2">HOME - Membership</div>
      </div>
      <div className="checkout">
        <div className="membership_summary">
          <div className="membership_head">Membership Summary</div>
          <div className="membership_plan">
            <div className="membership_plan_">
              <div>SIA Membership Plan 1</div>
              <div>S$100.00</div>
            </div>
            <div>Days: 1 Year</div>
          </div>
          <label className="discount">Discount Code</label>
          <div class="buttonInside">
            <input placeholder="%" />
            <button id="apply">Apply</button>
          </div>

          <div className="checkout_price">
            <div>
              <div className="price_title">Subtotal</div>
              <div className="price">S$100.00</div>
            </div>
            <div>
              <div className="price_title">Tax</div>
              <div className="price">S$10.00</div>
            </div>
            <div>
              <div className="price_title">Discount(10%)</div>
              <div className="price">-$10.00</div>
            </div>
          </div>
          <div className="checkout_total">
            <div className="price_title">Total</div>
            <div className="price">S$100.00</div>
          </div>
        </div>

        <div className="checkout_form">
          <div>
            <label>Email</label>
            <input type="email" name="" id="" placeholder="Email" />
          </div>
          <div>
            <label>Phone number</label>
            <input type="Text" placeholder="Phone number" />
          </div>
          <div>
            <label>Card Number</label>
            <input
              id="ccn"
              type="tel"
              inputmode="numeric"
              pattern="[0-9\s]{13,19}"
              autocomplete="cc-number"
              maxlength="19"
              placeholder="1234 1234 1234 1234"
            />
          </div>
          <div className="card_info">
            <div>
              <label>Expiry</label>
              <input placeholder="MM/YY" />
            </div>
            <div>
              <label>CVV</label>
              <input type="numericmode" placeholder="CVV" />
            </div>
          </div>

          <div className="card_info">
            <div>
              <label>Country</label>
              <input type="Country" placeholder="Country" />
            </div>
            <div>
              <label>Postal Code</label>
              <input inputmode="numeric" placeholder="Postal Code" />
            </div>
          </div>
          <div className="t_and_c">
            <input type="checkbox" name="" id="checkbox" />
            <label>
              Please check to acknowledge our Privacy & Terms Policy
            </label>
          </div>

          <button>Pay $100.00</button>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
