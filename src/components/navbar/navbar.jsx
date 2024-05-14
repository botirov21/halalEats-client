import React from "react";
import {
  LinksWrapper,
  LoginWraper,
  NavLink,
  NavbarLink,
  NavbarWrapper,
  WebsiteName,
} from "./navbarStyle";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import UK from "../../assets/uk.png";
// import UZ from "../../assets/uz.png";
// import KR from "../../assets/kr.png";

const Navbar = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <NavbarWrapper>
      <WebsiteName>Logotype</WebsiteName>
      <LinksWrapper>
        <NavLink to="/">
          <NavbarLink> Home</NavbarLink>
        </NavLink>
        <NavLink to="/mosques">
          <NavbarLink>Mosques</NavbarLink>
        </NavLink>
        <NavbarLink>Restaurants</NavbarLink>
        <NavbarLink>Markets</NavbarLink>
      </LinksWrapper>
      <LoginWraper>
        <FormControl
          sx={{ m: 0, minWidth: 80, display: "flex",  alignItems: "center" }}
          size="small"
        >
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={age}
            onChange={handleChange}
            sx={{
              ".MuiOutlinedInput-notchedOutline": { borderStyle: "none" },
              "& .MuiSvgIcon-root": { color: "white" },
              color: "white",
            }}
          >
            <MenuItem value={10}>
              {/* <img src={UK} alt="" /> */}
              EN
            </MenuItem>
            <MenuItem value={20}>
              {/* <img src={UZ} alt="" /> */}
              UZ
              </MenuItem>
            <MenuItem value={30}>
              {/* <img src={KR} alt="" /> */}
              KR
            </MenuItem>
          </Select>
        </FormControl>
        <Button
          sx={{
            background: "var(--Light-Main-500, #1D45EF);",
            padding: "10px 30px 10px 30px",
            borderRadius: "10px"
          }}
          variant="contained"
        >
          Login
        </Button>
      </LoginWraper>
    </NavbarWrapper>
  );
};

export default Navbar;
