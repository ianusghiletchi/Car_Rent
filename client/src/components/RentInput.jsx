import React, { useState } from 'react';
import InputBluePrint from './InputBluePrint.jsx';

function RentInput(props) {

  const [carType, setCarType] = useState("");
  const [whereToPickUp, setWhereToPickUp] = useState("");
  const [dateOfPickUp, setDateOfPickUp] = useState("");
  const [dateOfDropOff, setDateOfDropOff] = useState("");

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
      });

      // Parse the JSON response
      const responseData = await response.json();

      // Check if the request was successful
      if (response.ok) {
        // Do something with the successful response, for example, redirect to a new page
        console.log("Car rented successfully");
        // Redirect or perform any other action as needed
      } else {
        // Handle the error response
        console.error("Error during car rental:", responseData.error);
      }

    } catch (error) {
      console.error("Error during car rental:", error);
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
            style={{ borderRadius: "20px", margin: "2% 0 0 0" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RentInput;
