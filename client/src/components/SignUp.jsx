import React from "react";
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div className="SignUpPageDiv">
            <div className="SignUpDiv">
                <h2 style={{padding: "2% 0 2% 0"}}>Sign Up</h2>
                <div className="form-group">

                    <label htmlFor="username">Name</label>
                    <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter your name"/>

                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>

                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password"/>

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password"/>

                    <button type="submit" className="btn btn-warning" style={{marginTop: "5%", marginBottom: "5%"}}>Submit</button>

                    <p>Already have an account?<Link to="/SignUp">Login</Link></p>

                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                </div>
            </div>
        </div>     
    );
}

export default SignUp;