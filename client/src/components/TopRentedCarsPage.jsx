import React, { lazy, Suspense } from 'react';
import Capsule from './BluePrints/Capsule.jsx';
import '../scss/TRCP.scss';
import { SiBmw } from 'react-icons/si';
import CarCardImg from '../imgs/car_card-img.jpg';

const LazyCard = lazy(() => import('./BluePrints/CarCard.jsx'));

const Card = (props) => {
  const LazyLoadedCard = LazyCard;
  return <LazyLoadedCard {...props} />;
};

function TopRentedCarsPage() {
  return (
    <div className='TRCP-Div'>
      <div className='TRCP-Text'>
        <h1>Top Rented Cars</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='Capsules-Div'>
        {/* Lazy loading for Capsule */}
          <Capsule Icon={SiBmw} label='BMW' />
          <Capsule Icon={SiBmw} label='BMW' />
          <Capsule Icon={SiBmw} label='BMW' />
          <Capsule Icon={SiBmw} label='BMW' />
          <Capsule Icon={SiBmw} label='BMW' />
      </div>
      <div className='Car-Cards-Div' style={{ paddingBottom: '30px' }}>
        {/* Lazy loading for Card */}
          <Card fuel_type='Petrol' img={CarCardImg} brand='BMW' seats='5' transmission_type='Auto' speed='180' daily_price='200' />
          <Card fuel_type='Petrol' img={CarCardImg} brand='BMW' seats='5' transmission_type='Auto' speed='180' daily_price='200' />
          <Card fuel_type='Petrol' img={CarCardImg} brand='BMW' seats='5' transmission_type='Auto' speed='180' daily_price='200' />
        {/* ... other Cards ... */}
      </div>
    </div>
  );
}

export default TopRentedCarsPage;
