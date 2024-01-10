import React from 'react';
import RentInput from './ReactWidgets/RentInput.jsx';
import HowItWorksPage from './HowItWorksPage.jsx';

function HomePage() {
  return (
    <div className='homePageDiv'> 
      <div className='homePage'>
          <RentInput />
      </div>
      <div style={{ backgroundColor: '#EBEF95' }}>
        <HowItWorksPage />
      </div>
    </div>   
  );
}

export default HomePage;
