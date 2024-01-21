import React, { lazy, Suspense } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Lazy-loaded components
const Header = lazy(() => import('./Header.jsx'));
const RentInput = lazy(() => import('./ReactWidgets/RentInput.jsx'));
const HowItWorksPage = lazy(() => import('./HowItWorksPage.jsx'));
const TopRentedCarsPage = lazy(() => import('./TopRentedCarsPage.jsx'));
const BestServicesAndLuxuriesCarsPage = lazy(() => import('./BestServicesAndLuxuriesCarsPage.jsx'));
const ReviewsPage = lazy(() => import('./ReviewsPage.jsx'));

function HomePage() {
  return (
    <div className='homePageDiv'>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
}

export default HomePage;
