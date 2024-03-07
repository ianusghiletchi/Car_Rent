import React, { lazy, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Alert } from '@mui/material';
import '../scss/homePage.scss';

// Lazy-loaded components
const Header = lazy(() => import('./Header.jsx'));
const RentInput = lazy(() => import('./ReactWidgets/RentInput.jsx'));
const HowItWorksPage = lazy(() => import('./HowItWorksPage.jsx'));
const TopRentedCarsPage = lazy(() => import('./TopRentedCarsPage.jsx'));
const BestServicesAndLuxuriesCarsPage = lazy(() => import('./BestServicesAndLuxuriesCarsPage.jsx'));
const ReviewsPage = lazy(() => import('./ReviewsPage.jsx'));
const WeRentPowerfulMachinesTooPage = lazy(() => import('./WeRentPowerfulMachinesTooPage.jsx'));
const CarTalesCorners = lazy(() => import('./CarTalesCorners.jsx'));
const Footer = lazy(() => import('./Footer.jsx'));

function HomePage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const successMessage = queryParams.get('success');
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    if (successMessage) {
      setAlertMessage(successMessage);
      // Clear the success message after 5 seconds
      setTimeout(() => {
        setAlertMessage('');
      }, 2500);
    }
  }, [successMessage]);

  return (
    <div className='homePageDiv'>
      <Header />
      {alertMessage && (
          <Alert severity='success' color='success'>
            {alertMessage}
          </Alert>
        )}
      <div className='homePage'>
        <RentInput />
      </div>
      <div style={{ backgroundColor: '#ffe1ad' }}>
        <HowItWorksPage />
      </div>
      <div>
        <TopRentedCarsPage />
      </div>
      <div>
        <BestServicesAndLuxuriesCarsPage />
      </div>
      <div>
        <ReviewsPage />
      </div>
      <div>
        <WeRentPowerfulMachinesTooPage />
      </div>
      <div>
        <CarTalesCorners />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
