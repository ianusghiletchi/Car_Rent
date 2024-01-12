import React from 'react';
import Capsule from './BluePrints/Capsule.jsx';
import Card from './BluePrints/Card.jsx';
import { SiBmw } from "react-icons/si";

function TopRentedCarsPage() {
  return (
    <div className='TRCP-Div'>
      <div className='TRCP-Text'>
        <h1>Top Rented Cars</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='Capsules-Div'>
        <Capsule Icon={SiBmw} label="BMW" />
        <Capsule Icon={SiBmw} label="BMW" />
        <Capsule Icon={SiBmw} label="BMW" />
        <Capsule Icon={SiBmw} label="BMW" />
        <Capsule Icon={SiBmw} label="BMW" />
      </div>
      <div className='Car-Cards-Div' style={{ paddingBottom: '30px' }}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default TopRentedCarsPage;