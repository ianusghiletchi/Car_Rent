import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../scss/authForm.scss';
import { Alert } from '@mui/material';
import LoadingEffect from './LoadingEffect.jsx';

const Header = lazy(() => import('./Header.jsx'));

function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretCode, setSecretCode] = useState("");
  const [alertMessage, setAlertMessage] = useState(""); // State to hold alert message
  const [alertSeverity, setAlertSeverity] = useState(""); // State to hold alert severity (success or warning)
  const [redirect, setRedirect] = useState(false); // State to control redirection

  // Extract userType from the URL using useLocation
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const userTypeParam = params.get('userType');
    setUserType(userTypeParam || ""); // Set userType or an empty string if not present
  }, [location.search]);

  const getBoxShadowColor = () => {
    switch (userType) {
      case "customer":
        return "rgba(255, 215, 173, 0.973)";
      case "employee":
        return "rgba(210, 230, 255, 0.973)";
      default:
        return "rgba(255, 255, 255, 1)";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use fetch to make an API call to your signup endpoint
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword,
          userType,
          secretCode,
        }),
        credentials: 'include',
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
      console.error("Error during sign up:", error);
      // Set error alert
      setAlertSeverity("error");
      setAlertMessage("An error occurred during sign up.");
    }
  };

  // Redirect after successful sign up
  useEffect(() => {
    if (redirect) {
      navigate(`/?success=${encodeURIComponent(alertMessage)}`);
    }
  }, [redirect, alertMessage, navigate]);

  return (
    <div>
      <Suspense fallback={<LoadingEffect />}>
        <Header mainPage={false} />
      </Suspense>
      <div className="authFormPageDiv">
        <div className="authFormDiv" style={{ boxShadow: `0px 0px 50px ${getBoxShadowColor()}` }}>
          <h2 style={{ padding: "7% 0 2% 0" }}>Sign Up</h2>
          {alertMessage && (
            <Alert severity={alertSeverity} color={alertSeverity}>
              {alertMessage}
            </Alert>
          )}
          <div className="form-group">
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Name</label>
              <input
                type="text"
                className="form-control"
                id="username"
                aria-describedby="usernameHelp"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm Password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {userType === "employee" && ( // Conditional rendering based on userType
                <div>
                  <label htmlFor="secretCode">Secret Code</label>
                  <input
                    type="password"
                    className="form-control"
                    id="secretCode"
                    placeholder="Enter secret code"
                    value={secretCode}
                    onChange={(e) => setSecretCode(e.target.value)}
                  />
                </div>
              )}

              <button
                type="submit"
                className="btn btn-warning"
                style={{ marginTop: "7%", marginBottom: "5%" }}
              >
                Submit
              </button>
            </form>
            <p>
              Already have an account? <Link to="/LogIn">Login</Link>
            </p>
            <p>
              By creating an account you agree to our{" "}
              <a href="#">Terms & Privacy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
