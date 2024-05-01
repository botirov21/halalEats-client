import React from "react";
import "./home.css";
import {
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

const Home = () => {
  const images = [image3, image2, image];
  const delay = 5000;

  const Slideshow = () => {
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
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );

      return () => {
        resetTimeout();
      };
    }, [index]);

    return (
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((imageUrl, idx) => (
            <div
              className="slide"
              key={idx}
              style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
          ))}
        </div>

        <div className="slideshowDots">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    );
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
          <Slideshow />
        </SliderWrapper>
        <SliderInfoWrapper>
          <Box>
            <SliderTypo>Region</SliderTypo>
            <SliderData>Seul</SliderData>
          </Box>
          <Box>
            <SliderTypo>Type</SliderTypo>
            <SliderData>Mosque</SliderData>
          </Box>
          <Box>
            <SliderTypo>Location</SliderTypo>
            <SliderData>118.46.303.1</SliderData>
          </Box>
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
        </SliderInfoWrapper>
      </HomeWrapper>
    </div>
  );
};

export default Home;
