import React, { lazy } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  return (
    <div className='homePageDiv'>
        <Header />
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
