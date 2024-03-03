import React from "react";
import '../../scss/BluePrints.scss/socialIconDiv.scss';

function SocialsIconDiv(props) {

    const IconComponent = props.icon;

    return (
        <div className='socialsIconMainDiv'>
            <div className='socialsIconDiv shadow-sm'>
                <IconComponent className='icon' style={{ fontSize: '200%' }} />
            </div>
        </div>
    );
}

export default SocialsIconDiv;
