import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import "../components/contactuser.css";
import AXIOS from "axios";
import { useNavigate } from "react-router-dom";

function Contactform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [message,setMessage] = useState("");
  const [msg,setMsg] = useState("");
  const navigate = useNavigate();



  const contactUsMessage = () => {

    AXIOS.post("http://localhost:9006/saveContactUs", {
      name:name,
      email: email,
      phone: phone,
      message:message
    }).then((response) => {
      console.log(response.data.msg);
      setName("");
      setEmail(" ");
      setPhone(" ");
      setMessage(" ");
    //  setMsg(response.data.msg);
      navigate("/");
      alert(response.data.msg);
    });
  };

  return (
    <div>
      <div className="sendmessagePage">
        <div className="formInputClass">
          <div className="contactForm">
          {/* <h2> {msg}</h2> */}
            <h2 className="text-center"> Send Your Message Here!</h2>
          </div>
          <div className="formInfo">
            <FloatingLabel
              controlId="floatingName"
              label="Name"
              className="mb-3 inputClass"
            >
              <Form.Control
                type="text"
                placeholder="Name"
                className="nameField"
                value={name} 
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3 inputClass"
            >
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPhone"
              label="Phone Number"
              className="mb-3 inputClass"
            >
              <Form.Control
                type="text"
                placeholder="phone number"
                style={{ height: "10%" }}
                className="phoneField" 
                value={phone} 
                onChange={(e) => {
                  setPhone(e.target.value);

                }}
              required/>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Message"
              className="mb-3 inputClass"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                className="messageField"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
              />
            </FloatingLabel>
            <div className="submitMessage">
              <Button variant="primary" onClick={contactUsMessage}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactform;
