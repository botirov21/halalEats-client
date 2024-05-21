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

const MosqueDetail = () => {
  const { id } = useParams();
  const [dataByID, setDataByID] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMosqueById = async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const mosque = card.MosqueList.find((mosque) => mosque.id === parseInt(id));
    console.log("Fetched mosque:", mosque);
    return mosque;
  };

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

  useEffect(() => {
    const fetchMosque = async () => {
      try {
        const mosqueData = await fetchMosqueById(id);
        if (mosqueData) {
          setDataByID(mosqueData);
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

  useEffect(() => {
    if (dataByID && dataByID.mosque.latitude && dataByID.mosque.longitude) {
      loadKakaoMap(dataByID.mosque.latitude, dataByID.mosque.longitude);
    }
  }, [dataByID]);

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
      {dataByID ? (
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
        </DetailWrapper>
      ) : (
        <p>No data available</p>
      )}
    </DetailWrapper>
  );
};

export default MosqueDetail;
