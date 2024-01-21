import React, { useEffect, useState } from "react";
import "../scss/BSALCP.scss";     
import IconDiv from "./BluePrints/IconDiv.jsx";
import BSALCIMG from "../imgs/BSALC-img.png";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbCurrentLocation } from "react-icons/tb";
import { MdOutlineCancel } from "react-icons/md";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function BestServicesAndLuxuriesCarsPage() {

    const [iconSize, setIconSize] = useState(80);
    const [fontSize, setFontSize] = useState(50);
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 427) {
          setIconSize(60);
          setFontSize(40);
        } else {
          setIconSize(80);
          setFontSize(50);
        }
      };
  
      // Initial setup
      handleResize();
  
      // Add event listener for window resize
      window.addEventListener("resize", handleResize);
  
      // Remove event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);  

  return (
    <div style={{ backgroundColor: "#FFF9EF" }}>   
      <div className="BSALCP-Text">
        <h1>Best Services And Luxuries Cars</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ornare at etiam mattis sagittis sodales sagittis.</p>
      </div>
      <div className="BSALCP-Main-Grid">
      <LazyLoadImage src={BSALCIMG} style={{ width: "95%", justifySelf: "center" }} alt="Beautiful Car" />
        <div className="BSALCP-Icons">
          <div className="BSALCP-Icon-Div">
            <IconDiv
              icon={RiCustomerService2Fill}
              height={iconSize}
              width={iconSize}
              fontsize={fontSize}
              bgcolor={'lightgray'}
            />
            <div className="BSALCP-Icon-Label">
              <h5>Customer Support</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ornare at etiam mattis sagittis.</p>
            </div>
          </div>
          <div className="BSALCP-Icon-Div">
            <IconDiv
              icon={TbCurrentLocation}
              height={iconSize}
              width={iconSize}
              fontsize={fontSize}
              bgcolor={'lightgray'}
            />
            <div className="BSALCP-Icon-Label">
              <h5>Many Locations</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ornare at etiam mattis sagittis.</p>
            </div>
          </div>
          <div className="BSALCP-Icon-Div">
            <IconDiv
              icon={MdOutlineCancel}
              height={iconSize}
              width={iconSize}
              fontsize={fontSize}
              bgcolor={'lightgray'}
            />
            <div className="BSALCP-Icon-Label">
              <h5>Free Cancellation</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ornare at etiam mattis sagittis.</p>
            </div>
          </div>
        </div>
      </div>
    </div>     
  );
}

export default BestServicesAndLuxuriesCarsPage;
