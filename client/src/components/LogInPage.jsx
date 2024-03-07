import React, { useState, lazy, Suspense, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../scss/authForm.scss';
import { Alert } from '@mui/material';
import LoadingEffect from './LoadingEffect.jsx';

const Header = lazy(() => import('./Header.jsx'));

function LogIn() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use fetch to make an API call to your login endpoint
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      // Parse the JSON response
      const responseData = await response.json();
  
      if (response.status === 200) {
        // Set success alert
        setAlertSeverity("success");
        setAlertMessage(responseData.message);
        // Delay redirection for 2 seconds to give the user time to read the alert
        setTimeout(() => setRedirect(true), 1200);
      } else {
        // Set warning alert
        setAlertSeverity("warning");
        setAlertMessage(responseData.error);
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Set error alert
      setAlertSeverity("error");
      setAlertMessage("An error occurred during login.");
    }
  };

  // Redirect after successful login
  useEffect(() => {
    if (redirect) {
      navigate(`/?success=${encodeURIComponent(alertMessage)}`);
    }
  }, [redirect, alertMessage, navigate]);

  return (
    <div>
      <Suspense fallback={<div><LoadingEffect /></div>}>
        <Header mainPage={false} />
      </Suspense>    
      <div className="authFormPageDiv">
        <div className="authFormDiv">
          <h2 style={{padding: "7% 0 2% 0"}}>Log In</h2>
          {alertMessage && ( // Conditional rendering for alert
            <Alert severity={alertSeverity} color={alertSeverity}>
              {alertMessage}
            </Alert>
          )}
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" className="btn btn-warning" style={{margin: "7% 0 4% 0"}} onClick={handleSubmit}>Submit</button>
            <p>Don't have an account? <Link to="/portalPage">Sign Up</Link></p>
          </div>
        </div>
      </div>  
    </div>    
  );
}

export default LogIn;
