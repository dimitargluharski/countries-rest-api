import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  useMap,
} from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";

const MapUpdater = ({ center }: { center: [number, number] }) => {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.setView(center, map.getZoom());
    }
  }, [center, map]);

  return null;
};

export const LeafletMap = ({ data }: any) => {
  const coordinates = data?.latlng || [51.505, -0.09];
  const countryName = data?.name.common || "Unknown Country";

  return (
    <div className="w-full h-full">
      <MapContainer
        center={coordinates}
        zoom={2}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <MapUpdater center={coordinates as [number, number]} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={coordinates} icon={new L.Icon.Default()}>
          <Tooltip direction="top" offset={[0, -10]} opacity={1}>
            <span>{countryName}</span>{" "}
          </Tooltip>
          <Popup>{countryName}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
