import React, { lazy } from "react";
import '../scss/CTC.scss';
const CTCcard = lazy(() => import('./BluePrints/CTCcard.jsx'));


function CarTalesCorners() {
    return (
        <div className="CTC-Main-Div">
            <div className="CTC-Text">
                <h1>Car Tales Corner</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet sit amet Lorem ipsum dolor sit amet.</p>                
            </div>
            <div className="CTC-Cards">
                <CTCcard />
                <CTCcard />
                <CTCcard />
            </div>
        </div>
    );
}    

export default CarTalesCorners;