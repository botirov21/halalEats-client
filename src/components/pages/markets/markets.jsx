import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import {
  ButtonWrapper,
  Card,
  CardButton,
  CardWrapper,
  FilterWrapper,
  Image,
  InputBtn,
  InputStyle,
  Location,
  LocationIconStyle,
  LocationWrapper,
  MosqueLink,
  Name,
  NameWrapper,
  ResponsiveInputBtn,
  SelectFilter,
  seeMoreButton,
  MarketBg,
  MarketText,
  MarketTextWrap,
  MarketTitle,
  MarketWrapper,
} from "./marketStyle";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import Input from "@mui/joy/Input";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Bounce } from "react-awesome-reveal";

const BASEURL = "http://localhost:5050/api/v1/";

const Markets = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allData, setAllData] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [cityOptions, setCityOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const response = await fetch(`${BASEURL}market/allMarkets`);
        const data = await response.json();
        setFilteredData(data.data);
        setAllData(data.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch Market. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMarkets();
    window.scrollTo(0, 0);
  }, []);

  // Input Search Data
  const handleInputSearch = (query) => {
    setInputSearch(query);
    const filtered = allData.filter((data) => {
      const name = data.name?.toLowerCase() || "";
      return name.includes(query.toLowerCase());
    });
    setFilteredData(filtered);
  };

  const handleProvinceChange = (value) => {
    setSelectedProvince(value);

    const cities = {
      "Metropolitan Cities": [
        "Seoul",
        "Busan",
        "Incheon",
        "Daegu",
        "Daejeon",
        "Gwangju",
      ],
      "Gyeonggi-do": ["Suwon", "Yongin", "Goyang"],
      "Gangwon-do": ["Chuncheon", "Wonju"],
      "Chungcheongbuk-do": ["Cheongju", "Chungju"],
      "Jeollabuk-do": ["Jeonju", "Gunsan"],
      "Jeollanam-do": ["Mokpo", "Yeosu"],
      "Gyeongsangbuk-do": ["Pohang", "Gyeongju"],
      "Gyeongsangnam-do": ["Changwon", "Gimhae"],
    };

    setCityOptions(cities[value] || []);
    setSelectedCity(""); // Reset city when province changes
  };

  const handleCityChange = (value) => {
    setSelectedCity(value);
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ClipLoader size={50} color={"#123abc"} loading={loading} />
      </div>
    );
  }

  return (
    <MarketWrapper>
      <MarketBg>
        <MarketTitle>Halal Markets</MarketTitle>
        <MarketTextWrap>
          <MarketText>
            Find Halal Markets near you easily with us. Choose your country and
            city of residence and find it easily.
          </MarketText>
        </MarketTextWrap>
        <FilterWrapper>
          <SelectFilter>
            <Select
              className="selectStyle"
              value={selectedProvince}
              onChange={(e, newValue) => handleProvinceChange(newValue)}
              placeholder="Select Province"
              indicator={<KeyboardArrowDown />}
              sx={{
                width: "25%",
                padding: 2,
                [`& .MuiSelect-indicator`]: {
                  transition: "0.2s",
                  [`&.Mui-expanded`]: {
                    transform: "rotate(-180deg)",
                  },
                },
              }}
            >
              <Option value="Metropolitan Cities">Metropolitan Cities</Option>
              <Option value="Gyeonggi-do">Gyeonggi-do</Option>
              <Option value="Gangwon-do">Gangwon-do</Option>
              <Option value="Chungcheongbuk-do">Chungcheongbuk-do</Option>
              <Option value="Jeollabuk-do">Jeollabuk-do</Option>
              <Option value="Jeollanam-do">Jeollanam-do</Option>
              <Option value="Gyeongsangbuk-do">Gyeongsangbuk-do</Option>
              <Option value="Gyeongsangnam-do">Gyeongsangnam-do</Option>
            </Select>
            <Select
              className="selectStyle"
              value={selectedCity}
              onChange={(e, newValue) => handleCityChange(newValue)}
              placeholder="Select City"
              indicator={<KeyboardArrowDown />}
              sx={{
                width: "25%",
                padding: 2,
                [`& .MuiSelect-indicator`]: {
                  transition: "0.2s",
                  [`&.Mui-expanded`]: {
                    transform: "rotate(-180deg)",
                  },
                },
              }}
              disabled={!selectedProvince}
            >
              {cityOptions.map((city, index) => (
                <Option key={index} value={city}>
                  {city}
                </Option>
              ))}
            </Select>
          </SelectFilter>
          <Input
            className="InputStyle"
            onChange={(e) => handleInputSearch(e.target.value)}
            endDecorator={
              <>
                <InputBtn>
                  <Button
                    className="inputBtn"
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
                </InputBtn>
                <ResponsiveInputBtn>
                  <Button
                    className="inputBtn"
                    sx={{
                      background: "var(--Light-Main-500, #1D45EF)",
                      borderRadius: "5px",
                      padding: "10px 20px",
                    }}
                    variant="contained"
                  >
                    <SearchIcon />
                  </Button>
                </ResponsiveInputBtn>
              </>
            }
            placeholder="Write market name"
            sx={InputStyle}
          />
        </FilterWrapper>
      </MarketBg>
      <CardWrapper>
        <Bounce>
          {filteredData &&
            filteredData.map((value, key) => (
              <MosqueLink key={key} to={`/marketDetail/${value._id}`}>
                <Card>
                  <Image/>
                  <NameWrapper>
                    <Name>{value.name}</Name>
                    <CardButton>
                      <ArrowOutwardIcon sx={LocationIconStyle} />
                    </CardButton>
                  </NameWrapper>
                  <LocationWrapper>
                    <LocationOnIcon sx={LocationIconStyle} />
                    {value.metropolitanCity ? (
                      <Location>{value.metropolitanCity}</Location>
                    ) : (
                      <Location>{value.city}</Location>
                    )}
                  </LocationWrapper>
                </Card>
              </MosqueLink>
            ))}
        </Bounce>
      </CardWrapper>

      <ButtonWrapper>
        <Button sx={seeMoreButton} variant="contained">
          See More
        </Button>
      </ButtonWrapper>
    </MarketWrapper>
  );
};

export default Markets;
