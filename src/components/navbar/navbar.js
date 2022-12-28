import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <div className="navbar_main desktop">
        <div>
          <Link to="/" className="link" style={{ borderBottom: "none" }}>
            <img src="/images/logo.png" className="logo" alt="" />
          </Link>
        </div>
        <div className="middle_navbar">
          <div className="middle_navbar_component">
            <div>
              <Link to="/" className="link">
                Home
              </Link>
            </div>
            <div>
              <Link className="link" to="/history">
                About Us
              </Link>
            </div>
            <div>
              <Link className="link" to="/gallery">
                Gallery
              </Link>
            </div>
            <div>
              <Link className="link" to="/upcoming-events">
                Events
              </Link>
            </div>
            <div>
              {/* <Link className='link' to="/AllEventsFacilityBooking">Bookings</Link> */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Bookings{" "}
                  <svg
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="dropdropicon"
                  >
                    <path
                      d="M0.992812 0.919667C0.666146 1.24633 0.666146 1.773 0.992812 2.09967L6.53281 7.63967C6.79281 7.89967 7.21281 7.89967 7.47281 7.63967L13.0128 2.09967C13.3395 1.773 13.3395 1.24633 13.0128 0.919668C12.6861 0.593001 12.1595 0.593001 11.8328 0.919668L6.99948 5.74633L2.16615 0.913001C1.84615 0.593001 1.31281 0.593001 0.992812 0.919667Z"
                      fill="#1E73BE"
                    />
                  </svg>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link
                    to="/AllEventsFacilityBooking"
                    className="dropdown-item"
                  >
                    Events Facility
                  </Link>
                  <Link to="/SportsFacility" className="dropdown-item">
                    Sports Facility
                  </Link>
                  <Link to="/SportsClub" className="dropdown-item">
                    Sports Clubs
                  </Link>
                </div>
              </li>
            </div>
            <div>
              <Link className="link" to="/contact-us">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <Link to="/login">
          <div className="btn">
            <button style={{ cursor: "pointer" }}>Member Login</button>
          </div>
        </Link>

        {/* <li class="nav-item dropdown userloggedIn">
          <a
            class="nav-link"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div>
              <img src="assets/icons/usericon.png" alt="" />
              <span>John Smith</span>
            </div>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <div className="dropdown-item" style={{ width: "20px" }}>
              <a href="/">Log out</a>
            </div>
          </div>
        </li> */}
      </div>
      <div className="navbar_main mobile">
        <div>
          <img src="/images/logo.png" className="logo" alt="" />
        </div>
        <Button onClick={showDrawer}>
          <MenuOutlined />
        </Button>
      </div>
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <p>
          <Link to="/" className="link">
            Home
          </Link>
        </p>
        <p>
          <Link className="link" to="/history">
            About Us
          </Link>
        </p>
        <p>
          <Link className="link" to="/gallery"></Link>Gallery
        </p>
        <p>
          <Link className="link" to="/upcoming-events"></Link>Events
        </p>
        <p>
          <Link className="link" to="/contact-us"></Link>Contact Us
        </p>
      </Drawer>
    </div>
  );
}

export default Navbar;
