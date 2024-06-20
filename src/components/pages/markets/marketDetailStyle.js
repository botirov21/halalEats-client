import styled from "styled-components";
import Image  from "../../../assets/marketDetail.png"
import Image2  from "../../../assets/marketDetail2.png"
import mainProduct  from "../../../assets/productMainImg.png"
import product  from "../../../assets/product.png"

import { Link } from "react-router-dom";


export const PageLink = styled(Link)`
text-decoration: none;
`
export const DetailWrapper = styled.div`
display: flex;
flex-direction: column;
height:fit-content;
align-items: center;
gap: 50px;

@media (max-width: 435px) {
    padding:0px;
    padding-top: 90px;
    gap: 20px;
}
`
export const PageLocationWrap = styled.div`
gap: 10px;
display: flex;
align-items: center;
padding: 10px;
border-radius: 8px;
border: 1px solid var(--Light-200, #D2DAFC);
background: var(--Light-100, #F0F2FC);
width: 50%;
justify-content: center;    
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
padding:100px 150px;
display: flex;
height:fit-content;
width:100%;
@media (max-width: 1200px){
    padding:0px 50px;
    flex-direction:column;
}
@media (max-width: 435px) {
        width: 80%;
        padding:0px;
        padding-top: 20px;
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
padding: 10px;  
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
display: flex;
gap: 14px;
flex: 1;
flex-direction: column;
align-items: end;
@media (max-width: 1200px) {
    display: none;

}
`
export const ImageWrapperLeft = styled.div`
display: flex;
gap: 14px;
width: 80%;
padding-right:50px;
`
export const ImageWrappeRight = styled.div`
display: flex;
gap: 14px;
width: 80%;
padding-left:50px;

`
export const DetailImage = styled.div`
background-image: url(${Image});
background-size: cover;
background-repeat: no-repeat;
height: 164px;
width: 100%;
flex-shrink: 0;
display: flex;
flex: 1;
@media (max-width: 1200px) {
    display: none;
}
`
export const DetailImage2 = styled.div`
background-image: url(${Image2});
background-size: cover;
background-repeat: no-repeat;
height: 164px;
width: 100%;
display: flex;
flex: 1;
@media (max-width: 1200px) {
    display: none;

}
`
export const ResposiveImageWrapper = styled.div`
display: none;
@media (max-width: 1200px) {
background-image: url(${Image2});
background-size: cover;
background-repeat: no-repeat;
height: 400px;
width: 100%;
display: flex;
margin-top:100px;
}
@media (max-width: 435px) {
background-image: url(${Image2});
background-size: cover;
background-repeat: no-repeat;
height: 200px;
width: 100%;
display: flex;
}
`
export const MapWrapper = styled.div`
padding:0px 150px;
width: 100%;
@media (max-width: 1200px){
    padding:0px 50px;
}
@media (max-width: 435px){
    padding:0px;
    margin: 0px;
}
`
export const CaruselWrapper = styled.div`
padding:0px 150px;
width: 100%;
@media (max-width: 1200px){
    padding:0px 0px;
}
@media (max-width: 435px){
    padding:0px;
    padding-top: 10px;
}
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
// export const SliderStyle = styled.div`
// border: solid 21px black;
// display: flex;
// height: 200px;
// `
export const TitleWrap = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
export const PoductsWrap = styled.div`
background: #F0F2FC;
display: flex;
flex-direction: column;
width: 100%;
height: fit-content;
padding:20px 150px;
@media (max-width: 1200px) {
display: flex;
flex-direction: column;
padding:20px 20px;
}
@media (max-width: 830px) {
    padding:20px 0px;
}
`
export const ProductsContainer = styled.div`
display: flex;
width: 100%;
padding: 50px 0px;
gap: 50px;
@media (max-width: 830px) {
    display: flex;

flex-direction: column;
padding:20px 20px;
height: fit-content;
}
`

export const MainImageWrap = styled.div`
background-image: url(${mainProduct});
background-size: cover;
height: 500px;
width: 50%;
display: flex;
flex: 1;
@media (max-width: 830px) {
display: flex;
height: 300px;
width: 100%;
flex: none;
}
`
export const Products = styled.div`
display: flex;
flex: 1.5;
flex-direction: column;
gap: 20px;
`
export const Product = styled.div`
display: flex;
align-items: center;
gap: 20px;
`

export const ProductImg = styled.div`
background-image: url(${product});
background-size: cover;
height: 140px;
width: 25%;
display: flex;
@media (max-width: 830px) {
height: 90px;
}
`
export const Name = styled.p`
color: var(--Dark-Main-500, #0E1625);
font-family: Raleway;
font-size: 28px;
font-style: normal;
font-weight: 800;
line-height: 42px;
display: flex;
width: max-content;
@media (max-width: 830px) {
font-size: 18px;
}
`

export const LinedDiv = styled.div`
height: 1px;
border: solid var(--Dark-Main-500, #0E1625) 1px;
width:20%;
display: flex;
`
export const Price = styled.p`
color: var(--Light-Main-500, #1D45EF);
font-family: Raleway;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 30px;
display: flex;
flex: 1;
@media (max-width: 830px) {
font-size: 14px;
}
`