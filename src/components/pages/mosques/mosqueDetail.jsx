import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  DetailWrapper,
  ImageWrapper,
  Map,
  Text,
  Title,
  TitleWrapper,
} from "./mosqueDetailStyle";
import { card } from "../../mock/mosqueData";
import MultiCarousel from "./multiCarusel";

const MosqueDetail = () => {
  const { id } = useParams();
  const [dataByID, setDataByID] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    const fetchMosque = async () => {
      try {
        const mosqueData = await fetchMosqueById(id);
        if (mosqueData) {
          setDataByID(mosqueData);
          filterCarouselData(id);
        } else {
          setError("Mosque not found");
        }
      } catch (error) {
        console.error("Error fetching mosque:", error);
        setError("Failed to fetch mosque");
      } finally {
        setLoading(false);
      }
    };

    fetchMosque();
  }, [id]);

  const filterCarouselData = (currentId) => {
    const filteredData = card.MosqueList.filter(
      (mosque) => mosque.id !== parseInt(currentId)
    );
    setCarouselData(filteredData);
  };

  const handleCarouselItemClick = async (selectedId) => {
    try {
      const mosqueData = await fetchMosqueById(selectedId);
      if (mosqueData) {
        setDataByID(mosqueData);
        filterCarouselData(selectedId);
      } else {
        setError("Mosque not found");
      }
    } catch (error) {
      console.error("Error fetching mosque:", error);
      setError("Failed to fetch mosque");
    }
  };

  const fetchMosqueById = async (id) => {
    // Simulated API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    const mosque = card.MosqueList.find((mosque) => mosque.id === parseInt(id));
    return mosque;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (dataByID && dataByID.mosque.latitude && dataByID.mosque.longitude) {
      loadKakaoMap(dataByID.mosque.latitude, dataByID.mosque.longitude);
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
        } else {
          console.error("Map container not found");
        }
      });
    }
  };

  if (loading) {
    return (
      <DetailWrapper>
        <p>Loading...</p>
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
        <TitleWrapper>
          <Title>{dataByID.mosque.name}</Title>
          <Text>Location: {dataByID.mosque.location}</Text>
          <Text>Info: {dataByID.mosque.info}</Text>
        </TitleWrapper>
        <ImageWrapper />
      </Container>
      <Title> Mosque Location</Title>
      <Map id="map" />
      <MultiCarousel
        data={carouselData}
        onItemClick={handleCarouselItemClick}
      />
    </DetailWrapper>
  );
};

export default MosqueDetail;
