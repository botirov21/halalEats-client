import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CaruselWrapper,
  Container,
  DetailImage,
  DetailImage2,
  DetailWrapper,
  ImageWrappeRight,
  ImageWrapper,
  ImageWrapperLeft,
  LinedDiv,
  MainImageWrap,
  Map,
  MapWrapper,
  Name,
  PageLink,
  PageLocatioInfo,
  PageLocationWrap,
  PoductsWrap,
  Price,
  Product,
  ProductImg,
  Products,
  ProductsContainer,
  ResposiveImageWrapper,
  Text,
  Title,
  TitleWrap,
  TitleWrapper,
} from "./marketDetailStyle"; // Ensure this path and file are correct
import MultiCarousel from "./multiCarusel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ClipLoader } from "react-spinners";
import { card } from "../../mock/productData";
const BASEURL = "http://localhost:5050/api/v1/";

const MarketDetail = () => {
  const { id } = useParams();
  const [dataByID, setDataByID] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [carouselData, setCarouselData] = useState([]);
  const allData = card.ProductList;
  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASEURL}market/${id}`);
        const marketData = await response.json();
        if (marketData) {
          setDataByID(marketData);
          fetchCarouselData(marketData._id);
        } else {
          setError("Failed to fetch Market data: No data found");
        }
      } catch (error) {
        console.error("Error fetching market:", error);
        setError(`Failed to fetch market: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    const fetchCarouselData = async (currentId) => {
      try {
        const response = await fetch(`${BASEURL}market/allMarkets`);
        const data = await response.json();
        console.log("Carousel data:", data);
        const allMarkets = Array.isArray(data.data) ? data.data : [];
        const filteredData = allMarkets.filter(
          (market) => market._id !== currentId
        );
        setCarouselData(filteredData);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };

    window.scrollTo(0, 0);
    fetchMarketData();
  }, [id]);

  useEffect(() => {
    if (dataByID?.latitude && dataByID?.longitude) {
      loadKakaoMap(dataByID.latitude, dataByID.longitude);
    }
  }, [dataByID]);

  const loadKakaoMap = async (latitude, longitude) => {
    if (!window.kakao || !window.kakao.maps) {
      await new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src =
          "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=c857e664f6baf7d60a3e9d714334227e";
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }

    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        if (mapContainer) {
          const options = {
            center: new window.kakao.maps.LatLng(latitude, longitude),
            level: 12,
          };
          const map = new window.kakao.maps.Map(mapContainer, options);

          const markerPosition = new window.kakao.maps.LatLng(
            latitude,
            longitude
          );
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(map);

          mapContainer.addEventListener("click", () => {
            window.location.href = `https://kko.to/8IHMS311Fh?lat=${latitude}&lng=${longitude}`;
          });
        } else {
          console.error("Map container not found");
        }
      });
    }
  };

  if (loading) {
    return (
      <DetailWrapper>
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
      </DetailWrapper>
    );
  }

  if (error) {
    return (
      <DetailWrapper>
        <p>{error}</p>
      </DetailWrapper>
    );
  }

  return (
    <DetailWrapper>
      <Container>
        <ResposiveImageWrapper />
        <TitleWrapper>
          <PageLocationWrap>
            <PageLink to="/">
              <PageLocatioInfo>Home</PageLocatioInfo>
            </PageLink>
            <ArrowForwardIosIcon style={{ color: "#0F2C59" }} />
            <PageLink to="/markets">
              <PageLocatioInfo>Markets</PageLocatioInfo>
            </PageLink>
            <ArrowForwardIosIcon style={{ color: "#0F2C59" }} />
            <PageLink to={`/marketDetail/${dataByID?._id}`}>
              <PageLocatioInfo>Market Info</PageLocatioInfo>
            </PageLink>
          </PageLocationWrap>
          <Title>{dataByID?.name}</Title>
          <Text>Location: {dataByID?.location}</Text>
          <Text>Info: {dataByID?.info}</Text>
        </TitleWrapper>
        <ImageWrapper>
          <ImageWrapperLeft>
            <DetailImage />
            <DetailImage2 />
          </ImageWrapperLeft>
          <ImageWrappeRight>
            <DetailImage2 />
            <DetailImage />
          </ImageWrappeRight>
        </ImageWrapper>
      </Container>
      <PoductsWrap>
        <TitleWrap>
          <Title>Avaiable products</Title>
        </TitleWrap>
        <ProductsContainer>
          <MainImageWrap />
          <Products>
            {allData.map((value, key) => (
              <Product key={key}>
                <ProductImg />
                <Name>{value.product.name}</Name>
                <LinedDiv />
                <Price>{value.product.price}</Price>
              </Product>
            ))}
          </Products>
        </ProductsContainer>
      </PoductsWrap>
      <Title>Market Location</Title>
      <MapWrapper>
        <Map id="map" />
      </MapWrapper>
      <CaruselWrapper>
        <MultiCarousel data={carouselData} />
      </CaruselWrapper>
    </DetailWrapper>
  );
};

export default MarketDetail;
