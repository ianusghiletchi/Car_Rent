import React from 'react';
import '../../scss/BluePrints.scss/capsule.scss';

function Capsule(props) {
  const { Icon, label, backgroundColor, color, onclick } = props;

  return (
    <div className="capsule-div shadow-lg hoverable" style={{ backgroundColor: backgroundColor }} onClick={onclick}>
      {Icon && <Icon className="capsule-icon" />}
      <span className="capsule-label" style={{ color: color }}>{label}</span>
    </div>
  );
}

export default Capsule;
