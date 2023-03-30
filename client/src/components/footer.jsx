import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footerdiv">
        <div className="footersub">
          <div className="getintouch">
            <div className="getIntouchContent">
              <h3>Get In Touch</h3>
            </div>
            <div className="getIntouchContent2">
              <p>Thrissur, Mala-Gov.Hospital road, Kerala, India</p>
              <p>+91 9544595880, 7907534215</p>
              <p>info@abheesinteriors.com</p>
            </div>
          </div>
          <div className="quicklinks">
            <div className="quicklinksHeads">
              <h3>Quick Links</h3>
            </div>
            <div className="linksdata">
              <p>
                <u>Home</u>
              </p>
              <p>
                <u>About Us</u>
              </p>
            </div>
          </div>
          <div className="popularLinks">
            <div className="popularLinksHead">
              <h3>Popular Links</h3>
            </div>
            <div className="linksdata">
              <p>
                <u>Home</u>
              </p>
              <p>
                <u>About Us</u>
              </p>
              <p>
                <u>Contact Us</u>
              </p>
            </div>
          </div>
        </div>
        <div className="footercopyright">
          <div className="copyrightData">
            <p>
              © <u>Abhees Interior</u>. All Rights Reserved by
              abheesinterior.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
