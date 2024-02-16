import React from "react";

function SocialsIconDiv(props) {

    const IconComponent = props.icon;

    return (
        <div className='socialsIconMainDiv'>
            <div className='socialsIconDiv shadow-sm' style={{ borderRadius: '50%', border: '1px solid lightgray'}}>
                <IconComponent className='icon' style={{ fontSize: '30px' }} />
            </div>
        </div>
    );
}

export default SocialsIconDiv;