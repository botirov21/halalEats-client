import styled from "styled-components";
import Image  from "../../../assets/mosqueImage.png"

export const DetailWrapper = styled.div`
display: flex;
flex-direction: column;
padding:100px;
height:fit-content;
align-items: center;
gap: 50px;
`
export const Container = styled.div`
display: flex;
height:fit-content;
gap: 40px;
`

export const TitleWrapper = styled.div`
display: flex;
flex: 1;
flex-direction: column;
padding:0px;
gap: 20px;
height:fit-content;
`

export const Title = styled.h1`
color: var(--Light-Main-500, #1D45EF);
font-family: Raleway;
font-size: 50px;
font-style: normal;
font-weight: 800;
line-height: 60px;
margin: 0px;
`
export const Text = styled.p`
color: var(--Dark-Main-500, #0E1625);
font-family: Raleway;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: 30px;
margin: 0px;

`

export const ImageWrapper = styled.div`
background-image: url(${Image});
background-size: cover;
background-repeat: no-repeat;
height: 300px;
width: 100%;
display: flex;
flex: 1;
`
export const MapWrapper = styled.div`
    width: 100%;
    height: 350px;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    border-style: solid;
    border-width: medium;
    border-color: #D8D8D8;
`
export const Map = styled.div`
    width: 100%;
    height: 500px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    border-style: solid;
    border-width: medium;
    border-color: #D8D8D8;
`
export const SliderStyle = styled.div`
border: solid 1px black;
display: flex;
height: 200px;
`
