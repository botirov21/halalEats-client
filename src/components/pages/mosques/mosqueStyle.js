import styled from "styled-components"
import { Link } from "react-router-dom";
import mosqueBg from "../../../assets/mosqueBg.png"
import mosqueImage from "../../../assets/mosqueImage.png"
export const MosqueLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;
export const MosquesWrapper = styled.div`
padding-top: 70px;
padding-bottom: 100px;
height: max-content;
`
export const MosqueBg = styled.div`
  position: relative;
  height: 580px;
  background-image: url(${mosqueBg}), linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0,  0.9)); /* Overlay with black gradient */
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MosqueTitle = styled.h1`
color: var(--White, #FFF);
text-align: center;
font-family: Raleway;
font-size: 50px;
font-style: normal;
font-weight: 800;
line-height: 60px;
margin: 0px;
`
export const MosqueTextWrap = styled.div`
padding: 0% 25%;

`
export const MosqueText = styled.p`
color: var(--White, #FFF);
text-align: center;
font-family: Raleway;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 32px;
padding-top: 20px;
margin: 0px;
`
export const FilterWrapper = styled.div`
display: flex;
gap: 20px;
padding-top:40px;
width: 80%;
justify-content: center;
.selectStyle::placeholder {
    color: var(--Dark-100, #7086AF);
    font-family: sans-serif;
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
};

export const CardWrapper =  styled.div`
display: grid;
grid-template-areas: 'a a a';
gap: 40px;
padding: 2% 10%;
height: max-content;
`

export const Image = styled.div`
display: flex;
background-image: url(${mosqueImage});
background-size: cover;
height: 250px;
width: 100%;
border-radius: 7px;
`
export const NameWrapper = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
align-items: center;
`
export const Name = styled.h1`
color: var(--Dark-Main-500, #0E1625);
font-family: Raleway;
font-size: 28px;
font-style: normal;
font-weight: 600;
line-height: 36px;
margin: 0px;
width: 250px; // need change for responive
`
export const LocationWrapper = styled.div`
display: flex;
gap: 5px;
`
export const Location = styled.p`
color: var(--Dark-400, #273248);
font-family: Raleway;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 30px;
margin: 0px;
`

export const LocationIconStyle = {
color: "var(--Light-Main-500, #1D45EF)"
};

export const ButtonSyle = {
background: "var(--Light-100, #F0F2FC)",
borderRadius: "150px",
padding: "20px",
};

export const CardButton = styled.button`
background: var(--Light-100, #F0F2FC);
border-radius: 50px;
width: 52px;
height: 52px;
border: none;
&:hover{
    cursor: pointer;
}
`

export const Card = styled.div`
display:flex;
flex-direction: column;
gap: 10px;
background: var(--White, #FFF);
border-radius: 16px;
border: 2px solid var(--Light-200, #D2DAFC);
padding: 20px;
width: 90%;
transition: background 400ms ease;
transition: transform 400ms ease-in;

&:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    background: var(--Light-Main-500, #1D45EF);  
    cursor: pointer;
    transform: scale(1.03); 

    ${Name}, ${Location} {
      color: var(--White, #FFF);
    }

    ${CardButton}{
      background:  var(--Light-400, #778FF5);;
    }
    .MuiSvgIcon-root {
      color: var(--White, #FFF) ;
    }
  }
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
    
