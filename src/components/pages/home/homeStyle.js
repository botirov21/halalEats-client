import styled from 'styled-components'
import { Link } from "react-router-dom";
import testHoliday from "../../../assets/eid.png";
import cardBG from "../../../assets/cardImage.png";

export const HomeLink = styled(Link)`
text-decoration: none;
`

export const HomeWrapper = styled.div`
  padding-top:100px;
  height: 640px;
  background: #0E1625;
  display: flex;
  position: relative;
  justify-content: center;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 220px; /* Height of the bottom section */
    background: #F0F2FC; /* Different background color for the bottom section */
  }
`;
export const WelcomeTextWrapper = styled.div`
display: flex;
flex-direction:column;
align-items:center;
justify-content:start;
flex: 1;
`
export const WelcomeTitle = styled.h1`
color: var(--Light-400, #778FF5);
font-family: Raleway;
font-size: 40px;
font-style: normal;
font-weight: 800;
line-height: 60px;
margin:0px;
padding: 10% 16%;
`
export const WelcomeTypo = styled.p`
color: var(--White, #FFF);
font-family: Raleway;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 32px;
margin:0px;
`

export const SliderWrapper = styled.div`
display: flex;
flex: 1;
align-items:center;
`
export const SliderInfoWrapper = styled.div`
display:flex;
justify-content: space-around;
align-items:center;
width: 60%;  //mobile qilinyotganda ozgarishi mumkin
height:100px;
border-radius: 20px;
background: #FFF;
box-shadow: -1px 10px 50px 0px rgba(29, 69, 239, 0.20);
position: absolute;
bottom: 170px;
margin-right:300px;
@media (max-width: 1024px) {
margin-right:0px;
}
`
export const SliderTypo = styled.p`
color: var(--Dark-300, #3F4E6A);
font-family: Raleway;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: 30px;
margin:0px;
`
export const SliderData = styled.p`
color: var(--Dark-Main-500, #0E1625);
font-family: Raleway;
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: 40px; 
margin:0px;
`
export const AboutUsWrapper = styled.div`
height: 1000px;
background: #FFF;
padding: 60px 262px 60px 262px; 
`
export const AboutUsDataWrapper = styled.div`
background: #FFF;
display: flex;
flex-direction: column;
align-items: center;
`
export const AboutUsTitle = styled.h1`
color: var(--Light-Main-500, #1D45EF);
font-family: Raleway;
font-size: 50px;
font-style: normal;
font-weight: 800;
line-height: 60px;
margin: 0px;
`
export const AboutUsText = styled.p`
color: var(--Dark-Main-500, #0E1625);
text-align: center;
font-family: Raleway;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 32px; 
margin: 0px;
padding-top: 20px;
`
export const AboutUsSections = styled.div`
display: flex;
height: 600px;
justify-content: space-around;
align-items: center;
margin-top:100px;
`
export const SectionData = styled.div`
display: flex;
flex-direction:column;
justify-content: space-between;
height: 600px;

`
export const SectionTitle = styled.div`
color: var(--Dark-Main-500, #0E1625);
font-family: Raleway;
font-size: 34px;
font-style: normal;
font-weight: 800;
line-height: 42px; /* 123.529% */

`
export const Sectiontext = styled.div`
color: var(--Dark-300, #3F4E6A);
text-align: right;
font-family: Raleway;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 32px;
`
export const SectiontextRight = styled.div`
color: var(--Dark-300, #3F4E6A);
font-family: Raleway;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 32px;
`
export const PhoneIconBg = styled.div`
width: 509px;
height: 509px;
flex-shrink: 0;
border-radius: 409px;
background: #1D45EF;
margin: 30px;
display:flex;
align-items:center;
justify-content: center;
`
export const PhoneIconWrapper = styled.div`
width: 347px;
height: 715px;
flex-shrink: 0;
`
export const HolidaysWrapper = styled.div`
height: 1350px;
background: #F0F2FC;
display: flex;
flex-direction: column;
align-items: center;
padding:60px 90px;
gap: 40px;
`
export const HolidaysTitle = styled.h1`
color: var(--Light-Main-500, #1D45EF);
font-family: Raleway;
font-size: 46px;
font-style: normal;
font-weight: 800;
margin:0px;
`
export const FilterButtonWrapper = styled.div`
display: flex;
gap: 10px;
`
export const FilterButton = styled.button`
border-radius: 6px;
border: 1px solid var(--Light-Main-500, #1D45EF);
padding: 10px 30px;
color: var(--Light-Main-500, #1D45EF);
font-family: Raleway;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px;
&:hover{
    background-color: var(--Light-Main-500, #1D45EF); /* Change to desired background color */
    color: white; /* Change to desired text color */
    cursor: pointer; /* Optional: Change cursor to pointer on hover */
  }
`
export const HolidayCard = styled.div`
height: 368px;
border-radius: 20px;
background: #FFF;
display: flex;
padding: 40px 0px 20px 50px;
`
export const HolidayName = styled.h1`
color: var(--Light-Main-500, #1D45EF);
font-family: Raleway;
font-size: 34px;
font-style: normal;
font-weight: 800;
line-height: 42px; 
margin: 0px;
`
export const HolidayInfo = styled.p`
color: var(--Dark-Main-500, #0E1625);
font-family: Raleway;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: 30px;
margin-top: 12px;
`
export const DateAndTypeWrapper = styled.div`
display: flex;
width: 482px;
height: 66px;
justify-content: space-around;
align-items: center;
gap: 20px;
flex-shrink: 0;
background: var(--Light-100, #F0F2FC);
border-radius: 8px;
margin-top: 28px;
`

export const DateAndType = styled.p`
color: var(--Dark-Main-500, #0E1625);
font-family: Raleway;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;
margin: 0px;
`

export const DateAndTypeInfo = styled.p`
color: var(--Light-Main-500, #1D45EF);
font-family: Raleway;
font-size: 18px;
font-style: normal;
font-weight: 800;
line-height: 24px;
margin: 0px;
width: max-content;
`
export const Line = styled.div`
height: 50px;
width: 2px;
background: var(--Light-200, #D2DAFC);
`
export const ImageWrapper = styled.div`
width: 422px;
height: 281px;
flex-shrink: 0;
background-image: url(${testHoliday});
border-radius:25px;
`
export const CardBgImage = styled.div`
width: 150px;
flex-shrink: 0;
background-image: url(${cardBG});
background-size: contain;
background-repeat: no-repeat;

`