import styled, { css } from 'styled-components';

const darkColor = '#171717';
const lightColor = '#FFFFFF';

export const Container = styled.div`
  font-family: 'Helvetica';
  height: 100vh;
`;

export const Hamburger = styled.button`
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 0;
  transition: transform 0.3s 0.1s ease-in-out;

  ${props =>
    props.isActive &&
    css`
      transform: translateX(250px);
    `}
`;

export const HamburgerBox = styled.span`
  width: 35px;
  height: 24px;
  display: inline-block;
  position: relative;
`;

export const HamburgerLine = styled.span`
  width: 100%;
  height: 3px;
  background-color: ${lightColor};
  position: absolute;
`;

export const HamburgerInner = styled(HamburgerLine)`
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.1s 0.2s ease-in-out;

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 3px;
    background-color: ${lightColor};
    position: absolute;
    left: 0;
    transition: transform 0.2s 0.2s ease-in-out;
  }

  &::before {
    top: -10px;
  }

  &::after {
    top: 10px;
  }

  ${props =>
    props.isActive &&
    css`
      background-color: transparent;

      &::before {
        transform: translateY(10px) rotate(45deg);
      }

      &::after {
        transform: translateY(-10px) rotate(-45deg);
      }
    `}
`;

export const Navigation = styled.div`
  height: 100vh;
  width: 250px;
  background-color: ${lightColor};
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-250px);
  transition: transform 0.3s ease-in-out;

  ${props =>
    props.isActive &&
    css`
      transform: translateX(0px);
    `}
`;

export const NavigationList = styled.ul`
  margin-top: 50px;
  list-style: none;
`;

export const NavigationItem = styled.li`
  margin-bottom: 20px;

  a {
    text-decoration: none;
    color: ${darkColor};
  }
`;