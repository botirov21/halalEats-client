// MultiCarousel.js
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./multiCarusel.css";
import Slider from "react-slick";
import { MosqueLink, Card, Image, Name, Location, CardButton, LocationIconStyle, LocationWrapper, NameWrapper } from "./mosqueStyle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const MultiCarousel = ({ data, onItemClick }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="multicarousel">
      <Slider {...settings}>
        {data.map((value, key) => (
          <MosqueLink key={key} to={`/mosqueDetail/${value.id}`}>
            <Card>
              <Image src={value.mosque.imageUrl} alt={value.mosque.name} />
              <NameWrapper>
                <Name>{value.mosque.name}</Name>
                <CardButton>
                  <ArrowOutwardIcon sx={LocationIconStyle} />
                </CardButton>
              </NameWrapper>
              <LocationWrapper>
                <LocationOnIcon sx={LocationIconStyle} />
                <Location>{value.mosque.location}</Location>
              </LocationWrapper>
            </Card>
          </MosqueLink>
        ))}
      </Slider>
    </div>
  );
};

export default MultiCarousel;
