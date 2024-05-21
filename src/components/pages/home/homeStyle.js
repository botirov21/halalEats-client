import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import testHoliday from "../../../assets/eid.png";
import cardBG from "../../../assets/cardImage.png";
import TopRateCardBG from "../../../assets/topRateImage.png";
const transformAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
`;
export const HomeLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

export const HomeWrapper = styled.div`
  padding-top: 70px;
  height: fit-content;
  background: #0e1625;
  display: flex;
  position: relative;
  justify-content: center;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px; /* Height of the bottom section */
    background: #f0f2fc; /* Different background color for the bottom section */
  }
  @media (max-width: 1024px) {
    align-items: start;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100px; /* Height of the bottom section */
      background: #f0f2fc; /* Different background color for the bottom section */
    }
  }
  @media (max-width: 820px) {
    padding-bottom: 0px;
    display: flex;
    gap: 0px;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 800px;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100px; /* Height of the bottom section */
      background: #f0f2fc; /* Different background color for the bottom section */
    }
  }
  @media (max-width: 435px) {
    height: 600px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100px; /* Height of the bottom section */
      background: #f0f2fc; /* Different background color for the bottom section */
    }
  }
`;
export const WelcomeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: start;
  flex: 1;
  @media (max-width: 820px) {
    flex: unset;
  }
  @media (max-width: 420px) {
    flex: unset;
  }
`;
export const WelcomeTitle = styled.h1`
  color: var(--Light-400, #778ff5);
  font-family: Raleway;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: 60px;
  margin-top: 5%;
  padding: 0% 0% 0% 25%;
  @media (max-width: 1024px) {
    text-align: center;
    padding: 10% 0% 0% 0%;
    font-size: 33px;
    font-style: normal;
    font-weight: 800;
    line-height: 40px;
  }
  @media (max-width: 820px) {
    text-align: center;
    padding: 0% 5%;
    font-size: 30px;
    font-style: normal;
    font-weight: 800;
    line-height: 40px;
  }
  @media (max-width: 435px) {
    padding: 0%;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 30px;
  }
`;
export const WelcomeTypo = styled.p`
  padding: 0% 0% 0% 25%;
  color: var(--White, #fff);
  font-family: Raleway;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin: 0px;
  @media (max-width: 1024px) {
    padding: 0% 5%;
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
  }
  @media (max-width: 820px) {
    padding: 0% 10%;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
  }
  @media (max-width: 435px) {
    padding: 0% 10%;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  @media (max-width: 820px) {
    flex: unset;
  }
`;

export const TypoAndDataWrap = styled.div`
  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;
export const SliderInfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%; // Can change on mobile
  height: fit-content;
  border-radius: 20px;
  background: #fff;
  box-shadow: -1px 10px 50px 0px rgba(29, 69, 239, 0.2);
  position: absolute;
  bottom: 100px;
  margin-right: 300px;
  padding: 20px 0px;
  @media (max-width: 1024px) {
    position: absolute;
    display: flex;
    width: 70%; // Can change on mobile
    bottom: 50px;
    left: 25px;
    padding: 30px;
    gap: 20px;
  }

  @media (max-width: 820px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 80%; // Can change on mobile
    bottom: 25px;
    padding: 30px;
    gap: 20px;
  }

  @media (max-width: 435px) {
    position: absolute;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
export const SliderInfo = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  @media (max-width: 820px) {
    display: flex;
    width: 90%;
    justify-content: space-between;
  }

  @media (max-width: 435px) {
    display: flex;
    width: 90%;
    justify-content: space-between;
  }
`;

export const SliderTypo = styled.p`
  color: var(--Dark-300, #3f4e6a);
  font-family: Raleway;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  margin: 0px;
  @media (max-width: 1024px) {
    margin-right: 0px;
  }

  @media (max-width: 820px) {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 10px;
  }
`;
export const SliderData = styled.p`
  color: var(--Dark-Main-500, #0e1625);
  font-family: Raleway;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  margin: 0px;
  @media (max-width: 1024px) {
    margin-right: 0px;
  }

  @media (max-width: 820px) {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 10px;
  }
`;
export const SliderButtonWraper = styled.div`
  display: flex;
  @media (max-width: 820px) {
    display: flex;
    width: 100%;
  }
  @media (max-width: 435px) {
    display: flex;
    width: 100%;
  }
`;

export const StyleBtn = {
  padding: "16px 60px",
  background: "var(--Light-Main-500, #1D45EF)",
  borderRadius: "10px",
  '@media (max-width: 820px)': {
    display: 'flex',
    padding: '10px 0px',
    width: '100%',
  },
  '@media (max-width: 435px)': {
    display: 'flex',
    padding: '10px 0',
    width: '100%',
  },
}
export const AboutUsWrapper = styled.div`
  height: 800px;
  background: #fff;
  padding: 40px 262px 60px 258px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    display: flex;
    height: fit-content;
    padding: 20px;
  }
`;

export const Title = styled.h1`
  color: var(--Light-Main-500, #1d45ef);
  font-family: Raleway;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: 60px;
  margin: 0px;
  display: flex;
  justify-content: center;
  @media (max-width: 1024px) {
    font-size: 38px;
  }
  @media (max-width: 820px) {
    font-size: 35px;
  }
  @media (max-width: 435px) {
    font-size: 30px;
  }
`;
export const Text = styled.p`
  color: var(--Dark-Main-500, #0e1625);
  text-align: center;
  font-family: Raleway;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin: 0px;
  padding: 20px;
  @media (max-width: 820px) {
    font-size: 20px;
  }
  @media (max-width: 435px) {
    font-size: 18px;
  }
`;
export const AboutUsSections = styled.div`
  display: flex;
  height: fit-content;
  justify-content: space-around;
  align-items: center;
  margin-top: 80px;

  @media (max-width: 1024px) {
    margin-top: 40px;

    display: flex;
    flex-direction: column;
    height: fit-content;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
  @media (max-width: 435px) {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
export const SectionData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5 0px;
  height: fit-content;
  gap: 20px;
`;
export const TitleAndTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  @media (max-width: 1024px) {
    padding: 0px 50px;
    align-items: center;
  }
  @media (max-width: 435px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const TitleAndTextWrapRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: 1024px) {
    padding: 0px 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 435px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const SectionTitle = styled.div`
  color: var(--Dark-Main-500, #0e1625);
  font-family: Raleway;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: 42px; /* 123.529% */
`;
export const Sectiontext = styled.div`
  color: var(--Dark-300, #3f4e6a);
  font-family: Raleway;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  @media (max-width: 1024px) {
    color: var(--Dark-300, #3f4e6a);
    text-align: center;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }
`;
export const SectiontextRight = styled.div`
  color: var(--Dark-300, #3f4e6a);
  font-family: Raleway;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  border: solid black 1px;
  @media (max-width: 1024px) {
    color: var(--Dark-300, #3f4e6a);
    text-align: center;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }
`;
export const PhoneIconBg = styled.div`
  width: 409px;
  height: 409px;
  flex-shrink: 0;
  border-radius: 409px;
  background: #1d45ef;
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const PhoneIconWrapper = styled.div`
  width: 307px;
  height: 615px;
  flex-shrink: 0;
  display: flex;
`;
export const HolidaysWrapper = styled.div`
  height: fit-content;
  background: #f0f2fc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 90px;
  gap: 40px;
  @media (max-width: 1024px) {
    display: flex;
    padding: 60px 80px;
    gap: 30px;
  }
  @media (max-width: 435px) {
    display: flex;
    padding: 60px 40px;
    gap: 30px;
  }
`;
export const TitleAndFilterWrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
@media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
}
@media (max-width: 435px) {
    display: flex;
    flex-direction: column;
}
`
export const HolidayTitle = styled.h1`
color: var(--Light-Main-500, #1D45EF);
font-family: Raleway;
font-size: 50px;
font-style: normal;
font-weight: 800;
line-height: 60px; /* 120% */
@media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    color: var(--Light-Main-500, #1D45EF);
text-align: center;
font-family: Raleway;
font-size: 32px;
font-style: normal;
font-weight: 800;
line-height: 36px; /* 128.571% */
}
@media (max-width: 435px) {
  color: var(--Light-Main-500, #1D45EF);
text-align: center;
font-family: Raleway;
font-size: 28px;
font-style: normal;
font-weight: 800;
line-height: 36px; /* 128.571% */
}
`
export const FilterButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
export const FilterButton = styled.button`
  border-radius: 6px;
  border: 1px solid var(--Light-Main-500, #1d45ef);
  padding: 15px 25px;
  color: var(--Light-Main-500, #1d45ef);
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 2 0px;
  &:hover {
    background-color: var(--Light-Main-500, #1d45ef);
    color: white;
    cursor: pointer;
  }
`;
export const HolidayCard = styled.div`
  height: fit-content;
  border-radius: 20px;
  background: #fff;
  display: flex;
  padding: 20px 0px 20px 40px;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding: 20px 50px;
    align-items: center;
  } 
  @media (max-width: 435px) {
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
  } 
`;
export const NameAndInfoWrap = styled.div`
padding-left: 50px;
  @media (max-width: 1024px) {
   padding-left: 0px;
  }
`
export const HolidayName = styled.h1`
  color: var(--Light-Main-500, #1d45ef);
  font-family: Raleway;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: 42px;
  margin: 0px;

  @media (max-width: 820px) {
    font-size: 22px;

  }
`;
export const HolidayInfo = styled.p`
  color: var(--Dark-Main-500, #0e1625);
  font-family: Raleway;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  margin-top: 12px;
  width: 90%;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 420px) {
    font-size: 14px;
  }
`;
export const DateAndTypeWrapper = styled.div`
  display: flex;
  width: fit-content;
  padding: 0px 60px;
  height: 66px;
  justify-content: space-around;
  align-items: center;
  gap: 40px;
  flex-shrink: 0;
  background: var(--Light-100, #f0f2fc);
  border-radius: 8px;
  margin-top: 28px;
  @media (max-width: 1024px) {
    gap: 80px;
    padding: 0px 50px;
  }
  @media (max-width: 435px) {
    font-size: 22px;
    gap: 20px;
    padding: 0px 20px;
    justify-content: start;
  }
`;

export const DateAndType = styled.p`
  color: var(--Dark-Main-500, #0e1625);
  font-family: Raleway;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: 0px;
  @media (max-width: 435px) {
    font-size: 14px;
  }
`;

export const DateAndTypeInfo = styled.p`
  color: var(--Light-Main-500, #1d45ef);
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 24px;
  margin: 0px;
  width: max-content;
  @media (max-width: 435px) {
    font-size: 18px;
  }
`;
export const Line = styled.div`
  height: 50px;
  width: 2px;
  background: var(--Light-200, #d2dafc);
`;
export const ImageWrapper = styled.div`
  width: 422px;
  height: 281px;
  flex-shrink: 0;
  background-image: url(${testHoliday});
  border-radius: 25px;
  @media (max-width: 1024px) {
    width: 800px;
  height: 400px;
  background-size: cover;
  }
  @media (max-width: 820px) {
    background-size: cover;
    width: 600px;
  height: 300px;
}
  @media (max-width: 435px) {
    background-size: cover;
    width: 300px;
  height: 200px;
  }
`;
export const CardBgImage = styled.div`
  width: 140px;
  flex-shrink: 0;
  background-image: url(${cardBG});
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 820px) {
    display: none;
  }
`;
export const TopRateWrapper = styled.div`
  height: 700px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1024px) {
    display: flex;
    height:fit-content;
    align-items: center;

  }
  @media (max-width: 820px) {
    display: flex;
    height:fit-content;
    align-items: center;
  }
  @media (max-width: 435px) {
    display: flex;
    height:fit-content;
    align-items: center;
  }
`;

export const TopRateCardWrapper = styled.div`
  display: flex;
  gap: 40px;
  padding: 40px 100px;
  position: relative;
  @media (max-width: 1024px) {
    display: grid;
    grid-template-areas: "1fr";
    align-items: center;
    padding: 40px 200px;

  }
  @media (max-width: 820px) {
    display: grid;
    grid-template-areas: "1fr";
    padding: 40px 120px;

  }
  @media (max-width: 435px) {
    display: grid;
    grid-template-areas: "1fr";
    padding: 40px 20px;

  }
`;

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const TopRateCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  background: var(--Light-200, #d2dafc);
  border-radius: 5%;
  border-bottom-right-radius: 40px;
  transform: ${({ isbuttonhovered }) =>
    isbuttonhovered ? "scale(1.05)" : "scale(1)"};
  transition: transform 400ms ease-in;
  animation: ${({ isbuttonhovered }) =>
    isbuttonhovered
      ? css`
          ${transformAnimation} 1.5s forwards
        `
      : "none"};
  box-shadow: ${({ isbuttonhovered }) =>
    isbuttonhovered
      ? "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
      : "none"};
  transition: box-shadow 0.3s ease;
  @media (max-width: 1024px) {
    position: static;
    /* transform: none;
    animation: none; 
    box-shadow: none;  */
  }
`;

export const CardHover = styled.div`
  width: 417px;
  height: 246px;
  transform: rotate(5deg);
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--Light-Main-500, #1d45ef);
  position: relative;
  z-index: 0;
  opacity: ${({ isvisible }) => (isvisible ? 1 : 0)};
  transition: opacity 0.3s ease;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const CardTitle = styled.div`
  color: var(--Dark-Main-500, #0e1625);
  font-family: Raleway;
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  line-height: 36px;
  width: fit-content;
  margin: 0px;
  padding: 0px 20px;
  @media (max-width: 435px) {
    font-size: 24px;
    padding: 0px 10px;

  }
`;

export const CardInfo = styled.div`
  color: var(--Dark-Main-500, #0e1625);
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  width: fit-content;
  margin: 0px;
  padding: 10px 20px;
  @media (max-width: 435px) {
    padding: 5px 10px;
    font-size: 12px;
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 260px;
  flex-shrink: 0;
  background-image: url(${TopRateCardBG});
  background-size: cover;
  background-repeat: no-repeat;
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  align-items: center;
  @media (max-width: 435px) {
    height: 200px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardButtonWrapper = styled.div`
  width: 121px;
  height: 90px;
  background: #fff;
  border-top-left-radius: 40px;
  display: flex;
  align-items: end;
  justify-content: end;
  @media (max-width: 1024px) {
    width: 121px;
  height: 90px;
  }
  @media (max-width: 820px) {
    width: 121px;
  height: 90px;
  }
  @media (max-width: 435px) {
    width: 121px;
  height: 85px;
  }
`;

export const CardButton = styled.button`
  background: var(--Light-300, #a5b5f9);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 20px;
  position: absolute;
  transition: 0.2s transform ease-in-out;
  will-change: transform;
  border: none;
  &:hover {
    background: var(--Light-Main-500, #1d45ef);
    transform: scale(1.05);
    will-change: transform;
    cursor: pointer;
  }

`;

export const QuestionWrapper = styled.div`
  height: fit-content;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 260px 80px 260px;
  @media (max-width: 1024px) {
    padding: 0px 16px 80px 16px;
  }
`;
export const QuestionTitle = styled.h1`
  color: var(--Light-Main-500, #1d45ef);
  font-family: Raleway;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: 60px;
  margin: 0px;
  display: flex;
  justify-content: center;
  @media (max-width: 1024px) {
    color: var(--Light-Main-500, #1D45EF);
text-align: center;

font-family: Raleway;
font-size: 28px;
font-style: normal;
font-weight: 800;
line-height: 36px;
  }
`
export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 30px;

  .expansion-panel {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    background: var(--Light-100, #f0f2fc);
    padding: 5px 10px;
    border-radius: 16px;
    &:before {
      height: 0px;
      display: "none";
    }
  }
`;
export const AccordionTitle = styled.h1`
  color: var(--Dark-Main-500, #0e1625);
  font-family: Raleway;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: 28px;
`;
export const AccordionInfo = styled.p`
  color: var(--Dark-300, #3f4e6a);
  font-family: Raleway;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
`;
