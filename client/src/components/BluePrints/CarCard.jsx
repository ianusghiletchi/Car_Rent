import React from 'react';
import Capsule from './Capsule.jsx';
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { GiSteeringWheel } from "react-icons/gi";
import { BsSpeedometer } from "react-icons/bs";

function CarCard() {
  return (
    <div style={{ width: '18rem', border: '1px solid #000', borderRadius: '20px', backgroundColor: 'white', padding: '10px', margin: '10px' }} className='shadow'>
    <span style={{ textAlign: 'left', border: '1px solid #000', borderRadius: '5px', padding: '3px 4px', marginTop: '10px', display: 'inline-block', backgroundColor: '#F1F4FF', fontSize: '15px' }}>Diesel</span>
    <img src="https://i.pinimg.com/564x/b4/9f/ff/b49fff8a2abc3409ae935f4b05d8dd8c.jpg" style={{ width: '100%', borderRadius: '5px' }} alt="Car" />
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <h5 style={{ margin: '0' }}>BMW</h5>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '15px' }}>
        <p><MdOutlineAirlineSeatReclineNormal /> 5</p>
        <p><GiSteeringWheel /> Manual</p>
        <p><BsSpeedometer /> X mph</p>
      </div>
      <h5 style={{ marginTop: '7px' }}>Starting at $XX per day</h5>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <button className='OffCssBtn'><Capsule label="Details" backgroundColor="#FFCD0E" color='white'/></button>
        <button className='OffCssBtn'><Capsule label="Book Now" /></button>
      </div>
    </div>
  </div>
  );
}

export default CarCard;
