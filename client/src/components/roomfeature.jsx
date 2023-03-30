import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import DisplayItemsCorosel from "./displayItemsCorosel";
import "./roomfeature.css";

function Roomfeature({ name, items }) {
  const [darry, setdarry] = useState([]);
  const [timeoutId, setTimeoutId] = useState(null);
  let itemsFormatted = [];
  itemsFormatted = items.slice(0, 3);

  useEffect(() => {
    setdarry(itemsFormatted);
  }, []);

   /**
   * when click the button for left movement ie, btn at left side,
   *  remove one item from right and add one image to left
   */
  const leftMove = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    let isRun = true;
    itemsFormatted = [...darry];
    itemsFormatted.pop();
    items.forEach((iItem, index, array) => {
      if (isRun === true) {
        if (itemsFormatted[0].id === items[0].id && index === 0) {
          itemsFormatted.unshift(items[items.length - 1]);
          isRun = false;
        } else {
          if (itemsFormatted[0].id === iItem.id) {
            itemsFormatted.unshift(items[index - 1]);
            isRun = false;
          }
        }
      }
    });

    setdarry(itemsFormatted);
  };

  /**
   * when click the button for right movement ie, btn at right side,
   *  remove one item from left and add one image to right
   */
  const rightMove = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    itemsFormatted = [...darry];
    itemsFormatted.shift();
    items.forEach((iItem, index, array) => {
      if (iItem.id === itemsFormatted[1].id) {
        if (index + 1 === items.length) {
          itemsFormatted.push(items[0]);
        } else {
          itemsFormatted.push(items[index + 1]);
        }
      }
    });
    setdarry(itemsFormatted);
  };

  const handleMouseOver = () => {
    const id = setTimeout(() => {
      rightMove();
    }, 1000);
    setTimeoutId(id);
  };

  return (
    <div>
      <h1 className="center">
        <b>{name} Room</b>
      </h1>
      <div className="livingroom">
        <div className="lgdesign">
          <div className="livingRoomName">
            <h4 className="title">{name} ROOM</h4>
            <h2 className="desg">{name} Room Design</h2>
          </div>
        </div>
        <div className="extraLivingImages" onMouseOver={handleMouseOver}>
          <div className="imageCoroselDiv">
            <div className="leftArrow">
              <Button onClick={leftMove}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </Button>
            </div>
            <DisplayItemsCorosel items={darry} />
            <div className="rightArrow">
              <Button onClick={rightMove}>
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roomfeature;
