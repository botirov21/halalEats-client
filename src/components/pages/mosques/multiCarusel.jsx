import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./multiCarusel.css";
import Slider from "react-slick";
import { MosqueLink, Card, Image, Name, Location, CardButton, LocationIconStyle, LocationWrapper, NameWrapper } from "./multiCaruselStyle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { omit } from "lodash";

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = omit(props, ['slideCount']);
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    >
      <ArrowBackIcon style={{ color: "#006dab", fontSize: "2rem" }} />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = omit(props, ['slideCount']);
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    >
      <ArrowForwardIcon style={{ color: "#006dab", fontSize: "2rem" }} />
    </div>
  );
};

const MultiCarousel = ({ data, onItemClick }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
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
          slidesToShow: 2,
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
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="multicarousel">
      <div className="titleWrap">
        <CustomPrevArrow onClick={() => document.querySelector(".slick-prev").click()} />
        <h1 className="title">View other mosques</h1>
        <CustomNextArrow onClick={() => document.querySelector(".slick-next").click()} />
      </div>
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
