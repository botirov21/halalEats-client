import styled from 'styled-components'
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
text-decoration: none;
`

export const NavbarWrapper = styled.div`
overflow: hidden;
width: 100%;
height: 70px;
background: var(--Dark-Main-500, #0E1625);
display: flex;
justify-content: space-evenly;
align-items:center;
border-bottom: white solid 1px;
position:fixed;
z-index:3;
@media (max-width: 1024px) {
    justify-content: space-between;
    padding: 0px 20px
}
@media (max-width: 820px) {
    height: 70px;
}
@media (max-width: 435px) { 
    height: 55px;

}
`
export const WebsiteName = styled.p`
color: var(--White, #FFF);
/* Extra Bold/28px -> 36px */
font-family: Raleway;
font-size: 28px;
font-style: normal;
font-weight: 800;
line-height: 36px; 

`
export const LinksWrapper = styled.div`
display: flex;
gap:60px;
@media (max-width: 1024px) {
    display: none
}

`
export const NavbarLink = styled.div`
cursor: pointer;
display: flex;
justify-content: space-around;
color: var(--White, #FFF);
font-family: Raleway;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 30px; 
`
export const LoginWraper = styled.div`
display:flex;
@media (max-width: 1024px) {
    display:flex;
    justify-content: space-between;
}
@media (max-width: 820px) {
  }
  @media (max-width: 435px) {
    display: none

}
`