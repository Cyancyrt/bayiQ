import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import maptl from "./maptl";
import useGeoLoc from "./geoLoc";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

function MapLeaf({ location }) {
  const [lokasi, setLokasi] = useState({ lat: "", long: "" });
  ///map
  const [center, setCenter] = useState([51.505, -0.09]);
  const zoom = 15;
  const loc = useGeoLoc();
  const mapRef = useRef(null);
  const handleLokasi = () => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${location}`
        );
        if (response.data && response.data.length > 0) {
          const latitude = response.data[0].lat;
          const longitude = response.data[0].lon;
          setLokasi({ lat: latitude, long: longitude });
          mapRef.current.flyTo([latitude, longitude], zoom, {
            animate: true,
          });
        } else {
          console.log("Tidak ada hasil ditemukan untuk .");
        }
      } catch (error) {
        console.error("Ada masalah dengan permintaan geolokasi:", error);
      }
    };
    fetchData();
  };
  useEffect(() => {
    handleLokasi();
  }, [location]);
  return (
    <>
      <MapContainer center={center} zoom={zoom} ref={mapRef}>
        <TileLayer
          url={maptl.maptiler.url}
          attribution={maptl.maptiler.attribution}
        ></TileLayer>
        <Marker position={[lokasi.lat, lokasi.long]}></Marker>
      </MapContainer>
    </>
  );
}

export default MapLeaf;
