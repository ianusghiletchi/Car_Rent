import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../scss/style.scss';

import Header from './Header.jsx';
import PortalPage from './PortalPage.jsx';
import HowItWorksPage from './HowItWorksPage.jsx';
import PricingPage from './PricingPage.jsx';
import SignUp from './SignUpPage.jsx';
import LogIn from './LogInPage.jsx';
import HomePage from './HomePage.jsx';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/howitworks" element={<HowItWorksPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path='/signUp' element={<SignUp />}/>
          <Route path='/sogIn' element={<LogIn />}/>
          <Route path="/sortalPage" element={<PortalPage />} />
          <Route path="/" element={<HomePage />} />          
        </Routes>
      </div>
    </Router>
  );
}

export default App;