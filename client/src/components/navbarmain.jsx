import React from "react";
import "./navbarmain.css";
import logo from "../assets/logo.jpeg";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbarmain() {
  const navigate = useNavigate();

  const contactPage =() =>{
    navigate('/contactuser');
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="link-info">
              <Nav.Link href="#link2">
                <FaFacebook size={26} color="#ffffff" />
              </Nav.Link>
              <Nav.Link href="#link3">
                <FaTwitter size={26} color="#ffffff"/>
              </Nav.Link>
              <Nav.Link href="#link4">
                <FaLinkedin size={26} color="#ffffff"/>
              </Nav.Link>
              <Nav.Link href="#link5">
                <FaInstagram size={26} color="#ffffff"/>
              </Nav.Link>
              <Nav.Link href="#link5">
                <FaYoutube size={26} color="#ffffff"/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="navbarSub">
        <div className="sidebox">
          <div className="blackbox"></div>
          <div className="whitebox"></div>
        </div>
        <div className="navbarMiddle">
          <div className="navSubContent">
            <Navbar bg="gray" variant="gray">
              <div className="logMain">
                <Navbar.Brand href="#home">
                <Image src={logo} className="logointerior"/>
                </Navbar.Brand>
                </div>
                <div className="navLinkData">

                  <Nav className="navitem">
                    <Nav.Link href="#home" >Home</Nav.Link>
                    <Nav.Link href="#link" >About</Nav.Link>
                    <Nav.Link  onClick={contactPage}>Contact</Nav.Link>

                  </Nav>
                  </div>
            </Navbar>
          </div>
        </div>
        <div className="sidebox">
          <div className="blackbox"></div>
          <div className="whitebox"></div>
        </div>
      </div>
  
    </>
  );
}

export default Navbarmain;
