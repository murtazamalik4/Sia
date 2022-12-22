import React, { useState } from 'react';
import "./allEvents.css";

function AllEvents() {
  const [events] = useState([{
    id: 1,
    name: 'Event 1',
    image: '/images/image.png',
    url: '/images/image.png',
  }]);

  return (
    <>
      <div className="events_component_1">
        <div className="events_1">
          <h1>All Events</h1>
        </div>
        <div className="events_2">HOME - All Events</div>
      </div>
      <div className="events-container">
        {events.map(event => (
          <div className="event-card" key={event.id}>
            <div className="event-card-image">
              <img src={event.image} alt={event.name} />
            </div>
          </div>)
        )}
      </div>
    </>
  );
}

export default AllEvents;
