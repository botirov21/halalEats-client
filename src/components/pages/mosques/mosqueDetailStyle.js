import styled from "styled-components";
import Image  from "../../../assets/mosqueImage.png"
import { Link } from "react-router-dom";


export const PageLink = styled(Link)`
text-decoration: none;
`
export const DetailWrapper = styled.div`
display: flex;
flex-direction: column;
padding:100px 150px;
height:fit-content;
align-items: center;
gap: 50px;
@media (max-width: 435px) {
    padding:0px;
    padding-top: 90px;
}
`
export const PageLocationWrap = styled.div`
gap: 10px;
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
border-radius: 8px;
border: 1px solid var(--Light-200, #D2DAFC);
background: var(--Light-100, #F0F2FC);
width: 50%;
@media (max-width: 1200px) {
display: none;
}
`
export const PageLocatioInfo = styled.p`
color: var(--Primary-1, #0F2C59);
font-family: Raleway;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;
`
export const Container = styled.div`
display: flex;
height:fit-content;
width:100%;
@media (max-width: 1200px) {
flex-direction:column;
}
@media (max-width: 435px) {
        width: 80%;
}
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
@media (max-width: 435px) {
    font-size: 28px;
}
`
export const Text = styled.p`
color: var(--Dark-Main-500, #0E1625);
font-family: Raleway;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: 30px;
margin: 0px;
@media (max-width: 435px) {
    font-size: 14px;
}
`

export const ImageWrapper = styled.div`
background-image: url(${Image});
background-size: cover;
background-repeat: no-repeat;
height: 300px;
width: 100%;
display: flex;
flex: 1;
@media (max-width: 435px) {
    display: none;

}
`
export const ResposiveImageWrapper = styled.div`
display: none;
@media (max-width: 1200px) {
background-image: url(${Image});
background-size: cover;
background-repeat: no-repeat;
height: 400px;
width: 100%;
display: flex;
}
@media (max-width: 435px) {
background-image: url(${Image});
background-size: cover;
background-repeat: no-repeat;
height: 200px;
width: 100%;
display: flex;
}
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
    height: 400px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    border-style: solid;
    border-width: medium;
    border-color: #D8D8D8;
    border-radius: 10px;
    @media (max-width: 435px) {
        height: 200px;
        width: 80%;
    }
;
`
export const SliderStyle = styled.div`
border: solid 1px black;
display: flex;
height: 200px;
`
