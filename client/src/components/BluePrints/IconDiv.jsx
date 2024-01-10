import React from 'react';

function IconDiv(props) {
  const { bgcolor, color, fontsize } = props;
  const IconComponent = props.icon;

  return (
    <div className='iconDivPage'>
      <div className='IconDiv shadow-lg' style={{ backgroundColor: bgcolor, color: color }}>
        <IconComponent className='HIWP-Icon' style={{ fontSize: fontsize }} />
      </div>
      <div className="TextContainer" style={{ width: '80%' }}>
        <h5>Lorem ipsum dolor sit</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sit amet ultricies lacinia, nisl nisl</p>
      </div>
    </div>   
  );
}

export default IconDiv;
