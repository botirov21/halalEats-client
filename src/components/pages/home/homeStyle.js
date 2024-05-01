import styled from 'styled-components'

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
width: 65%;  //mobile qilinyotganda ozgarishi mumkin
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
