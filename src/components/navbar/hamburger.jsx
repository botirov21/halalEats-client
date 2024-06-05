import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { ButtonWrapper, Container, Hamburgerdata, NavLink, Pages, StyleBtn, Text, Title, WelcomeWrapper } from "./navbarStyle";
import { Button } from "@mui/material";

export default function HamburgerMenu() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const DrawerList = (anchor) => (
    <Container
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <IconButton sx={{margin: '0px'}} onClick={toggleDrawer(anchor, false)}>
        <ArrowBackIcon />
      </IconButton>
      <WelcomeWrapper>
        <Title>Welcome to Project Name</Title>
        <Text>Join the world’s largest user friendly platform for Muslims</Text>
      </WelcomeWrapper>
      <ButtonWrapper>
        <Button sx={StyleBtn} variant="outlined" onClick={stopPropagation}>Sign up</Button>
        <Button sx={StyleBtn} variant="outlined" onClick={stopPropagation}>Login</Button>
      </ButtonWrapper>
      <Hamburgerdata>
        <NavLink to="mosques">
          <Pages>Mosques</Pages>
        </NavLink>
        <NavLink to="/fullTime">
          <Pages>Halal Restaurants</Pages>
        </NavLink>
        <NavLink to="/partTime">
          <Pages>Halal Markets</Pages>
        </NavLink>
      </Hamburgerdata>
    </Container>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon  sx={{ color: "#FFF" }}  onClick={toggleDrawer(anchor, true)} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {DrawerList(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
