import React from "react";
import { Image } from "antd";
import { Col, Row } from "antd";
import "./EventsFacilityBookng.css";
import { Link } from "react-router-dom";

function EventsFacilityBooking() {
  return (
    <div className="eventsfacilitybooking">
      <div className="events_component_1">
        <div className="events_1">
          <h1>EVENTS FACILITY</h1>
        </div>
        <div className="events_2">Home - Bookings - Events Facility</div>
      </div>
      <div className="sportClub_head">
        <div>Indoor Hall</div>
        <div>Unoccupied</div>
      </div>
      <div>
        <div className="sportClub_img">
          <Row className="gallery-imgs-row" gutter={8}>
            <Col span={12}>
              <Image
                className="large_img"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Col>
            <Col span={12}>
              <Row gutter={8}>
                <Col span={12}>
                  <Image
                    className="small_img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </Col>
                <Col span={12}>
                  <Image
                    className="small_img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </Col>
              </Row>
              <Row gutter={8} style={{ marginTop: 8 }}>
                <Col span={12}>
                  <Image
                    className="small_img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </Col>
                <Col span={12}>
                  <Image
                    className="small_img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>

      <div className="eventsFacilityBookingCard">
        <div className="EventsFacilityBooking_card_one">
          <div>
            <div className="sportsClub_desc_head events_facility_desc">
              Descriptions
            </div>
            <div className="sportsClub_desc_info">
              eu ex placerat cursus turpis cursus nisi tortor. id volutpat Nam
              non. viverra amet, ex nisi Sed Donec quam sit dui. laoreet
              ullamcorper in viverra Nunc dui. leo. Vestibulum Sed turpis lorem.
              placerat convallis. id amet, nec laoreet elit. laoreet elit.
              convallis. hendrerit Morbi amet, at, elementum faucibus lacus
              viverra In Ut tincidunt lobortis, sodales. sit tincidunt
              efficitur. Vestibulum placerat. at adipiscing ullamcorper Cras
              adipiscing Nam felis, Nullam est. Nam In Vestibulum lacus, at
              tincidunt at ullamcorper commodo Ut Morbi dolor lacus massa
              adipiscing id eu eu Quisque nec non, sed amet, massa Ut nibh vitae
              placerat facilisis elementum leo. Quisque Vestibulum enim. nibh
              Cras massa Ut quis leo. eu
            </div>
          </div>

          <div className="SportsEvents_info">
            <div className="SportsEvents_info_head events_facility_desc">
              Booking Information
            </div>
            <div className="FacilityEvent_info  ">
              <div className="FacilityEvent_timings">
                <div>Business Hrs</div>
                <div>Mon-Fri 10 am - 8 pm</div>
                <div>Sat-Sun Closed</div>
              </div>
              <div className="FacilityEvent_fees">
                <div>FEES</div>
                <div>0$ for members</div>
                <div>50$/tax for non members</div>
              </div>
            </div>
            <div className="FaciltyEvent_booking_hrs FacilityEvent_fees">
              <div className="events_facility_hrs">Booking Hrs</div>
              <div>4 Hrs/Booking</div>
            </div>
          </div>
          <div>
            <div className="events_amenties">Amenties we offer</div>
            <div className="events_amenties_card">
              <div className="events_amenties_one">
                <div>
                  <img src="/assets/icons/tick.svg"></img>Safety & Hygine
                </div>
                <div>
                  {" "}
                  <img src="/assets/icons/tick.svg" />
                  Wifi
                </div>
                <div>
                  {" "}
                  <img src="/assets/icons/tick.svg" />
                  Central air conditioning
                </div>
              </div>
              <div className="events_amenties_two">
                <div>
                  {" "}
                  <img src="/assets/icons/tick.svg"></img>Security cameras on
                  property
                </div>
                <div>
                  {" "}
                  <img src="/assets/icons/tick.svg"></img>Drinking Water
                </div>
                <div>
                  {" "}
                  <img src="/assets/icons/tick.svg"></img>Refrigerator
                </div>
              </div>
            </div>
          </div>
          <div className="facility_booking_map">
            <img src="./images/Map.png" />
          </div>
        </div>

        <div className="EventsFacilityBooking_card_two">
          <div className="EventsFacilityBooking_card_two_head">
            <div>Indoor Hall</div>
            <div>
              <span>$75</span>/Hrs
            </div>
          </div>
          <div className="EventsFacilityBooking_card_two_input">
            <div className="Card_two_input">
              <div className="card_two_input_one">
                <div>
                  {" "}
                  <label>Date</label>{" "}
                </div>
                <select name="select">
                  <option value="">30/08/2022</option>
                </select>
              </div>
              <div className="card_two_input_one">
                <div>
                  {" "}
                  <label>Time</label>
                </div>
                <select name="select">
                  <option value="">8:00 am</option>
                </select>
              </div>
            </div>
            <div className="card_two_input_one card_input_margin">
              <div>
                <label>GUESTS</label>
              </div>
              <select name="select">
                <option value="">10</option>
              </select>
            </div>
          </div>
          <div className="timing_flex_main">
            <div className="timing_flex">
              <div className="left">$75 x 3 Hrs</div>
              <div className="right"> $225</div>
            </div>
            <div className="timing_flex">
              <div className="left">discount</div>
              <div className="right">-$50</div>
            </div>
            <div className="timing_flex">
              <div className="left"> taxes and fees</div>
              <div className="right">$10</div>
            </div>
          </div>
          <div className="timing_flex">
            <div className="right">Total</div>
            <div className="right">$195</div>
          </div>
          <Link to="/EventsFacilityCheckout">
            <button className="facility_booking_btn">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventsFacilityBooking;
