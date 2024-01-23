import React from "react";
import '../scss/WRPMT.scss';
 

function WeRentPowerfulMachinesTooPage() {
  return (
    <div className="WRPMT-Main-Div">
      <div className="WRPMT-Text">
        <h1 style={{ textAlign: 'center', width: '80%', margin: '0 auto' }}>We Rent Powerful Machines Too</h1>
        <p style={{ width: '80%', textAlign: 'center', margin: '0 auto', paddingTop: '0.5%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Demikros, nisl sit amet ultricies lacinia, nisl nisl aliquam nisl.</p>
      </div>
      <div className="WRPMT-Image-Div shadow">
      {/* This is where the image will be using scss background-img */}
      </div>
    </div>
  );
}

export default WeRentPowerfulMachinesTooPage;