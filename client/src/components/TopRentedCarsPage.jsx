import React, { useState, useEffect, lazy, Suspense } from 'react';
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
  const [topRentedCars, setTopRentedCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    // Your code to fetch top rented cars
  }, []);

  const handleCapsuleClick = (brand) => {
    const filtered = topRentedCars.filter(car => car.brand === brand);
    setFilteredCars(filtered);
  };

  return (
    <section id="rental-deals">
      <div className='TRCP-Div'>
        <div className='TRCP-Text'>
          <h1>Top Rented Cars</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='Capsules-Div'>
          {/* Hardcoded capsules */}
          <Capsule Icon={SiBmw} label='BMW' onClick={() => handleCapsuleClick('BMW')} />
          <Capsule Icon={SiBmw} label='Mercedes-Benz' onClick={() => handleCapsuleClick('Mercedes-Benz')} />
          {/* Add more capsules for other brands */}
        </div>
        <div className='Car-Cards-Div' style={{ paddingBottom: '30px' }}>
          {/* Render filtered cars if filteredCars is not empty, otherwise render topRentedCars */}
          {filteredCars.length > 0 ? (
            filteredCars.map(car => (
              <Card
                key={car.car_id}
                fuel_type={car.fuel_type}
                img={CarCardImg}
                brand={car.brand}
                seats={car.seats}
                transmission_type={car.transmission_type}
                speed={car.speed}
                daily_price={car.daily_price}
              />
            ))
          ) : (
            topRentedCars.map(car => (
              <Card
                key={car.car_id}
                fuel_type={car.fuel_type}
                img={CarCardImg}
                brand={car.brand}
                seats={car.seats}
                transmission_type={car.transmission_type}
                speed={car.speed}
                daily_price={car.daily_price}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default TopRentedCarsPage;
