import styled from "styled-components";
import { Link } from "react-router-dom";

export const FootLink = styled(Link)`
  text-decoration: none;
`;
export const FooterWrapper = styled.div`
  height: fit-content;
  background: var(--Dark-Main-500, #0e1625);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0px 0px 30px 0px;
`;
export const BackgroundShape = styled.div`
  height: 180px;
  width: 100%;
  background: var(--Light-Main-500, #1d45ef);
  border-radius: 100% 100% 0% 0% / 150% 150% 50% 50%;
  transform: rotate(180deg); /* Rotate by 100 degrees */
`;

export const NewslettersWrapper = styled.div`
  display: flex;
  width: 75%;
  padding: 23px 40px;
  justify-content: center;
  align-items: center;
  gap: 106px;
  border-radius: 20px;
  background: #fff;
  position: absolute;
  top: 80px;
`;

export const NewslettersTitle = styled.h1`
  color: var(--Light-Main-500, #1d45ef);
  font-family: Raleway;
  font-size: 34px;
  font-style: normal;
  font-weight: 800;
  line-height: 42px;
`;
export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  width: 55%;
  align-items: center;
  .Button {
    border-radius: 6px;
    background: var(--Light-Main-500, #1d45ef);
    padding: 20px 63px;
    position: absolute;
    right: 10px;
    color: white;
    border: none;
    cursor: pointer;
  }
`;
export const NewslettersInput = styled.input`
  border-radius: 10px;
  border: 2px solid var(--Light-200, #d2dafc);
  background: var(--Light-100, #f0f2fc);
  width: 100%;
  position: relative;
  padding: 32px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: var(--Dark-300, #3f4e6a);
    font-family: Raleway;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; /* 136.364% */
  }
`;
export const FooterLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
  width: 80%;
  gap: 20px;
  @media (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 820px) {
 display: none

}
@media (max-width: 435px) { 
    display: none
}
`;
export const FooterLink = styled.p`
  color: var(--Light-200, #d2dafc);
  font-family: Raleway;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  cursor: pointer;
`;
export const FooterLine = styled.div`
  height: 2px;
  background: var(--Light-100, #f0f2fc);
  width: 100%;
  fill: var(--Light-200, #d2dafc);
  stroke-width: 4px;
  stroke: var(--Light-Main-500, #1d45ef);
  opacity: 0.2;
`;
