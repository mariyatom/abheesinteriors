import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Carousel, Image } from "react-bootstrap";
import "./gallery.css";
import gallery1 from "../assets/gallery/kitchen/kitchen1.jpeg";
import kitchen2 from "../assets/gallery/kitchen/kitchen2.jpeg";
import kitchen3 from "../assets/gallery/kitchen/kitchen3.jpeg";
import kitchen4 from "../assets/gallery/kitchen/kitchen4.jpeg";
import kitchen5 from "../assets/gallery/kitchen/kitchen5.jpeg";
import kitchen6 from "../assets/gallery/kitchen/kitchen6.jpeg";
import furniture1 from "../assets/gallery/furniture/furt1.jpeg";
import furniture2 from "../assets/gallery/furniture/furt2.jpeg";
import furniture3 from "../assets/gallery/furniture/furt3.jpeg";
import furniture4 from "../assets/gallery/furniture/furt4.jpeg";
import furniture5 from "../assets/gallery/furniture/furt5.jpeg";
import furniture6 from "../assets/gallery/furniture/furt6.jpeg";
import kidsbed4 from "../assets/gallery/kids/kidesbed4.jpeg";
import kidsbed1 from "../assets/gallery/kids/kidesbed1.jpeg";
import kidsbed2 from "../assets/gallery/kids/kidesbed2.jpeg";
import kidsbed3 from "../assets/gallery/kids/kidesbed3.jpeg";
import kidsbed5 from "../assets/gallery/kids/kidesbed5.jpeg";
import diningTable1 from "../assets/gallery/diningtable/dining1.jpeg";
import diningTable2 from "../assets/gallery/diningtable/dining2.jpeg";
import diningTable3 from "../assets/gallery/diningtable/dining3.jpeg";
import diningTable4 from "../assets/gallery/diningtable/dining4.jpeg";

function Gallery() {
  const navigate = useNavigate();
  const galleryDet = [
    {
      id: 0,
      name: "Kitchen",
      image: gallery1,
      data: [
        {
          id: 0,
          name: gallery1,
        },
        {
          id: 1,
          name: kitchen2,
        },
        {
          id: 2,
          name: kitchen3,
        },
        {
          id: 3,
          name: kitchen4,
        },
        {
          id: 4,
          name: kitchen5,
        },
        {
          id: 5,
          name: kitchen6,
        },
      ],
    },
    {
      id: 1,
      name: "Furniture",
      image: furniture1,
      data: [
        {
          id: 0,
          name: furniture1,
        },
        {
          id: 1,
          name: furniture2,
        },
        {
          id: 2,
          name: furniture3,
        },
        {
          id: 3,
          name: furniture4,
        },
        {
          id: 4,
          name: furniture5,
        },
        {
          id: 5,
          name: furniture6,
        },
      ],
    },
    {
      id: 2,
      name: "Kids Bed",
      image: kidsbed4,
      data: [
        {
          id: 0,
          name: kidsbed1,
        },
        {
          id: 1,
          name: kidsbed2,
        },
        {
          id: 2,
          name: kidsbed3,
        },
        {
          id: 3,
          name: kidsbed4,
        },
        {
          id: 4,
          name: kidsbed5,
        },
      ],
    },
    {
      id: 3,
      name: "Dining Table",
      image: diningTable1,
      data: [
        {
          id: 0,
          name: diningTable1,
        },
        {
          id: 1,
          name: diningTable2,
        },
        {
          id: 2,
          name: diningTable3,
        },
        {
          id: 3,
          name: diningTable4,
        },
      ],
    },
  ];

  function galleryPage(data) {
    navigate("/gallerydetail", { state: { data } });
  }

  return (
    <div>
      <h1 className="center">
        <b>Gallery</b>
      </h1>

      <Carousel className="carousel-multi-item" interval={3} controls={false}>
        <Carousel.Item>
          <div className="galleryR row">
            {galleryDet.map((item, index) => (
              <div className="galleryroom col-md-4" key={index}>
                <div className="gdesign" >
                  <Image src={item.image} className="galleryImage" />
                </div>
                <div>
                  <h1 className="center">
                    <b>{item.name}</b>
                  </h1>
                </div>
                <div
                  className="galleryRoomName"
                  onClick={() => galleryPage(item.data)}
                >
                  <Button className="buttonMore">More</Button>
                </div>
                </div>
             
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Gallery;
