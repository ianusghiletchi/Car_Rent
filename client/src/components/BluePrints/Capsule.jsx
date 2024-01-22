import React from 'react';
import '../../scss/BluePrints.scss/capsule.scss';

function Capsule(props) {
  const { Icon, label, backgroundColor, color } = props;

  return (
    <div className="capsule-div shadow-lg" style={{ backgroundColor: backgroundColor }}>
      {Icon && <Icon className="capsule-icon" />}
      <span className="capsule-label" style={{ color: color }}>{label}</span>
    </div>
  );
}

export default Capsule;
