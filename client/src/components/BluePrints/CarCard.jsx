import React from 'react';
import Capsule from './Capsule.jsx';
import '../../scss/BluePrints.scss/carCard.scss';
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { GiSteeringWheel } from "react-icons/gi";
import { BsSpeedometer } from "react-icons/bs";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function CarCard(props) {
  const { fuel_type, img, brand, seats, transmission_type, speed, daily_price } = props;

  return (
    <div style={{ width: '18rem', border: '1px solid #000', borderRadius: '20px', backgroundColor: 'white', padding: '10px', margin: '10px' }} className='shadow'>
      <span style={{ textAlign: 'left', border: '1px solid #000', borderRadius: '5px', padding: '3px 4px', marginTop: '10px', display: 'inline-block', backgroundColor: '#F1F4FF', fontSize: '15px' }}>{fuel_type}</span>
      <LazyLoadImage
        alt="Car"
        src={img}
        style={{ width: '100%', height: '90%', borderRadius: '5px' }}
        effect="blur"
      />
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <h5 style={{ margin: '0' }}>{brand}</h5>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '15px' }}>
          <p><MdOutlineAirlineSeatReclineNormal /> {seats}</p>
          <p><GiSteeringWheel />  {transmission_type}</p>
          <p><BsSpeedometer />  {speed} km/h</p>
        </div>
        <h5 style={{ marginTop: '7px' }}>Starting at €{daily_price} per day</h5>
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
          <button className='OffCssBtn details-hover'><Capsule label="Details" backgroundColor="#FFCD0E" color='white'/></button>
          <button className='OffCssBtn'><Capsule label="Book Now" /></button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
