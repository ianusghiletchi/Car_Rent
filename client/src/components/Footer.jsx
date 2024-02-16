import React from "react";
import { Link } from 'react-router-dom';
import '../scss/footer.scss';
import { SiAudi, SiFord, SiMercedes, SiBmw, SiJeep, SiVolvo, SiMitsubishi, SiHonda, SiVolkswagen, SiNissan } from "react-icons/si";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import SocialsIconDiv from "./BluePrints/SocialsIconDiv.jsx";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiTiktokLine } from "react-icons/ri";

function Footer() {

    

    return (
        <div className="footer-main-div">
            <div className="brands-owned-div">
                <SiAudi className="icon" />
                <SiFord className="icon" />
                <SiMercedes className="icon" />
                <SiBmw className="icon" />
                <SiJeep className="icon" />
                <SiVolvo className="icon" />
                <SiMitsubishi className="icon" />
                <SiHonda className="icon" />
                <SiVolkswagen className="icon" />
                <SiNissan className="icon" />
            </div>
            <div className="info-div">
                <div className="footer-logo-outro">
                    <img src="https://cars-rent.pl/wp-content/uploads/2020/02/logo_cars_rent_white-png-small.png"></img>
                    <p style={{ color: 'gray', width: '90%', margin: '0 auto'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tortor non sem varius convallis
                     nec in ipsum.</p>
                </div>

                <div className="footer-contact-info">
                    <h5 style={{ width: '100%', marginLeft: '4%', color: 'dimgray'}}>Contact Info</h5>
                    <div className="logo-text-div">
                        <div className="logo-div">
                            <CiLocationOn className="logo" />
                        </div>

                        <div className="text-div">
                            <p>123 Maple Avenue Springfield, IL 62701</p>
                        </div>
                    </div>
                    <div className="logo-text-div">
                        <div className="logo-div">
                            <PiPhoneCallLight className="logo" />
                        </div>

                        <div className="text-div">
                            <p>(555) 987-6543</p>
                            <p>(555) 123-4567</p>
                        </div>
                    </div>
                    <div className="logo-text-div">
                        <div className="logo-div">
                            <CiMail className="logo" />
                        </div>

                        <div className="text-div">
                            <p>carsrent@gmail.com</p>
                        </div>
                    </div>
                </div> 

                <div className="footer-information-links">

                <h5 style={{ width: '100%', textAlign: 'left', marginLeft: '4%', color: 'dimgray'}}>Information Links</h5>


                <ul>
                    <li><Link className="nav-link" to="/book-now">Book Now</Link></li>
                    <li><Link className="nav-link" to="/our-locations">Our Locations</Link></li>
                    <li><Link className="nav-link" to="/terms-and-conditions">Terms and Conditions</Link></li>
                    <li><Link className="nav-link" to="/cancellation-policy">Cancellation Policy</Link></li>  
                    <li><Link className="nav-link" to="/privacy-policy">Privacy Policy</Link></li>
                </ul>


                </div>

                <div className="footer-subscribe">

                    <h5 style={{ width: '100%', color: 'dimgray'}}>Subscribe to our newsletter</h5>

                    <div className="newsletter-input-div">
                        <input type="email" placeholder="Email" className="newsletter-input shadow"></input>
                        <button className="subscribe-button shadow">Subscribe</button>
                    </div>

                    <div className="socials">

                        <SocialsIconDiv icon={FiFacebook} />
                        <SocialsIconDiv icon={FaInstagram} />
                        <SocialsIconDiv icon={AiOutlineYoutube} />
                        <SocialsIconDiv icon={RiTiktokLine} />

                    </div>

                </div>
            </div>
            <p style={{ textAlign: 'center', color: 'gray', marginTop: '2.5%' }}>Copyright © 2024</p>
        </div>
    )
}

export default Footer;
