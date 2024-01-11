import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../scss/style.scss';

import Header from './Header.jsx';
import PortalPage from './PortalPage.jsx';
import HowItWorksPage from './HowItWorksPage.jsx';
import TopRentedCarsPage from './TopRentedCarsPage.jsx';
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
          <Route path="/toprentedcarspage" element={<TopRentedCarsPage />} />
          <Route path='/signUp' element={<SignUp />}/>
          <Route path='/logIn' element={<LogIn />}/>
          <Route path="/portalPage" element={<PortalPage />} />
          <Route path="/" element={<HomePage />} />          
        </Routes>
      </div>
    </Router>
  );
}

export default App;