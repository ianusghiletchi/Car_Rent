import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../scss/authForm.scss';

const Header = lazy(() => import('./Header.jsx'));

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretCode, setSecretCode] = useState(""); // State for secret code

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
          userType,
          secretCode, // Include secretCode in the request body
        }),
      });

      // Parse the JSON response
      const responseData = await response.json();

      // Check if the request was successful
      if (response.ok) {
        // Do something with the successful response, for example, redirect to a new page
        console.log("User registered successfully");
        // Redirect or perform any other action as needed
      } else {
        // Handle the error response
        console.error("Error during signup:", responseData.error);
      }

    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <div className="authFormPageDiv">
        <div className="authFormDiv" style={{ boxShadow: `0px 0px 50px ${getBoxShadowColor()}` }}>
          <h2 style={{ padding: "7% 0 2% 0" }}>Sign Up</h2>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm Password"
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
