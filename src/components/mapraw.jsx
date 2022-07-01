import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Polyline, Popup } from "react-leaflet";
import mapArrayToRoute from "../data/mapArrayToRoute.js";
import routesPack from "./packRoutes.js";

export default function Map() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    async function getRoutes() {
      let arr = [];
      for (let i = 0; i < routesPack.length; i++) {
        const route = await mapArrayToRoute(routesPack[i]);
        arr.push(route);
      }
      setRoutes(arr);
    }
    getRoutes();
  });

  if (!routes[0]) return <h1>Loading map...</h1>;
  else
    return (
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

          <Polyline
            pathOptions={{ color: "#ffeb3b", weight: 5 }}
            positions={routes[0]}
          >
            <Popup>Национален маршрут 1 - Искър-Струма</Popup>
          </Polyline>
          <Polyline
            pathOptions={{ color: "#3b83d1", weight: 5 }}
            positions={routes[1]}
          >
            <Popup>EuroVelo 6 - Дунавски велосипеден маршрут</Popup>
          </Polyline>
          <Polyline
            pathOptions={{ color: "#827717", weight: 5 }}
            positions={routes[2]}
          >
            <Popup>Национален маршрут 3 - Янтра-Марица-Арда</Popup>
          </Polyline>
          <Polyline
            pathOptions={{ color: "green", weight: 5 }}
            positions={routes[3]}
          >
            <Popup>Национален маршрут 4 - Предбалкан</Popup>
          </Polyline>
          <Polyline
            pathOptions={{ color: "orange", weight: 5 }}
            positions={routes[4]}
          >
            <Popup>Национален маршрут 5 - Лудогорие</Popup>
          </Polyline>
          <Polyline
            pathOptions={{ color: "#7cb342", weight: 5 }}
            positions={routes[5]}
          >
            <Popup>Национален маршрут 6 - Подбалкански</Popup>
          </Polyline>
          <Polyline
            pathOptions={{ color: "#2042b3", weight: 5 }}
            positions={routes[6]}
          >
            <Popup>Национален маршрут 7 - Черноморски</Popup>
          </Polyline>
          <Polyline
            pathOptions={{ color: "#8e24aa", weight: 5 }}
            positions={routes[7]}
          >
            <Popup>Национален маршрут 8 - Виа Диагоналис</Popup>
          </Polyline>
          <Polyline
            pathOptions={{ color: "#d32f2f", weight: 5 }}
            positions={routes[8]}
          >
            <Popup>EuroVelo 13 - Iron Curtain Trail</Popup>
          </Polyline>
        </MapContainer>
      </div>
    );
}
