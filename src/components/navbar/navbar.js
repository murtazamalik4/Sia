import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { Button, Drawer } from 'antd';
import {
  MenuOutlined,
} from '@ant-design/icons';


function Navbar() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (<div>
    <div className="navbar_main desktop">
      <div>
        <Link to="/" className='link' style={{ borderBottom: 'none' }}>
          <img src="/images/logo.png" className='logo' alt="" />
        </Link>
      </div>
      <div className='middle_navbar'>
        <div className='middle_navbar_component'>
          <div>
            <Link to="/" className='link'>Home</Link>
          </div>
          <div>
            <Link className='link' to="/history">About Us</Link>
          </div>
          <div>
            <Link className='link' to="/gallery">Gallery</Link>
          </div>
          <div>
            <Link className='link' to="/upcoming-events">Events</Link>
          </div>
          <div>
            <Link className='link' to="/AllEventsFacilityBooking">Bookings</Link>
          </div>
          <div>
            <Link className='link' to="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>
      <Link to="/login">
        <div className='btn'>
          <button style={{ 'cursor': 'pointer' }}>
            Member Login
          </button>
        </div>
      </Link>

    </div>
    <div className="navbar_main mobile">
      <div>
        <img src="/images/logo.png" className='logo' alt="" />
      </div>
      <Button onClick={showDrawer}>
        <MenuOutlined />
      </Button>
    </div>
    <Drawer title="Menu" placement="right" onClose={onClose} visible={visible}>
      <p><Link to="/" className='link'>Home</Link></p>
      <p><Link className='link' to="/history">About Us</Link></p>
      <p><Link className='link' to="/gallery"></Link>Gallery</p>
      <p><Link className='link' to="/upcoming-events"></Link>Events</p>
      <p><Link className='link' to="/contact-us"></Link>Contact Us</p>
    </Drawer>
  </div>)
}

export default Navbar