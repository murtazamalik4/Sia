import React from 'react'

import {
  FileDoneOutlined 
} from "@ant-design/icons";
import './EventsFacilityBookingCOnfirmed.css'

function EventsFacilityBookingConfirmed() {
  return (
    <div>
      <div className="events_component_1">
        <div className="events_1">
          <h1>EVENTS FACILITY</h1>
        </div>
        <div className="events_2">Home - Bookings - Events Facility - Checkout</div>
      </div>

      <div className='EventsFacilityBooking_component'>
        <div className='booking_confirmed_flex'>
          <div>
          <FileDoneOutlined style={{ fontSize: '450%'}} />
          </div>
          <div className='booking_confirmed_desc'>
             <div>Booking Confirmed !</div>
             <div>Your booking for selected facility is confirmed. Please show the below
                QR code or booking id at the entry.</div>
          </div>
        </div>
        <div className='EventsFacilityBookingConfirmed_main'>
          <div className='EventsFacilityBookingConfirmed_main_one'>
            <div className='EventsFacilityBookingConfirmed_main_head'>Booking Details</div>
            <div className='EventsFacilityBookingConfirmed_main_flex'>
            <div >
              <div className='label'>Booking Number</div>
              <div className='down'>#123456789</div>
            </div>
            <div>
              <div  className='label'>Facility Type</div>
              <div className='down'>Indoor Hall</div>
            </div>
          </div>
          <div className='EventsFacilityBookingConfirmed_main_flex'>
            <div>
              <div className='label'>Date of booking</div>
              <div className='down'>31/08/2022</div>
            </div>
            <div>
              <div className='label'>Amount Paid</div>
              <div className='down'>S$100.00</div>
            </div>
          </div>

          <div className='booking_thank_You'>Thank you for booking SIA facility. We hope you enjoy your experience 
at SIA facility!</div>
          <div className='booking_thank_You'>Greetings!</div>
          </div>
          <div className='EventsFacilityBookingConfirmed_main_two'>
            <img src="./images/qr.png"/>
            <div>DOWNLOAD QR CODE</div>
            </div>         
        </div>
      </div>
    </div>
  )
}

export default EventsFacilityBookingConfirmed