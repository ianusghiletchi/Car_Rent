import React from "react";

function LogIn() {
    return (
        <div className="authFormPageDiv">
            <div className="authFormDiv">
                <h2 style={{padding: "0 0 2% 0"}}>Log In</h2>
                <div className="form-group">

                    <label htmlFor="username">Name</label>
                    <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter your name"/>

                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>

                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password"/>

                    <button type="submit" className="btn btn-warning" style={{marginTop: "7%"}}>Submit</button>

                </div>
            </div>
        </div>     
    );
}

export default LogIn;