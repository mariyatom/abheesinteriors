import React from "react";
import "./officeInfo.css";
import flat from "../assets/flat.png";
import email from "../assets/email.png";
import telephone from "../assets/telephone.png"
import { Image } from "react-bootstrap";

function OfficeInfo() {
  return (
    <div className="officeInfo">
      <div className="officeInfoData">
        <div className="officeAddress">
          <div className="buildImage">
            <Image src={flat} className="flat" />
          </div>
          <div className="buildAdr">
            <h2>Our Office</h2>
            <p>Address</p>
            <p>Mala-Gov.Hospital road</p>
            <p>Thrissur</p>
            <p>Kerala</p>
          </div>
        </div>
        <div className="officeMail">
          <div className="mailImage">
            <Image src={email} className="email" />
          </div>
          <div className="mailAdr">
            <h2>Email Us</h2>
            <p style={{color:"blue"}}><u>info@abheesinteriors.com</u></p>
            <p style={{color:"blue"}}><u>saju@abheesinteriors.com</u></p>
          </div>
          
        </div>
        <div className="officePhone">
          <div className="phoneImage">
            <Image src={telephone} className="telephone" />
          </div>
          <div className="phoneAdr">
            <h2>Call Us</h2>
            <p>+91 9544595880</p>
            <p>+91 7907534215</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfficeInfo;
