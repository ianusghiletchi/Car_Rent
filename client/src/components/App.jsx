import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import PortalPage from './portalPage.jsx';
import FeaturesPage from './FeaturesPage.jsx';
import PricingPage from './PricingPage.jsx';
import SignUp from './SignUp.jsx';
import LogIn from './LogIn.jsx';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path='/SignUp' element={<SignUp />}/>
          <Route path='/LogIn' element={<LogIn />}/>
          <Route path="/" element={<PortalPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;