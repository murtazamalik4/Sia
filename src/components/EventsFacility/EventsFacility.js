import React from 'react'
import Events from './Events'
import './EventsFacility.css'

function EventsFacility() {
  return (
    <div>
        <div className="events_component_1">
        <div className="events_1">
          <h1>EVENTS FACILITY</h1>
        </div>
        <div className="events_2">HOME - Bookings - Events Facility</div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "60vw", margin: "auto", marginTop: "90px" }}>

        <div className='membership_head'> A space to work,meet & fun</div>
        <hr />
        <div className='membership_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus.</div>
    </div>

    <Events />
    
    </div>
  )
}

export default EventsFacility