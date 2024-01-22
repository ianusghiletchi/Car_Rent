import React from 'react';
import '../../scss/BluePrints.scss/iconDiv.scss';

function IconDiv(props) {
  const { title, label, height, width, bgcolor, color, fontsize} = props;
  const IconComponent = props.icon;

  return (
    <div className='iconDivPage'>
      <div className='IconDiv shadow-lg' style={{ backgroundColor: bgcolor, color: color, height: height, width: width }}>
        <IconComponent className='HIWP-Icon' style={{ fontSize: fontsize }} />
      </div>
      <div className="TextContainer" style={{ width: '80%'}}>
        <h5>{title}</h5>
        <p>{label}</p>
      </div>
    </div>
  );
}

export default IconDiv;
