"use client";

import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { FC, useCallback, useState } from "react";

interface MarkerWithInfoWindowProps {
  lat: number;
  lng: number;
  name: string;
}

const MapMarker: FC<MarkerWithInfoWindowProps> = ({ lat, lng, name }) => {
  const [markerRef, marker] = useAdvancedMarkerRef();

  const [infoWindowShown, setInfoWindowShown] = useState(false);

  // clicking the marker will toggle the infowindow
  const handleMarkerClick = useCallback(
    () => setInfoWindowShown((isShown) => !isShown),
    [],
  );

  // if the maps api closes the infowindow, we have to synchronize our state
  const handleClose = useCallback(() => setInfoWindowShown(false), []);

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={{ lat, lng }}
        onClick={handleMarkerClick}
      />

      {infoWindowShown && (
        <InfoWindow anchor={marker} onClose={handleClose}>
          <h2>{name}</h2>
        </InfoWindow>
      )}
    </>
  );
};

export default MapMarker;
