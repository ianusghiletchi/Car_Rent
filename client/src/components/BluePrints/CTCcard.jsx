import React from 'react';
import '../../scss/BluePrints.scss/CTCcard.scss';
import { FaCalendarWeek } from "react-icons/fa";

function CTCcard() {
    return (
        <div style={{ width: "90%", margin: "0 auto"}}>
            <img src="https://i.pinimg.com/564x/aa/20/cf/aa20cff179bc88646491d8b228445e96.jpg" />
            <div className="CTCcard-Text">
                <p style={{ color: "gray"}}><FaCalendarWeek /> March 15, 2022</p>
                <h6>The new Car that will change your life</h6>
                <h6 style={{ color: "orange", cursor: "pointer", fontSize: "lighter"}}>Read More</h6>
            </div>
        </div>
    );
}

export default CTCcard;