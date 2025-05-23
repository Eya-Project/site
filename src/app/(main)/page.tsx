import ContactForm from "@/components/home/ContactForm";
import HomeHero from "@/components/home/HomeHero";
import MapWrapper from "@/components/home/map/MapWrapper";
import { client } from "@/sanity/lib/client";
import { CountryType } from "@/types";

export interface HeroData {
  title: string;
  description: string;
  images: {
    url: string;
    alt: string;
  }[];
  buttons: {
    label: string;
    url: string;
    isActive: boolean;
  }[];
}

export interface MapData {
  countries: CountryType[];
}

const getHeroData = async (): Promise<HeroData | null> => {
  try {
    const data = await client.fetch<HeroData>(`*[_type == "home"][0]{
        title,
        description,
        "images": Images[]{
          "url": asset->url,
          alt
        },
        buttons[]{
          label,
          url,
          isActive
        }
      }`);

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// const getMapData = async (): Promise<MapData | null> => {
//   try {
//     const data = await client.fetch<Array<ImamType>>(`*[_type == "imam"]{
//       name,
//       profileImage{
//         alt,
//         "url": asset->url
//       },
//       description,
//       email,
//       phone,
//       country{
//         name,
//         latitude,
//         longitude
//       }
//     }`);

//     return { imams: data };
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// };

const getMapData = async (): Promise<MapData | null> => {
  try {
    const data = await client.fetch<Array<CountryType>>(`*[_type == "country"]{
        name,
        latitude,
        longitude
    }`);

    return { countries: data };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default async function Home() {
  const heroData = await getHeroData();
  const mapData = await getMapData();
  if (!mapData) return <></>;
  if (!heroData) return <></>;

  return (
    <div className="overflow-x-hidden">
      <HomeHero {...heroData} />
      <MapWrapper {...mapData} />
      <ContactForm />
    </div>
  );
}
