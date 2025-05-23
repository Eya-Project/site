"use client";
import { MapData } from "@/app/(main)/page";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { FC } from "react";
import MapMarker from "./MapMarker";

const MapWrapper: FC<MapData> = ({ countries }) => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <Map
        style={{ width: "100vw", height: "80vh" }}
        defaultZoom={8}
        defaultCenter={{ lat: -33.8688, lng: 151.2093 }}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        colorScheme="DARK"
        mapId={"1234"}
        key={1}
      >
        {countries.map((country, index) => (
          <MapMarker
            lat={country.latitude}
            lng={country.longitude}
            name={country.name}
            key={index}
          />
        ))}
      </Map>
    </APIProvider>
  );
};

export default MapWrapper;
