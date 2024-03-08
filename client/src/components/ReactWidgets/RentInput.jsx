import React, { useState } from 'react';
import '../../scss/rentInput.scss';
import InputBluePrint from '../BluePrints/Input.jsx';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

function RentInput(props) {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [carType, setCarType] = useState("");
  const [whereToPickUp, setWhereToPickUp] = useState("");
  const [dateOfPickUp, setDateOfPickUp] = useState("");
  const [dateOfDropOff, setDateOfDropOff] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false); // Track whether to show the alert

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use fetch to make an API call to your rentcar endpoint
      const response = await fetch("http://localhost:5000/rentcar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          carType,
          whereToPickUp,
          dateOfPickUp,
          dateOfDropOff,
        }),
        credentials: 'include',
      });

      // Parse the JSON response
      const responseData = await response.json();

      if (response.status === 200) {
        // Set success alert
        setAlertSeverity("success");
        setAlertMessage(responseData.message);
      } else if (response.status === 401) {
        // Redirect to login page if user is not authenticated
        navigate('/login');
      } else {
        // Set warning alert for other errors
        setAlertSeverity("warning");
        setAlertMessage(responseData.error);
      }

      // Show the alert
      setShowAlert(true);

      // Hide the alert after 1.2 seconds
      setTimeout(() => setShowAlert(false), 1500);
    } catch (error) {
      console.error("Error during login:", error);
      // Set error alert
      setAlertSeverity("error");
      setAlertMessage("An error occurred during login.");

      // Show the alert
      setShowAlert(true);

      // Hide the alert after 1.5 seconds
      setTimeout(() => setShowAlert(false), 1500);
    }
  };

  return (
    <div className='rentInputDiv'>
      <form onSubmit={handleSubmit}>
        <div style={{  marginBottom: "2%" }}>
          <h1>Fast And Easy Way To Rent A Car</h1>
          <p style={{ padding: "2% 0 2% 0"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              voluptate.
          </p>
        </div>
        <div className='rentInput'>
          <InputBluePrint id="carType" labelText="Select a Car Type" placeholder="Mercedes"  value={carType} onChange={(e) => setCarType(e.target.value)} />
          <InputBluePrint id="whereToPickUp" labelText="Where to Pick-Up" placeholder="Ipsum 21" value={whereToPickUp} onChange={(e) => setWhereToPickUp(e.target.value)} />
          <InputBluePrint id="dateOfPickUp" labelText="Date of Pick Up" placeholder="1/08/2024" value={dateOfPickUp} onChange={(e) => setDateOfPickUp(e.target.value)} />
          <InputBluePrint id="dateOfDropOff" labelText="Date of Drop Off" placeholder="6/04/2024" value={dateOfDropOff} onChange={(e) => setDateOfDropOff(e.target.value)} />
          <button
            type="submit"
            className="btn btn-warning"
            style={{ borderRadius: "20px", margin: "2% 0 2% 0" }}
          >
            Submit
          </button>
          {showAlert && ( // Conditional rendering for alert
            <Alert severity={alertSeverity} color={alertSeverity}>
              {alertMessage}
            </Alert>)}
        </div>
      </form>
    </div>
  );
}

export default RentInput;
