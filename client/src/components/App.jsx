import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../scss/style.scss';

const HomePage = React.lazy(() => import('./HomePage.jsx'));
const SignUp = React.lazy(() => import('./SignUpPage.jsx'));
const LogIn = React.lazy(() => import('./LogInPage.jsx'));
const PortalPage = React.lazy(() => import('./PortalPage.jsx'));

function App() {
  return (
    <Router>
      <div>
      <Routes>
  <Route
    path='/signUp'
    element={
      <React.Suspense fallback={<div>Loading...</div>}>
        <SignUp />
      </React.Suspense>
    }
  />
  <Route
    path='/logIn'
    element={
      <React.Suspense fallback={<div>Loading...</div>}>
        <LogIn />
      </React.Suspense>
    }
  />
  <Route
    path="/portalPage"
    element={
      <React.Suspense fallback={<div>Loading...</div>}>
        <PortalPage />
      </React.Suspense>
    }
  />
  <Route
    path="/"
    element={
      <React.Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </React.Suspense>
    }
  />
</Routes>

      </div>
    </Router>
  );
}

export default App;
