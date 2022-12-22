import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./footer.css";


function Footer() {

    useEffect(() => {
        // const script = document.createElement("script");
        // script.src = "assets/rev-slider.js";
        // script.defer = true;
        // document.body.appendChild(script);
    }, []);

    return (
        <>

            <div className="footer">
                <div className="footer-inner">
                    <div className="footer-logo-col">
                        <div className="logo-container">
                            <div className="sia-logo"></div>
                        </div>
                        <div className="title-container">
                            Singapore Indian Association
                        </div>
                        <div className="asso-desc-container">
                            The <strong>Singapore Indian Association</strong> was <br /> established in 1923 with the objective <br /> of promoting the social, physical, <br /> intellectual, cultural and the <br /> general welfare of its members.
                        </div>
                    </div>
                    <div className="quick-links-container">
                        <div className="quick-link-heading">Quick Links</div>
                        <div className="quick-link-links">About Us</div>
                        <div className="quick-link-links">Event</div>
                        <div className="quick-link-links">Gallery</div>
                    </div>
                    <div className="socials-container">
                        <div className="social-heading">Follow Us</div>
                        <div className="social-icons-container">
                            <a target={"_blank"} href='https://www.facebook.com/SingaporeIndianAssociation/' ><div className="fb-icon"></div></a>
                            <a target={"_blank"} href='https://mobile.twitter.com/francisdcruz8' ><div className="tw-icon"></div></a>
                        </div>

                    </div>
                </div>

                <div className="reach-out-container-holder">
                    <div className="reach-out-container">
                        <div className="reach-out-container-inner">
                            <div className="call-section">
                                <div className="call-icon"></div>
                                <div className="call-details">
                                    <div className="call-text">Give Us a Call</div>
                                    <div className="call-num"> 6291 2556</div>
                                </div>
                            </div>
                            <div className="call-section">
                                <div className="mail-icon"></div>
                                <div className="call-details">
                                    <div className="call-text">Send Us a Message</div>
                                    <div className="call-num"> sgindian@singet.com.sg</div>
                                </div>
                            </div>

                            <div className="call-section">
                                <div className="address-icon"></div>
                                <div className="call-details">
                                    <div className="call-text">Our Address</div>
                                    <div className="call-num">69 BALESTIER ROAD <br /> Singapore 329677</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
}

export default Footer;
