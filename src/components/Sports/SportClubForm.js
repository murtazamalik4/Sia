import React from 'react'

function SportClubForm() {
  return (
    <div>
            <div className="events_component_1">
                <div className="events_1">
                    <h1>SPORTS CLUB</h1>
                </div>
                <div className="events_2">HOME - Bookings - Sports Club</div>
            </div>
            <div className='card_membership'>
                <div className="membership">
                    <div className='memmbership_left' >Membership<span style={{ color: "#F31237" }}>*</span></div>
                    <div className="membership_right_1">
                        <div>
                            <input type="radio" id="" name="brand" value=""/>
                            <label for="">New Member</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="brand" value=""/>
                            <label for="Renewal">Renewal</label>
                        </div>
                    </div>
                    </div>
                    <div className="membership">
                    <div className='memmbership_left' >Membership Type<span style={{ color: "#F31237" }}>*</span></div>
                    <div className="membership_right_2">
                    
                    <select name="Membership Type" id="Membership_Type">
                    <option value="Membership_type">Membership Type</option>
                        
                    </select>
                    </div>
                   </div>

                   <div className="membership">
                    <div className='memmbership_left' >Full Name*</div>
                    <div className="membership_right_3">
                    
                    <input type="txt" placeholder='Full Name'/>
                    </div>
                   </div>
                
                   <div className="membership">
                    <div className='memmbership_left' >Email Id*</div>
                    <div className="membership_right_4">
                    
                    <input type="txt" placeholder='Email Id'/>
                    </div>
                   </div>


                   <div className="membership">
                    <div className='memmbership_left' >Phone Number*</div>
                    <div className="membership_right_5">
                    
                    <input type="txt" placeholder='Phone Number'/>
                    </div>
                   </div>

                   <div className="membership">
                    <div className='memmbership_left' >Address</div>
                    <div className="membership_right_6">
                    
                    <input type="txt" placeholder='Address Line 1'/>
                    <input type="txt" placeholder='Address Line 2'/>
                    <div className='zip'>
                    <input type="txt" placeholder='ZIP Code'/>
                    <input type="txt" placeholder='Country'/>
                    </div>
                    </div>
                   </div>


                   <div className='tandc'>
                   <div>
                            <input type="checkbox" id="" name="" value=""/>
                            <label >I understand that information i submitted is true.</label>
                        </div>

                        <div>
                            <input type="checkbox" id="" name="" value=""/>
                            <label >I agree to abide by SIA rules & regulations as present or as maybe changed from time to time.</label>
                        </div>
 
                </div>
                </div>

               

               
        </div>
  )
}

export default SportClubForm