import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { coordinateDto } from "../models/coordinate.model.d";
import { useState } from "react";

let defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37],
});

L.Marker.prototype.options.icon = defaultIcon;

export default function Map(props: mapProps) {
  const [coordinates, setCoordinates] = useState<coordinateDto[]>(props.coordinates);

  return (
    <MapContainer
      center={[6.316478, -75.560538]}
      zoom={14}
      style={{ height: props.height }}>
      <TileLayer
        attribution='React Movies'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <MapClick
        setPointer={(coordinates) => {
          setCoordinates([coordinates]);
         props.onHandleMapClick(coordinates);
        }}
      />
      {coordinates.map((coordinate, index) => {
        return <CustomMarker key={index} {...coordinate} />;
      })}
    </MapContainer>
  );
}

function MapClick(props: mapClickProps) {
  useMapEvent("click", (e) => {
    props.setPointer({ lat: e.latlng.lat, long: e.latlng.lng });
  });
  return null;
}

export interface mapClickProps {
  setPointer(coordinate: coordinateDto): void;
}

function CustomMarker(props: coordinateDto) {
  return <Marker position={[props.lat, props.long]} />;
}

export interface mapProps {
  height: string;
  coordinates: coordinateDto[];
  onHandleMapClick(coordinates:coordinateDto):void;
}
