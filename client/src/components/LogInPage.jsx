import React, { useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import '../scss/authForm.scss';

const Header = lazy(() => import('./Header.jsx'));

function LogIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

      // Check if the request was successful
      if (response.ok) {
        // Do something with the successful response, for example, redirect to a new page
        console.log("User registered successfully");
        // Redirect or perform any other action as needed
      } else {
        // Handle the error response
        console.error("Error during signup:", responseData.error);
      }
      
    } catch(error) {
      console.error("Error during signup:", error);
    }
  };


    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>    
        <div className="authFormPageDiv">
            <div className="authFormDiv">
                <h2 style={{padding: "7% 0 2% 0"}}>Log In</h2>
                <div className="form-group">

                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                    <button type="submit" className="btn btn-warning" style={{margin: "7% 0 4% 0"}}>Submit</button>

                    <p>Dont have an account? <Link to="/portalPage">Sign Up</Link></p>

                </div>
            </div>
        </div>  
      </div>    
      );
}

export default LogIn;
