import styled from "styled-components"
import { Link } from "react-router-dom";
import restaurantBg from "../../../assets/restaurantBg.png"
import restauranImage from "../../../assets/restauranImage.png"

export const RestaurantLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;
export const RestaurantWrapper = styled.div`
padding-top: 70px;
padding-bottom: 100px;
height: max-content;
display: flex;
flex-direction: column;
align-items: center;
@media (max-width: 1024px) {
  }
@media (max-width: 820px) {
  }
@media (max-width: 435px) {
  padding-top: 55px;
}
`
export const RestaurantBg = styled.div`
  position: relative;
  height: 580px;
  background-image: url(${restaurantBg}), linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0,  0.9)); /* Overlay with black gradient */
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
  }
@media (max-width: 820px) {
  }
@media (max-width: 435px) {
  height: 400px;

}
`;

export const RestaurantTitle = styled.h1`
color: var(--White, #FFF);
text-align: center;
font-family: Raleway;
font-size: 50px;
font-style: normal;
font-weight: 800;
line-height: 60px;
margin: 0px;
`
export const RestaurantTextWrap = styled.div`
padding: 0% 25%;
@media (max-width: 1024px) {
  }
@media (max-width: 820px) {
  }
@media (max-width: 435px) {
  padding: 0% 10%;
}
`
export const RestaurantText = styled.p`
color: var(--White, #FFF);
text-align: center;
font-family: Raleway;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 32px;
padding-top: 20px;
margin: 0px;
@media (max-width: 1024px) {
  font-size: 20px;
}

@media (max-width: 435px) {
  font-size: 14px;
}
`
export const FilterWrapper = styled.div`
display: flex;
gap: 20px;
padding-top:40px;
width: 90%;
justify-content: center;
  @media (max-width: 1024px) {
  }
@media (max-width: 820px) {
  }
@media (max-width: 435px) {
 flex-direction: column;
 width: 100%;
 align-items: center;
}
`
export const SelectFilter = styled.div`
display: flex;
width:40%;
gap: 16px;
.selectStyle{
    width:50%
  }
@media (max-width: 1024px) {
  }
@media (max-width: 820px) {
  }
@media (max-width: 435px) {
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 0px, 16px;
  justify-content: center;
  .selectStyle{
    width:40%
  }
}
`

export const InputStyle = {
    width: '50%',
    '&::before': {
      display: 'none',
    },
    '&:focus-within': {
      outline: '2px solid var(--Light-Main-500, #1D45EF)',
      outlineOffset: '2px',
    },
    '&::placeholder': {
      color: 'var(--Dark-100, #7086AF)',
      fontFamily: 'Raleway',
      opacity: 200,
    },
    '@media (max-width: 435px)': {
      width: '82%',
      padding: `7px 5px`
  },
};

export const InputBtn =  styled.div`
display: flex;
@media (max-width: 1024px) {
  }
@media (max-width: 820px) {
  }
@media (max-width: 435px) {
  display: none; 
}
`
export const ResponsiveInputBtn =  styled.div`
display: none;
@media (max-width: 1024px) {
  }
@media (max-width: 820px) {
  }
@media (max-width: 435px) {
  display: flex; 
}
`

export const CardWrapper =  styled.div`
display: grid;
grid-template-areas: 'a a';
padding: 5% 8%;
gap: 40px;
`
export const Card =  styled.div`
display: flex;
justify-content: space-between;
border-radius: 16px;
border: 2px solid var(--Light-200, #D2DAFC);
background: #FFF;
` 
export const CardInfos =  styled.div`
display: flex;
flex-direction: column;
padding: 25px 0px 0px 25px;
gap: 10px;
`
export const TitleWrapper =  styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`
export const Name =  styled.p`
color: var(--Dark-Main-500, #0E1625);
font-family: Raleway;
font-size: 28px;
font-style: normal;
font-weight: 600;
line-height: 36px;
`
export const City =  styled.p`
color: var(--Dark-400, #273248);
font-family: Raleway;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 30px;
`

export const OpeningHoursWrap =  styled.div`
display: flex;
gap: 10px;
`
export const OpeningHours =  styled.p`
color: var(--Dark-Main-500, #0E1625);
font-family: Raleway;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px; 
`
export const WorkingDaysWrap =  styled.div`
display: flex;
gap: 10px;
`
export const WorkingDays =  styled.p`
color: var(--Dark-Main-500, #0E1625);
font-family: Raleway;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px;
`
export const ActionsWrapper =  styled.div`
display: flex;
padding: 10px 0px;
border-top: solid 1px #D2DAFC;
gap: 40px;
`
export const RateWrappper =  styled.div`
display: flex;
gap: 20px;
`
export const Feedbacks =  styled.p`
color: var(--Light-Main-500, #1D45EF);
font-family: Raleway;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 30px;
`
export const ImageWrapper =  styled.p`
width: 280px;
background-image: url(${restauranImage});
background-size: cover;
background-repeat: no-repeat;
border-radius: 0px 16px 16px 0px;
`

export const ButtonWrapper = styled.div`
display: flex;
width: 100%;
justify-content: center;
`

export const seeMoreButton = {
    borderRadius: "10px",
    background: "var(--Light-Main-500, #1D45EF)",
    padding: "16px 60px"
};
    
