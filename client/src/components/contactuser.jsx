import React from "react";
import { useNavigate } from "react-router-dom";
import Contactform from "./contactform";

function Contactuser() {
  const navigate = useNavigate(); 

  const boxClose = () =>{
    navigate('/');
}
  return (
    <div className="contactUserPage">
        <div align="right" className="closeButn">
          <i onClick={boxClose} className="close">
            x
          </i>
        </div>
      <Contactform/>
    </div>
  );
}

export default Contactuser;
