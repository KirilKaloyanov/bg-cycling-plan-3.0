import React from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Popup,
  GeoJSON,
} from "react-leaflet";
import mapArrayToRoute from "../data/mapArrayToRoute.js";
import nat1 from "../data/IskarStruma1";
import ev13 from "../data/IronCurtainTrail10.js";
import ev6 from "../data/DunavChernoMore2.js";
import nat3 from "../data/YantraMaritsa3";
import nat4 from "../data/Predbalkan4";
import nat5 from "../data/Ludogorie5";
import nat6 from "../data/Podbalkanski6";
import nat7 from "../data/Chernomorski7";
import nat8 from "../data/ViaDiagonalis8";
import mapData from "../data/NatVelo.json";

export default function Map() {
  // let nat1Route = mapArrayToRoute(nat1);
  // let ev6Route = mapArrayToRoute(ev6);
  // let ev13Route = mapArrayToRoute(ev13);
  // let nat3Route = mapArrayToRoute(nat3);
  // let nat4Route = mapArrayToRoute(nat4);
  // let nat5Route = mapArrayToRoute(nat5);
  // let nat6Route = mapArrayToRoute(nat6);
  // let nat7Route = mapArrayToRoute(nat7);
  // let nat8Route = mapArrayToRoute(nat8);

  return (
    <div className="map_container">
      <MapContainer center={[42.705, 25.09]} zoom={7.4} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* <Polyline
          pathOptions={{ color: "#ffeb3b", weight: 5 }}
          positions={nat1Route}
        >
          <Popup>Национален маршрут 1 - Искър-Струма</Popup>
  </Polyline>*/}
        {/* <Polyline
          pathOptions={{ color: "#3b83d1", weight: 5 }}
          positions={ev6Route}
        >
          <Popup>EuroVelo 6 - Дунавски велосипеден маршрут</Popup>
        </Polyline> */}
        {/*<Polyline
          pathOptions={{ color: "#d32f2f", weight: 5 }}
          positions={ev13Route}
        >
          <Popup>EuroVelo 13 - Iron Curtain Trail</Popup>
        </Polyline>
        <Polyline
          pathOptions={{ color: "#827717", weight: 5 }}
          positions={nat3Route}
        >
          <Popup>Национален маршрут 3 - Янтра-Марица-Арда</Popup>
        </Polyline>
        <Polyline
          pathOptions={{ color: "green", weight: 5 }}
          positions={nat4Route}
        >
          <Popup>Национален маршрут 4 - Предбалкан</Popup>
        </Polyline>
        <Polyline
          pathOptions={{ color: "orange", weight: 5 }}
          positions={nat5Route}
        >
          <Popup>Национален маршрут 5 - Лудогорие</Popup>
        </Polyline>
        <Polyline
          pathOptions={{ color: "#7cb342", weight: 5 }}
          positions={nat6Route}
        >
          <Popup>Национален маршрут 6 - Подбалкански</Popup>
        </Polyline>
        <Polyline
          pathOptions={{ color: "#2042b3", weight: 5 }}
          positions={nat7Route}
        >
          <Popup>Национален маршрут 7 - Черноморски</Popup>
        </Polyline>
        <Polyline
          pathOptions={{ color: "#8e24aa", weight: 5 }}
          positions={nat8Route}
        >
          <Popup>Национален маршрут 8 - Виа Диагоналис</Popup>
        </Polyline> */}
        {/* <GeoJSON data={mapData.features} /> */}
      </MapContainer>
    </div>
  );
}
