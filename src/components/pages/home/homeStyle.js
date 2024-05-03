import styled from 'styled-components'
import { Link } from "react-router-dom";

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

