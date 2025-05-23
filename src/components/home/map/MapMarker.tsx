import Image from "next/image"
import {
  AdvancedMarker,
} from "@vis.gl/react-google-maps";
import { FC } from "react";
import { Dialog, DialogTrigger } from "../../ui/dialog"

interface Props {
  lat: number;
  lng: number;
  name: string;
}

const MapMarker: FC<Props> = ({ lat, lng }) => {

  return (
    <Dialog>
      <DialogTrigger>
        <AdvancedMarker
          position={{
            lat,
            lng,
          }}
        >
          <Image src={"/location.svg"} alt="Location Marker" width={40} height={80} />
        </AdvancedMarker>
      </DialogTrigger>

    </Dialog>
  );
};

export default MapMarker;
