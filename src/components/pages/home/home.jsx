import React from "react";
import "./home.css";
import {
    HomeLink,
  HomeWrapper,
  SliderData,
  SliderInfoWrapper,
  SliderTypo,
  SliderWrapper,
  WelcomeTextWrapper,
  WelcomeTitle,
  WelcomeTypo,
} from "./homeStyle";
import image from "../../../assets/img.png";
import image2 from "../../../assets/img2.png";
import image3 from "../../../assets/img3.png";
import { Box, Button } from "@mui/material";

const slides = [
    {
      image: image3,
      region: "Seul",
      type: "Mosque",
      location: "118.46.303.1",
      button: (
        <HomeLink to="/path">
          <Button
            sx={{
              background: "var(--Light-Main-500, #1D45EF);",
              padding: "10px 30px 10px 30px",
              borderRadius: "10px"
            }}
            variant="contained"
          >
            Read More
          </Button>
        </HomeLink>
      )
    },
    {
      image: image2,
      region: "Tokyo",
      type: "Shop",
      location: "35.6895° N",
      button: (
        <HomeLink to="/path">
          <Button
            sx={{
              background: "var(--Light-Main-500, #1D45EF);",
              padding: "10px 30px 10px 30px",
              borderRadius: "10px"
            }}
            variant="contained"
          >
            Read More
          </Button>
        </HomeLink>
      )
    },
    {
      image: image,
      region: "Istanbul",
      type: "Restaurant",
      location: "41.0082° N",
      button: (
        <HomeLink to="/path">
          <Button
            sx={{
              background: "var(--Light-Main-500, #1D45EF);",
              padding: "10px 30px 10px 30px",
              borderRadius: "10px"
            }}
            variant="contained"
          >
            Read More
          </Button>
        </HomeLink>
      )
    },
  ];
const delay = 5000;

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const handleDotClick = (idx) => {
    setIndex(idx);
  };

  return (
    <div>
      <HomeWrapper>
        <WelcomeTextWrapper>
          <WelcomeTitle>
            Find the Mosque, Shop and Halal Restaurants you need
            <WelcomeTypo>
              This project aims to create more convenience and opportunities for Muslims.
            </WelcomeTypo>
          </WelcomeTitle>
        </WelcomeTextWrapper>
        <SliderWrapper>
          <div className="slideshow">
            <div
              className="slideshowSlider"
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {slides.map((slide, idx) => (
                <div
                  className="slide"
                  key={idx}
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                  }}
                ></div>
              ))}
            </div>

            <div className="slideshowDots">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    handleDotClick(idx);
                  }}
                ></div>
              ))}
            </div>
          </div>
        </SliderWrapper>
        <SliderInfoWrapper>
          <Box>
            <SliderTypo>Region</SliderTypo>
            <SliderData>{slides[index].region}</SliderData>
          </Box>
          <Box>
            <SliderTypo>Type</SliderTypo>
            <SliderData>{slides[index].type}</SliderData>
          </Box>
          <Box>
            <SliderTypo>Location</SliderTypo>
            <SliderData>{slides[index].location}</SliderData>
          </Box>
          <SliderData>{slides[index].button}</SliderData>
        </SliderInfoWrapper>
      </HomeWrapper>
    </div>
  );
};

export default Home;
