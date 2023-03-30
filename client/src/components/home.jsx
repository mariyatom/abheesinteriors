import React from "react";
import { useState } from "react";
import { Button, Carousel, Image } from "react-bootstrap";
import officeroom from "../assets/office_room3.jpg";
import livingroom from "../assets/living_room4.jpg";
import Navbarmain from "./navbarmain";
import "./home.css";
import livingroom1 from "../assets/livingroom/living_room1.jpg";
import livingroom2 from "../assets/livingroom/living_room2.jpg";
import livingroom3 from "../assets/livingroom/living_room3.jpg";
import livingroom4 from "../assets/livingroom/living_room4.jpg";
import Officeroom1 from "../assets/officeroom/office_room1.jpg";
import Officeroom2 from "../assets/officeroom/office_room2.jpg";
import Officeroom3 from "../assets/officeroom/office_room3.jpg";
import Officeroom4 from "../assets/officeroom/office_room4.jpg";
import toilet1 from "../assets/toilet/toilet1.jpg";
import toilet2 from "../assets/toilet/toilet2.jpg";
import toilet3 from "../assets/toilet/toilet3.jpg";
import toilet4 from "../assets/toilet/toilet4.jpg";
import Contactmodal from "./contactmodal";
import OfficeInfo from "./officeInfo";
import Gallery from "./gallery";
import Footer from "./footer";
import Roomfeature from "./roomfeature";
import ScrollToTop from "./scrollToTop";

function Home() {
  const [modalShow, setModalShow] = useState(false);
  const livingRoomItems = [
    {
      id: 0,
      title: "Slide 1",
      caption: "Caption for Slide 1",
      image: livingroom1,
    },
    {
      id: 1,
      title: "Slide 2",
      caption: "Caption for Slide 2",
      image: livingroom2,
    },
    {
      id: 2,
      title: "Slide 3",
      caption: "Caption for Slide 3",
      image: livingroom3,
    },
    {
      id: 3,
      title: "Slide 4",
      caption: "Caption for Slide 3",
      image: livingroom4,
    },
  ];
  const OfficeRoomItems = [
    {
      id: 1,
      title: "Slide 1",
      caption: "Caption for Slide 1",
      image: Officeroom1,
    },
    {
      id: 2,
      title: "Slide 2",
      caption: "Caption for Slide 2",
      image: Officeroom2,
    },
    {
      id: 3,
      title: "Slide 3",
      caption: "Caption for Slide 3",
      image: Officeroom3,
    },
    {
      id: 4,
      title: "Slide 4",
      caption: "Caption for Slide 3",
      image: Officeroom4,
    },
  ];
  const toiletItems = [
    {
      id: 0,
      title: "Slide 1",
      caption: "Caption for Slide 1",
      image: toilet1,
    },
    {
      id: 1,
      title: "Slide 2",
      caption: "Caption for Slide 2",
      image: toilet2,
    },
    {
      id: 2,
      title: "Slide 3",
      caption: "Caption for Slide 3",
      image: toilet3,
    },
    {
      id: 3,
      title: "Slide 4",
      caption: "Caption for Slide 3",
      image: toilet4,
    },
  ];

  const roomfeatureDisplay = [
    {
      id: 1,
      title: "Living",
      data: livingRoomItems,
    },
    {
      id: 2,
      title: "Office",
      data: OfficeRoomItems,
    },
    {
      id: 3,
      title: "Wash",
      data: toiletItems,
    },
  ];

  return (
    <>
      <Navbarmain />
      <div className="corouselSetting">
        <Carousel>
          <Carousel.Item>
            <Image src={officeroom} />
            <Carousel.Caption className="captionsInfo">
              <div className="captionsInfoSub">
                <h3 className="caption1">CREATIVE INTERIOR DESIGN</h3>
                <h1 className="stayhome">
                  <b>Make Your Place Better</b>
                </h1>
                <Button
                  variant="primary"
                  onClick={() => setModalShow(true)}
                  className="learnmorebtn"
                >
                  Learn More
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={livingroom} />

            <Carousel.Caption className="captionsInfo">
              <div className="captionsInfoSub">
                <h3 className="caption1">CREATIVE INTERIOR DESIGN</h3>
                <h1 className="stayhome">
                  <b>Stay At Home In Peace</b>
                </h1>
                <Button
                  variant="primary"
                  onClick={() => setModalShow(true)}
                  className="learnmorebtn"
                >
                  Learn More
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Contactmodal show={modalShow} onHide={() => setModalShow(false)} />
      <OfficeInfo />

      {roomfeatureDisplay.map((ritem, index) => (
        <div key={index}>
          <Roomfeature name={ritem.title} items={ritem.data} />
          {roomfeatureDisplay.length - 1 !== index ? <hr></hr> : <div></div>}
        </div>
      ))}

      <Gallery />
      <hr></hr>
      <Footer />
      <ScrollToTop/>          

    </>
  );
}

export default Home;
