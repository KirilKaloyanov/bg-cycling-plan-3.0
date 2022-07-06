import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import ict from "../data/draft/IronCurtainTrail10.json";
import dcr from "../data/draft/DunavChernoMore2.json";
import draft from "../data/draft/draft.json";

export default function Map() {
  return (
    <>
      <div className="map_container">
        <MapContainer
          center={[42.705, 25.09]}
          zoom={7.4}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON data={ict.features} style={{ color: "#32a852" }} />
          <GeoJSON data={dcr.features} style={{ color: "#325da8" }} />
          <GeoJSON
            data={draft.features}
            style={{ color: "#ed7d40", opacity: 0.5, weight: 10 }}
          />
        </MapContainer>
      </div>
      <div></div>
    </>
  );
}
