import React from "react";
import '../scss/footer.scss';
import { SiAudi, SiFord, SiMercedes, SiBmw, SiJeep, SiVolvo, SiMitsubishi, SiHonda, SiVolkswagen, SiNissan } from "react-icons/si";

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
            <div>
                <div className="footer-logo-outro">

                </div>

                <div className="footer-contact-info">

                </div>        

                <div className="footer-information-links">

                </div>

                <div className="footer-subscribe">

                </div>
                <p>Copyright © 2022</p>
            </div>

        </div>
    )
}

export default Footer;
