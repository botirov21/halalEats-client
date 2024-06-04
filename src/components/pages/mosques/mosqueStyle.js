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
@media (max-width: 1024px) {
  }
@media (max-width: 820px) {
  }
@media (max-width: 435px) {
  padding-top: 55px;
}
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
  @media (max-width: 1024px) {
  }
@media (max-width: 820px) {
  }
@media (max-width: 435px) {
  height: 400px;

}
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
@media (max-width: 1024px) {
  }
@media (max-width: 820px) {
  }
@media (max-width: 435px) {
  padding: 0% 10%;
}
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
width: 80%;
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
grid-template-areas: 'a a a';
gap: 40px;
padding: 2% 10%;
height: max-content;
@media (max-width: 1200px) {
  grid-template-areas: ' a a';
  padding: 2% 1% 0% 5%;
  }
  @media (max-width: 820px) {
  grid-template-areas: 'a';

  }
@media (max-width: 435px) {
    grid-template-areas: 'a';
    gap: 20px;
    padding: 3% 8%;
} 
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
height: 70px;// need change for responive
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
    
