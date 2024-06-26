import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  DetailWrapper,
  ImageWrapper,
  Map,
  PageLink,
  PageLocatioInfo,
  PageLocationWrap,
  ResposiveImageWrapper,
  Text,
  Title,
  TitleWrapper,
} from "./mosqueDetailStyle";
import MultiCarousel from "./multiCarusel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ClipLoader } from "react-spinners";

const BASEURL = "http://localhost:5050/api/v1/";

const MosqueDetail = () => {
  const { id } = useParams();
  const [dataByID, setDataByID] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [carouselData, setCarouselData] = useState([]);
  useEffect(() => {
    const fetchMosqueData = async () => {
      try {
        setLoading(true); 
        const response = await fetch(`${BASEURL}mosque/${id}`);
        const mosqueData = await response.json();
        if (mosqueData && mosqueData.data) {
          setDataByID(mosqueData.data);

          // Fetch carousel data
          fetchCarouselData(mosqueData.data._id);
        } else {
          setError("Failed to fetch mosque data");
        }
      } catch (error) {
        console.error("Error fetching mosque:", error);
        setError("Failed to fetch mosque");
      } finally {
        setLoading(false); 
      }
    };

    const fetchCarouselData = async (currentId) => {
      try {
        const response = await fetch(`${BASEURL}mosque/allMosques`);
        const data = await response.json();
        const allMosques = Array.isArray(data.data) ? data.data : [];
        const filteredData = allMosques.filter((mosque) => mosque._id !== currentId);
        setCarouselData(filteredData);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };

    // Scroll to top
    window.scrollTo(0, 0);

    fetchMosqueData();

  }, [id]); 

  // const fetchCarouselData = async (currentId) => {
  //   try {
  //     const response = await fetch(`${BASEURL}mosque/allMosques`);
  //     const data = await response.json();
      
  //     const allMosques = Array.isArray(data.data) ? data.data : [];
  
  //     const filteredData = allMosques.filter((mosque) => mosque._id !== currentId);
  //     setCarouselData(filteredData);
  //   } catch (error) {
  //     console.error("Error fetching carousel data:", error);
  //   }
  // };


  // const handleCarouselItemClick = async (selectedId) => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch(`${BASEURL}mosque/${selectedId}`);
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const mosqueData = await response.json();
  //     console.log(mosqueData); // Log to check the structure
  //     setDataByID(mosqueData);
  //     fetchCarouselData(selectedId);
  //   } catch (error) {
  //     console.error("Error fetching mosque:", error);
  //     setError("Failed to fetch mosque");
  //   } finally {
  //     setLoading(false);
  //   }
  // };



  useEffect(() => {
    if (dataByID?.latitude && dataByID?.longitude) {
      loadKakaoMap(dataByID.latitude, dataByID.longitude);
    }
  }, [dataByID]);

  const loadKakaoMap = async (latitude, longitude) => {
    if (!window.kakao || !window.kakao.maps) {
      await new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=c857e664f6baf7d60a3e9d714334227e";
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

          const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
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
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
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
        <ResposiveImageWrapper/>
        <TitleWrapper>
          <PageLocationWrap>
          <PageLink to= "/">
             <PageLocatioInfo>Home</PageLocatioInfo>
            </PageLink>
            <ArrowForwardIosIcon style={{ color: "#0F2C59" }} />
            <PageLink to="/mosques">
             <PageLocatioInfo>Mosques</PageLocatioInfo>
            </PageLink>
            <ArrowForwardIosIcon style={{ color: "#0F2C59" }} />
            <PageLink to={`/mosqueDetail/${dataByID._id}`}>
             <PageLocatioInfo>Mosques Info</PageLocatioInfo>
            </PageLink>
          </PageLocationWrap>
          <Title>{dataByID?.name}</Title>
          <Text>Location: {dataByID?.location}</Text>
          <Text>Info: {dataByID?.info}</Text>
        </TitleWrapper>
        <ImageWrapper/>
      </Container>
      <Title>Mosque Location</Title>
      <Map id="map" />
        <MultiCarousel data={carouselData} />
    </DetailWrapper>
  );
  
};

export default MosqueDetail;
