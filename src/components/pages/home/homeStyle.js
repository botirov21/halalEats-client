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
`;

export const HomeWrapper = styled.div`
  padding-top: 100px;
  height: 640px;
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
    height: 220px; /* Height of the bottom section */
    background: #f0f2fc; /* Different background color for the bottom section */
  }
`;
export const WelcomeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  flex: 1;
`;
export const WelcomeTitle = styled.h1`
  color: var(--Light-400, #778ff5);
  font-family: Raleway;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: 60px;
  margin: 0px;
  padding: 10% 16%;
`;
export const WelcomeTypo = styled.p`
  color: var(--White, #fff);
  font-family: Raleway;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin: 0px;
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
export const SliderInfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%; //mobile qilinyotganda ozgarishi mumkin
  height: 100px;
  border-radius: 20px;
  background: #fff;
  box-shadow: -1px 10px 50px 0px rgba(29, 69, 239, 0.2);
  position: absolute;
  bottom: 170px;
  margin-right: 300px;
  @media (max-width: 1024px) {
    margin-right: 0px;
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
`;
export const SliderData = styled.p`
  color: var(--Dark-Main-500, #0e1625);
  font-family: Raleway;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  margin: 0px;
`;
export const AboutUsWrapper = styled.div`
  height: 800px;
  background: #fff;
  padding: 40px 262px 60px 258px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  padding-top:20px;
  color: var(--Light-Main-500, #1d45ef);
  font-family: Raleway;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: 60px;
  margin: 0px;
  display: flex;
  justify-content: center;
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
`;
export const AboutUsSections = styled.div`
  display: flex;
  height: 500px;
  justify-content: space-around;
  align-items: center;
  margin-top: 80px;
`;
export const SectionData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;
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
  text-align: right;
  font-family: Raleway;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;
export const SectiontextRight = styled.div`
  color: var(--Dark-300, #3f4e6a);
  font-family: Raleway;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
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
`;
export const PhoneIconWrapper = styled.div`
  width: 307px;
  height: 615px;
  flex-shrink: 0;
`;
export const HolidaysWrapper = styled.div`
  height: 1250px;
  background: #f0f2fc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 90px;
  gap: 40px;
`;

export const FilterButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
export const FilterButton = styled.button`
  border-radius: 6px;
  border: 1px solid var(--Light-Main-500, #1d45ef);
  padding: 0px 25px;
  color: var(--Light-Main-500, #1d45ef);
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  &:hover {
    background-color: var(--Light-Main-500, #1d45ef);
    color: white;
    cursor: pointer;
  }
`;
export const HolidayCard = styled.div`
  height: 300px;
  border-radius: 20px;
  background: #fff;
  display: flex;
  padding: 20px 0px 20px 40px;
`;
export const HolidayName = styled.h1`
  color: var(--Light-Main-500, #1d45ef);
  font-family: Raleway;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: 42px;
  margin: 0px;
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
`;
export const DateAndTypeWrapper = styled.div`
  display: flex;
  width: 482px;
  height: 66px;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
  background: var(--Light-100, #f0f2fc);
  border-radius: 8px;
  margin-top: 28px;
`;

export const DateAndType = styled.p`
  color: var(--Dark-Main-500, #0e1625);
  font-family: Raleway;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: 0px;
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
`;
export const CardBgImage = styled.div`
  width: 140px;
  flex-shrink: 0;
  background-image: url(${cardBG});
  background-size: contain;
  background-repeat: no-repeat;
`;
export const TopRateWrapper = styled.div`
  height: 700px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopRateCardWrapper = styled.div`
  display: flex;
  gap: 40px;
  padding: 40px 100px;
  position: relative;
`;

export const CardContainer = styled.div`
  position: relative;
  display: flex;
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
  transform: ${({ isbuttonhovered  }) =>
    isbuttonhovered  ? "scale(1.05)" : "scale(1)"};
  transition: 0.2s transform ease-in-out;
  animation: ${({ isbuttonhovered  }) =>
    isbuttonhovered   ? css`${transformAnimation} 1.5s forwards` : "none"};
  box-shadow: ${({ isbuttonhovered  }) =>
    isbuttonhovered 
      ? "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
      : "none"};
  transition: box-shadow 0.3s ease;
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
  height: 600px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 260px;
`;
export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .expansion-panel {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    background: var(--Light-100, #f0f2fc);
    padding: 20px 30px;
    border-radius: 16px;
    &:before {
      height: 0px;
      display: "none";
    }
  }
`;
export const AccordionTitle = styled.h1`
color: var(--Dark-Main-500, #0E1625);
font-family: Raleway;
font-size: 30px;
font-style: normal;
font-weight: 800;
line-height: 28px;
`;
export const AccordionInfo = styled.p`
color: var(--Dark-300, #3F4E6A);
font-family: Raleway;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: 30px;
`;