import React from 'react'
import './SportsClub.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SportsClub() {
    const [SportsClub, setSportsClub] = useState(true);
    var Sports = 1;
   
    return (
        <div>


            <div className="events_component_1">
                <div className="events_1">
                    <h1>SPORTS FACILITY</h1>
                </div>
                <div className="events_2">Home - Bookings - Sports Facility</div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "60vw", margin: "auto", marginTop: "90px" }}>

                <div className='membership_head'> A space to work,meet & fun</div>
                <hr />
                <div className='membership_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus.</div>
            </div>



            <div className='Card_Events'>
                <div class="sports_club"> 
                    <button div className = "sports_club_active" onClick={()=>setSportsClub(true)}>Sports Facility (4)</button>
                    {/* <button onClick={()=>setSportsClub(false)}>My Sports Club</button> */}
                </div>
                {SportsClub ==1?
                <div>
                    <div className="FacilityEvent_main">
                    <div className='FacilityEvent'>
                        <img src="/images/hockey.png" />
                        <div style={{ padding: "24px" }}>
                            <div >
                            <div style={{display:"flex" , justifyContent:"space-between",alignItems:"center"}}>
                                <div className='SportsEvents'>Sports Facility 1</div>
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

                            <Link to = '/SportsFacilityDetails'><button className='facilityEvent_book'>Book Now</button></Link>

                        </div>



                    </div>

                    <div className='FacilityEvent'>
                    <img src="/images/hockey.png" />
                        <div style={{ padding: "24px" }}>
                            <div >
                            <div style={{display:"flex" , justifyContent:"space-between",alignItems:"center"}}>
                                <div className='SportsEvents'>Sports Facility 2</div>
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

                            <Link to = '/SportsFacilityDetails'><button className='facilityEvent_book'>Book Now</button></Link>

                        </div>

                    </div>

                </div>

                <div className="FacilityEvent_main">
                    <div className='FacilityEvent'>
                    <img src="/images/hockey.png" />
                        <div style={{ padding: "24px" }}>
                            <div >
                            <div style={{display:"flex" , justifyContent:"space-between",alignItems:"center"}}>
                                <div className='SportsEvents'>Sports Facility 3</div>
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

                            <Link to = '/SportsFacilityDetails'><button className='facilityEvent_book'>Book Now</button></Link>

                        </div>


                    </div>

                    <div className='FacilityEvent'>
                    <img src="/images/hockey.png" />
                        <div style={{ padding: "24px" }}>
                            <div >
                            <div style={{display:"flex" , justifyContent:"space-between",alignItems:"center"}}>
                                <div className='SportsEvents'>Sports Facility 4</div>
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

                            <Link to = '/SportsFacilityDetails'><button className='facilityEvent_book'>Book Now</button></Link>

                        </div>

                    </div>

                </div>
                </div>
                
                :
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

                }
                
            </div>
        </div>
    )
}

export default SportsClub