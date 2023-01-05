import React from 'react'
import { Image } from "antd";
import { Col, Row } from "antd";
import './SportsClubDetails.css'

function SportsClubDetails() {
  return (
    <div >
         <div className="events_component_1">
        <div className="events_1">
          <h1>SPORTS SECTION</h1>
        </div>
        <div className="events_2">Home - Bookings - Sports Section - All Sports Section - Sports Section 1</div>
      </div>

      <div className='sportClub_head'>
        <div>Sports Section 1</div>
        <div>10 seats Available</div>
      </div>
        <div className="">
        <div className="sportClub_img">
          <Row className="gallery-imgs-row" gutter={8}>
          <Col span={12}>
              <Image
                className="large_img"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              /></Col>
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
          <div className='sportsClub_desc'>
            <div className='sportsClub_desc_head'>Descriptions</div>
            <div className='sportsClub_desc_info'>eu ex placerat cursus turpis cursus nisi tortor. id volutpat Nam non. viverra amet, ex nisi Sed Donec quam sit dui. laoreet ullamcorper in viverra Nunc dui. leo. Vestibulum Sed turpis lorem. placerat convallis. id amet, nec laoreet elit. laoreet elit. convallis. hendrerit Morbi amet, at, elementum faucibus lacus viverra In Ut tincidunt lobortis, sodales. sit tincidunt efficitur. Vestibulum placerat. at adipiscing ullamcorper Cras adipiscing Nam felis, Nullam est. Nam In Vestibulum lacus, at tincidunt at ullamcorper commodo Ut Morbi dolor lacus massa adipiscing id eu eu Quisque nec non, sed amet, massa Ut nibh vitae placerat facilisis elementum leo. Quisque Vestibulum enim. nibh Cras massa Ut quis leo. eu 
            </div>
            
          <div className='SportsClub_info'>
            <div className='SportsClub_info_head'>Club Information</div>
            <div  className='SportsClub_timing'>
                                <div className='SportsClub_timing_1'>
                                    <div>Business Hrs</div>
                                    <div>Mon-Fri 10 am - 8 pm</div>
                                    <div>Sat-Sun Closed</div>
                                </div>
                                <div className='SportsClub_timing_2'>
                                    <div>FEES</div>
                                    <div>0$ for members</div>
                                    <div>50$/tax for non members</div>
                                </div>
  
                            <div className='SportsClub_timing_3'>
                                <div>Booking Hrs</div>
                                <div>4 Hrs/Booking</div>
                            </div>
                            </div>
                            </div>
           <div>
           

       

          </div>
          </div>
          {/* <div>
          <div className='SportsClub_info_card'>
          <div className='SportsClub_info_head'>Club Information</div>
                <input type="search" placeholder='Search' id="searchSports" name="search" />
                <div id="sportsClub_select">
                <select name="select" >
                    <option value="">Members Name</option>
                </select>
                </div>
                <div className="sportClub_members_one">John Smith</div>
                <div className='sportClub_members_two'>John Smith</div>
                <div className="sportClub_members_one">John Smith</div>
                <div className="sportClub_members_two">John Smith</div>
                <div className="sportClub_members_one">John Smith</div>
                <div className="sportClub_members_two">John Smith</div>
                <div className="sportClub_members_one">John Smith</div>
                <div className="sportClub_members_two">John Smith</div>
                <div className="sportClub_members_one">John Smith</div>
                <div className="sportClub_members_two">John Smith</div>
           
          
            </div>
            <div className='JoinOurClub'>
                <div className='JoinOurClub_three'>
                    <div  className='JoinOurClub_one'>We'd love to have you!</div>
                    <div  className='JoinOurClub_two'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus.</div>
                </div> 
                <div>
                    <button className='JoinOurClub_btn'>Join Our Club</button>
                </div>
            </div>
            </div> */}
            <div>
            <div className="FacilityEvent_main">
              
                    <div className='FacilityEvent'>
                        <img src="/images/hockey.png" />
                        <div style={{ padding: "24px" }}>
                            <div >
                            <div style={{display:"flex" , justifyContent:"space-between",alignItems:"center"}}>
                                <div className='SportsEvents'>Indoor Hall</div>
                                <div className='sports_availability'>10 Seats Available</div>
                            </div>
                            <div >
                                
                                <div className='FacilityEvent_desc'>Celebrate WITH FREINDS AND FAMILY</div>
                            </div>
                            </div>
                            <div className='FacilityEvent_info'>
                                <div className='FacilityEvent_timings'>
                                    <div>Business Hrs</div>
                                    <div>Mon-Fri 10 am - 8 pm</div>
                                    <div>Sat-Sun Closed</div>
                                </div>
                                <div className='FacilityEvent_fees'>
                                    <div>FEES</div>
                                    <div>0$ for members</div>
                                    <div>50$/tax for non members</div>
                                </div>
                            </div>
                            <div className='FaciltyEvent_booking_hrs'>
                                <div>Booking Hrs</div>
                                <div>4 Hrs/Booking</div>
                            </div>

                            <button className='facilityEvent_book'>Book Now</button>
                        </div>



                    </div>

                    <div className='FacilityEvent'>
                    <img src="/images/hockey.png" />
                        <div style={{ padding: "24px" }}>
                            <div >
                            <div style={{display:"flex" , justifyContent:"space-between",alignItems:"center"}}>
                                <div className='SportsEvents'>Indoor Hall</div>
                                <div className='sports_availability'>10 Seats Available</div>
                            </div>
                            <div >
                                
                                <div className='FacilityEvent_desc'>Celebrate WITH FREINDS AND FAMILY</div>
                            </div>
                            </div>
                            <div className='FacilityEvent_info'>
                                <div className='FacilityEvent_timings'>
                                    <div>Business Hrs</div>
                                    <div>Mon-Fri 10 am - 8 pm</div>
                                    <div>Sat-Sun Closed</div>
                                </div>
                                <div className='FacilityEvent_fees'>
                                    <div>FEES</div>
                                    <div>0$ for members</div>
                                    <div>50$/tax for non members</div>
                                </div>
                            </div>
                            <div className='FaciltyEvent_booking_hrs'>
                                <div>Booking Hrs</div>
                                <div>4 Hrs/Booking</div>
                            </div>

                            <button className='facilityEvent_book'>Book Now</button>
                        </div>

                    </div>

                </div>

            </div>
    </div>
  )
}

export default SportsClubDetails