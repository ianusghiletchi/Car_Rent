import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RentInput from './ReactWidgets/RentInput.jsx';
import HowItWorksPage from './HowItWorksPage.jsx';
import TopRentedCarsPage from './TopRentedCarsPage.jsx';
import BestServicesAndLuxuriesCarsPage from './BestServicesAndLuxuriesCarsPage.jsx';
import ReviewsPage from './ReviewsPage.jsx';

function HomePage() {
  return (
    <div className='homePageDiv'> 
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
    </div>   
  );
}

export default HomePage;
