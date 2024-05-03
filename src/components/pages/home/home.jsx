import React from "react";
import "./home.css";
import {
  AboutUsDataWrapper,
  AboutUsSections,
  AboutUsText,
  AboutUsTitle,
  AboutUsWrapper,
  HomeLink,
  HomeWrapper,
  PhoneIconBg,
  PhoneIconWrapper,
  SectionData,
  SectionTitle,
  Sectiontext,
  SectiontextRight,
  SliderData,
  SliderInfoWrapper,
  SliderTypo,
  SliderWrapper,
  WelcomeTextWrapper,
  WelcomeTitle,
  WelcomeTypo,
} from "./homeStyle";
import Slideimage from "../../../assets/img.png";
import Slideimage2 from "../../../assets/img2.png";
import Slideimage3 from "../../../assets/img3.png";
import AboutUsIcon1 from "../../../assets/aboutUs1.png";
import AboutUsIcon2 from "../../../assets/aboutUs2.png";
import AboutUsIcon3 from "../../../assets/aboutUs3.png";
import AboutUsIcon4 from "../../../assets/aboutUs4.png";
import phoneIcon from "../../../assets/phoneIcon.png";

import { Box, Button } from "@mui/material";

const slides = [
  {
    image: Slideimage3,
    region: "Seul",
    type: "Mosque",
    location: "118.46.303.1",
    button: (
      <HomeLink to="/path">
        <Button
          sx={{
            background: "var(--Light-Main-500, #1D45EF);",
            padding: "10px 30px 10px 30px",
            borderRadius: "10px",
          }}
          variant="contained"
        >
          Read More
        </Button>
      </HomeLink>
    ),
  },
  {
    image: Slideimage2,
    region: "Busan",
    type: "Shop",
    location: "35.6895° N",
    button: (
      <HomeLink to="/path">
        <Button
          sx={{
            background: "var(--Light-Main-500, #1D45EF);",
            padding: "10px 30px 10px 30px",
            borderRadius: "10px",
          }}
          variant="contained"
        >
          Read More
        </Button>
      </HomeLink>
    ),
  },
  {
    image: Slideimage,
    region: "Gwangju",
    type: "Restaurant",
    location: "41.0082° N",
    button: (
      <HomeLink to="/path">
        <Button
          sx={{
            background: "var(--Light-Main-500, #1D45EF);",
            padding: "10px 30px 10px 30px",
            borderRadius: "10px",
          }}
          variant="contained"
        >
          Read More
        </Button>
      </HomeLink>
    ),
  },
];
const delay = 5000;

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  //funtion for image slider
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

  //function change slider manually
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
              This project aims to create more convenience and opportunities for
              Muslims.
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
      <AboutUsWrapper>
        <AboutUsDataWrapper>
          <AboutUsTitle>About Us</AboutUsTitle>
          <AboutUsText>
            Our main goal is to create more comfort and opportunities for
            Muslims living abroad. Our team is working to make your life easy
            and comfortable.
          </AboutUsText>
          <AboutUsSections>
            <SectionData>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                }}
              >
                <img src={AboutUsIcon1} alt="AboutUs-Icon" />
                <SectionTitle>Mosques</SectionTitle>
                <Sectiontext>
                  Helping to find places to hold Friday prayers for Muslims
                  abroad.
                </Sectiontext>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                }}
              >
                <img src={AboutUsIcon2} alt="AboutUs-Icon" />
                <SectionTitle>Markets</SectionTitle>
                <Sectiontext>
                  Finding stores with halal certification for Muslims and
                  providing their addresses{" "}
                </Sectiontext>
              </Box>
            </SectionData>
            <PhoneIconBg>
                <PhoneIconWrapper><img style={{maxWidth: '100%'}} src={phoneIcon} alt="" /></PhoneIconWrapper>
            </PhoneIconBg>
            <SectionData>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <img src={AboutUsIcon3} alt="AboutUs-Icon" />
                <SectionTitle>Restaurants</SectionTitle>
                <SectiontextRight>
                  Find and guide you to restaurants serving halal food abroad.{" "}
                </SectiontextRight>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <img src={AboutUsIcon4} alt="AboutUs-Icon" />
                <SectionTitle>Offer</SectionTitle>
                <SectiontextRight>
                  If you have any suggestions or questions, please send us a
                  message.
                </SectiontextRight>
              </Box>
            </SectionData>
          </AboutUsSections>
        </AboutUsDataWrapper>
      </AboutUsWrapper>
    </div>
  );
};

export default Home;
