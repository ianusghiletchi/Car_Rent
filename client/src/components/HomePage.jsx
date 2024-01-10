import React from 'react';
import RentInput from './ReactWidgets/RentInput.jsx';
import HowItWorksPage from './HowItWorksPage.jsx';
import TopRentedCarsPage from './TopRentedCarsPage.jsx';

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
    </div>   
  );
}

export default HomePage;
