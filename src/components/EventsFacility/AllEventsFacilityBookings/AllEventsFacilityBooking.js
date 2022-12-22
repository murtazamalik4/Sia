import React from 'react'
import { Image } from "antd";
import { Col, Row } from "antd";
import './AllEventsFacilityBookng.css';
import { Link } from 'react-router-dom';


function EventsFacilityBooking() {


  return (
    <div>
    <div className="events_component_1">
        <div className="events_1">
          <h1>EVENTS FACILITY</h1>
        </div>
        <div className="events_2">Home - Bookings - Events Facility</div>
      </div>

      <div className="intro-container">

            <div className="intro-text-header">A space to work, meet & have fun</div>

            <div className="separator"></div>

            <div className="intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus.</div>
          </div>
          
        <div className="events-card-holder">
        <Row>
          <Col className="card-col" lg={12} sm={24}>
            <div className="events-card">
              <div className="img-holder">
                <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
              </div>
              <div className="content-holder">
                <div className="card-header">Indoor Hall</div>
                <div className="card-sub-header">CELEBRATE WITH FRIENDS WITH FAMILY</div>

                <div className="detail-holder">
 
                <Row style={{paddingBottom:"15px"}}>
                  <Col span={12}>
                    <div className="detail-label-text">
                      <div className="detail-icon-label-container">
                        <div className="detail-icon-business-hrs">
                        <img src="/assets/icons/briefcase.svg" style={{width:"16px"}} alt="" />
                        </div>
                        <div className="detail-label">Business Hrs</div>
                      </div>
                      <div className="detail-text">Mon-Fri 10 am - 8 pm</div>
                      <div className="detail-text">Sat-Sun Closed</div>
                    </div>
                  </Col>
                  <Col span={12}>
                  <div className="detail-label-text">
                      <div className="detail-icon-label-container">
                        <div className="detail-icon-business-hrs">
                        <img src="/assets/icons/fee-icon.svg" style={{width:"16px"}} alt="" />
                        </div>
                        <div className="detail-label">Fees</div>
                      </div>
                      <div className="detail-text">$0 for Members</div>
                      <div className="detail-text">$50/pax for non-member</div>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col span={12}>
                    <div className="detail-label-text">
                      <div className="detail-icon-label-container">
                        <div className="detail-icon-business-hrs">
                        <img src="/assets/icons/briefcase.svg" style={{width:"16px"}} alt="" />

                        </div>
                        <div className="detail-label">Booking Hrs</div>
                      </div>
                      <div className="detail-text">4 Hrs/Booking</div>
                    </div>
                  </Col>
                  <Col span={12}>
                  
                  </Col>
                </Row>
              
                </div>
                <div style={{padding:"25px"}}>
                  <Link to="/EventsFacilityBooking">
                  <button className='facility_booking_btn'>Book Now</button>
                  </Link>
                </div>
              </div>
             
            </div>
          </Col>

          <Col className="card-col" lg={12} sm={24}>
            <div className="events-card">
              <div className="img-holder">
                <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
              </div>
              <div className="content-holder">
                <div className="card-header">Indoor Hall</div>
                <div className="card-sub-header">CELEBRATE WITH FRIENDS WITH FAMILY</div>

                <div className="detail-holder">
 
                <Row style={{paddingBottom:"15px"}}>
                  <Col span={12}>
                    <div className="detail-label-text">
                      <div className="detail-icon-label-container">
                        <div className="detail-icon-business-hrs">
                        <img src="/assets/icons/briefcase.svg" style={{width:"16px"}} alt="" />
                        </div>
                        <div className="detail-label">Business Hrs</div>
                      </div>
                      <div className="detail-text">Mon-Fri 10 am - 8 pm</div>
                      <div className="detail-text">Sat-Sun Closed</div>
                    </div>
                  </Col>
                  <Col span={12}>
                  <div className="detail-label-text">
                      <div className="detail-icon-label-container">
                        <div className="detail-icon-business-hrs">
                        <img src="/assets/icons/fee-icon.svg" style={{width:"16px"}} alt="" />
                        </div>
                        <div className="detail-label">Fees</div>
                      </div>
                      <div className="detail-text">$0 for Members</div>
                      <div className="detail-text">$50/pax for non-member</div>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col span={12}>
                    <div className="detail-label-text">
                      <div className="detail-icon-label-container">
                        <div className="detail-icon-business-hrs">
                        <img src="/assets/icons/briefcase.svg" style={{width:"16px"}} alt="" />

                        </div>
                        <div className="detail-label">Booking Hrs</div>
                      </div>
                      <div className="detail-text">4 Hrs/Booking</div>
                    </div>
                  </Col>
                  <Col span={12}>
                  
                  </Col>
                </Row>
              
                </div>
                <div style={{padding:"25px"}}>
                  <Link to="/EventsFacilityBooking">
                  <button className='facility_booking_btn'>Book Now</button>
                  </Link>
                </div>
              </div>
             
            </div>
          </Col>
          
        </Row>
      </div>
         


     

    </div>
  )
}

export default EventsFacilityBooking