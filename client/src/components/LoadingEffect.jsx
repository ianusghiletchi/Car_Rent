import React from "react";
import '../scss/loading.scss';
import { CircularProgress } from "@mui/material";
import logo from "../imgs/logo.jpg";

function LoadingEffect() {
    return (
        <div className="loading-effect">
            <img src={logo} alt="Company Logo" style={{ width: "20%"}} />
            <CircularProgress size={30} />
        </div>
    );
}

export default LoadingEffect;