// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const HomePage = React.lazy(() => import('./HomePage.jsx'));
const SignUp = React.lazy(() => import('./SignUpPage.jsx'));
const LogIn = React.lazy(() => import('./LogInPage.jsx'));
const PortalPage = React.lazy(() => import('./PortalPage.jsx'));

function App() {
  return (
    <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
        <div>
          <Routes>
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/logIn' element={<LogIn />} />
            <Route path="/portalPage" element={<PortalPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </React.Suspense>
    </Router>
  );
}

export default App;
