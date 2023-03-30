import React from "react";
import { Image } from "react-bootstrap";
import "./displayItemsCorosel.css";

function DisplayItemsCorosel({ items }) {

  return (
    <div className="coroselDivs">
      {items.map((item) => (
        <div key={item.id} className="itemdisplay">
          <Image
            style={{ width: "18rem",height: "21rem" }}
            className="officeimage"
            src={item.image}
            alt={item.title}
          />
        </div>
      ))}
      
    </div>
  );
}

export default DisplayItemsCorosel;
