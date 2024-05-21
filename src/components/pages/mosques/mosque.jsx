import React from "react";
import {
  ButtonWrapper,
  Card,
  CardButton,
  CardWrapper,
  FilterWrapper,
  Image,
  InputStyle,
  Location,
  LocationIconStyle,
  LocationWrapper,
  MosqueBg,
  MosqueLink,
  MosqueText,
  MosqueTextWrap,
  MosqueTitle,
  MosquesWrapper,
  Name,
  NameWrapper,
  seeMoreButton,
} from "./mosqueStyle";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import Input from "@mui/joy/Input";
import SearchIcon from "@mui/icons-material/Search";
import { card } from "../../mock/mosqueData";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Bounce } from "react-awesome-reveal";

const Mosques = () => {
  const mosqueData = card.MosqueList;
  return (
    <MosquesWrapper>
      <MosqueBg>
        <MosqueTitle>Mosques</MosqueTitle>
        <MosqueTextWrap>
          <MosqueText>
            Find mosques near you easily with us. Choose your country and city
            of residence and find it easily.
          </MosqueText>
        </MosqueTextWrap>
        <FilterWrapper>
          <Select
            className="selectStyle"
            placeholder="Select region"
            indicator={<KeyboardArrowDown />}
            sx={{
              width: "25%",
              padding: 2,
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
          >
            <Option value="dog">Dog</Option>
            <Option value="cat">Cat</Option>
            <Option value="fish">Fish</Option>
            <Option value="bird">Bird</Option>
          </Select>
          <Select
            placeholder="Select city"
            indicator={<KeyboardArrowDown />}
            sx={{
              width: "25%",
              padding: 2,
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
          >
            <Option value="dog">Dog</Option>
            <Option value="cat">Cat</Option>
            <Option value="fish">Fish</Option>
            <Option value="bird">Bird</Option>
          </Select>
          <Input
            className="InputStyle"
            endDecorator={
              <Button
                sx={{
                  background: "var(--Light-Main-500, #1D45EF)",
                  borderRadius: "10px",
                  padding: "10px 20px",
                }}
                variant="contained"
              >
                <SearchIcon />
                Search
              </Button>
            }
            placeholder="Write mosque name"
            sx={InputStyle}
          />
        </FilterWrapper>
      </MosqueBg>
      <CardWrapper>
        <Bounce>
          {mosqueData.map((value, key) => {
            return (
              <MosqueLink key={key} to={`/mosqueDetail/${value.id}`}>
                <Card>
                  <Image />
                  <NameWrapper>
                    <Name>{value.mosque.name}</Name>
                    <CardButton>
                      <ArrowOutwardIcon sx={LocationIconStyle} />
                    </CardButton>
                  </NameWrapper>
                  <LocationWrapper>
                    <LocationOnIcon sx={LocationIconStyle} />
                    <Location>{value.mosque.location}</Location>
                  </LocationWrapper>
                </Card>
              </MosqueLink>
            );
          })}
        </Bounce>
      </CardWrapper>
      <ButtonWrapper>
        <Button sx={seeMoreButton} variant="contained">
          See More
        </Button>
      </ButtonWrapper>
    </MosquesWrapper>
  );
};

export default Mosques;
