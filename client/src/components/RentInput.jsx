import React from 'react';
import InputBluePrint from './InputBluePrint.jsx';

function RentInput(props) {

  return (
    <div className='rentInputDiv'>
      <div style={{ width: "80%" }}>
        <h1>Fast And Easy Way To Rent A Car</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            voluptate.
        </p>
      </div>
        <div className='rentInput'>
            <InputBluePrint labelText="Pick Up" placeholder="Pick Up" />
            <InputBluePrint labelText="Drop Off" placeholder="Drop Off" />
            <InputBluePrint labelText="Date" placeholder="Date" />
            <InputBluePrint labelText="Time" placeholder="Time" />
            <button
              type="submit"
              className="btn btn-warning"
              style={{ borderRadius: "20px" }}
            >
              Submit
            </button>
        </div>
    </div>
  );
}

export default RentInput;