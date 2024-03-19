import React, { useState, useEffect, lazy, Suspense } from 'react';
import Capsule from './BluePrints/Capsule.jsx';
import '../scss/TRCP.scss';
import CarCardImg from '../imgs/car_card-img.jpg';
import { Alert } from '@mui/material';
import { SiBmw, SiAudi, SiFord, SiMercedes, SiJeep, SiVolvo, SiMitsubishi, SiHonda, SiVolkswagen, SiNissan, SiHyundai, SiToyota, SiChevrolet, SiKia, SiSubaru, SiTesla, SiPorsche, SiFerrari, SiLamborghini, SiMaserati, SiJaguar } from 'react-icons/si';

const LazyCard = lazy(() => import('./BluePrints/CarCard.jsx'));

const Card = (props) => {
  const LazyLoadedCard = LazyCard;
  return <LazyLoadedCard {...props} />;
};

function TopRentedCarsPage() {
  const [alertSeverity, setAlertSeverity] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [topRentedCars, setTopRentedCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [carBrands, setCarBrands] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/cars-data");
        if (response.ok) {
          const data = await response.json();
          setCarBrands(data.brands);
          setTopRentedCars(data.topCars);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const request_brand = async (brand) => {

    try {
      const response = await fetch("http://localhost:5000/requestbrand", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          brand: brand,
        }),
          credentials: 'include',
      });

      const responseData = await response.json();

      if (response.status === 200) {
        setFilteredCars(responseData);
      } else {
        setAlertSeverity("warning");
        setAlertMessage(responseData.error);
      }
  } catch (error) {
    console.error("Error during login:", error);
  }
  };

  // Define icon components for popular car brands
  const brandIcons = {
    'BMW': SiBmw,
    'Audi': SiAudi,
    'Ford': SiFord,
    'Mercedes-Benz': SiMercedes,
    'Jeep': SiJeep,
    'Volvo': SiVolvo,
    'Mitsubishi': SiMitsubishi,
    'Honda': SiHonda,
    'Volkswagen': SiVolkswagen,
    'Nissan': SiNissan,
    'Hyundai': SiHyundai,
    'Toyota': SiToyota,
    'Chevrolet': SiChevrolet,
    'Kia': SiKia,
    'Subaru': SiSubaru,
    'Tesla': SiTesla,
    'Porsche': SiPorsche,
    'Ferrari': SiFerrari,
    'Lamborghini': SiLamborghini,
    'Maserati': SiMaserati,
    'Jaguar': SiJaguar
  };
  

  return (
    <section id="rental-deals">
      <div className='TRCP-Div'>
        <div className='TRCP-Text'>
          <h1>Top Rented Cars</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Alert severity={alertSeverity} color={alertSeverity}>
            {alertMessage}
          </Alert>
        </div>
        <div className='Capsules-Div'>
          {/* Render capsules based on fetched car brands */}
          {carBrands.map(brand => (
            <Capsule
              key={brand}
              Icon={brandIcons[brand]} // Set icon based on brand name
              label={brand}
              onclick={() => request_brand(brand)}
            />
          ))}
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
