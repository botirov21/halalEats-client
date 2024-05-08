import React, { useState } from "react";
import "./home.css";
import {
  AboutUsSections,
  AboutUsWrapper,
  AccordionInfo,
  AccordionTitle,
  AccordionWrapper,
  CardBgImage,
  CardButton,
  CardButtonWrapper,
  CardContainer,
  CardHover,
  CardImage,
  CardInfo,
  CardTitle,
  Container,
  DateAndType,
  DateAndTypeInfo,
  DateAndTypeWrapper,
  FilterButton,
  FilterButtonWrapper,
  HolidayCard,
  HolidayInfo,
  HolidayName,
  HolidaysWrapper,
  HomeLink,
  HomeWrapper,
  ImageWrapper,
  Line,
  PhoneIconBg,
  PhoneIconWrapper,
  QuestionWrapper,
  SectionData,
  SectionTitle,
  Sectiontext,
  SectiontextRight,
  SliderData,
  SliderInfoWrapper,
  SliderTypo,
  SliderWrapper,
  Text,
  Title,
  TopRateCard,
  TopRateCardWrapper,
  TopRateWrapper,
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
import { card } from "../../mock/holidaysData";
import { rateCard } from "../../mock/topRateData";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TopRateCardBtn from "../../../assets/topRateCardBtn.png";

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
            fontFamily: "Raleway",
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
            fontFamily: "Raleway",
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
            fontFamily: "Raleway",
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
  const holidayData = card.HolidayList;
  const topRateData = rateCard.TopRateList;

  // State to manage hover states for each card
  const [hoveredCard, setHoveredCard] = useState(null);

  // Function to handle mouse enter event
  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  // Function to reset timeout for slider
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

  // Function to change slider manually
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
        <Title>About Us</Title>
        <Text>
          Our main goal is to create more comfort and opportunities for Muslims
          living abroad. Our team is working to make your life easy and
          comfortable.
        </Text>
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
            <PhoneIconWrapper>
              <img style={{ maxWidth: "100%" }} src={phoneIcon} alt="" />
            </PhoneIconWrapper>
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
      </AboutUsWrapper>
      <HolidaysWrapper>
        <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Title>Upcoming religious and secular holidays</Title>
          <FilterButtonWrapper>
            <FilterButton>All</FilterButton>
            <FilterButton>Religious</FilterButton>
            <FilterButton>Secular</FilterButton>
          </FilterButtonWrapper>
        </Box>
        {holidayData.map((value, key) => {
          return (
            <HolidayCard key={key}>
              <ImageWrapper />
              <Box sx={{ paddingLeft: "50px" }}>
                <HolidayName>{value.holiday.name}</HolidayName>
                <HolidayInfo>{value.holiday.info}</HolidayInfo>
                <DateAndTypeWrapper>
                  <Box>
                    <DateAndType>Date</DateAndType>
                    <DateAndTypeInfo>{value.holiday.date}</DateAndTypeInfo>
                  </Box>
                  <Line />
                  <Box>
                    <DateAndType>Year</DateAndType>
                    <DateAndTypeInfo>{value.holiday.year}</DateAndTypeInfo>
                  </Box>
                  <Line />
                  <Box>
                    <DateAndType>Type</DateAndType>
                    <DateAndTypeInfo>{value.holiday.type}</DateAndTypeInfo>
                  </Box>
                </DateAndTypeWrapper>
              </Box>
              <CardBgImage />
            </HolidayCard>
          );
        })}
        <Button
          sx={{
            background: "var(--Light-Main-500, #1D45EF);",
            padding: "16px 60px",
            borderRadius: "10px",
            fontFamily: "Raleway",
          }}
          variant="contained"
        >
          See More
        </Button>
      </HolidaysWrapper>
      <TopRateWrapper>
        <Title style={{paddingTop: '30px'}}>Top rated Restaurants</Title>
        <Text>Stay up-to-date with the most popular halal restaurants</Text>
        <TopRateCardWrapper>
          {topRateData.map((cardValue, index) => (
            <CardContainer key={index}>
              <TopRateCard isbuttonhovered={hoveredCard === index}>
                <CardImage />
                <CardTitle>{cardValue.restaurant.title}</CardTitle>
                <Container>
                  <CardInfo>{cardValue.restaurant.info}</CardInfo>
                  <CardButtonWrapper>
                    <CardButton
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img src={TopRateCardBtn} alt="" />
                    </CardButton>
                  </CardButtonWrapper>
                </Container>
              </TopRateCard>
              <CardHover isvisible={hoveredCard === index} />
            </CardContainer>
          ))}
        </TopRateCardWrapper>
      </TopRateWrapper>
      <QuestionWrapper>
        <Title>Frequently Asked Questions</Title>
        <Text>
          Read news about new holidays added to our platform, pictures,
          locations, mosques and many more that benefit Muslims.
        </Text>
        <AccordionWrapper>
          <Accordion square={true} className="expansion-panel" defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <AccordionTitle>Our Mission</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              <AccordionInfo>
                To provide a welcoming and safe space for Muslims and
                non-Muslims alike to learn, practice, and share Islamic
                teachings and values, to promote interfaith dialogue and
                understanding, to offer social and humanitarian services, and to
                inspire positive change in ourselves and our communities through
                faith-based education, outreach, and activism.
              </AccordionInfo>
            </AccordionDetails>
          </Accordion>
          <Accordion square={true} className="expansion-panel">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <AccordionTitle>Vision</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              <AccordionInfo>
                To provide a welcoming and safe space for Muslims and
                non-Muslims alike to learn, practice, and share Islamic
                teachings and values, to promote interfaith dialogue and
                understanding, to offer social and humanitarian services, and to
                inspire positive change in ourselves and our communities through
                faith-based education, outreach, and activism.
              </AccordionInfo>
            </AccordionDetails>
          </Accordion>
          <Accordion square={true} className="expansion-panel">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <AccordionTitle>Value</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              <AccordionInfo>
                To provide a welcoming and safe space for Muslims and
                non-Muslims alike to learn, practice, and share Islamic
                teachings and values, to promote interfaith dialogue and
                understanding, to offer social and humanitarian services, and to
                inspire positive change in ourselves and our communities through
                faith-based education, outreach, and activism.
              </AccordionInfo>
            </AccordionDetails>
          </Accordion>
        </AccordionWrapper>
      </QuestionWrapper>
    </div>
  );
};

export default Home;
