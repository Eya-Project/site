import { client } from "@/sanity/lib/client";
import ComputerNavBar from "./ComputerNavBar";
import MobileNavBar from "./MobileNavBar";

export interface NavDataType {
  logo: {
    url: string;
    alt: string;
  };
  title: string;
  pages: {
    label: string;
    url: string;
    isActive: boolean;
  }[];
}

export const getData = async (): Promise<NavDataType | null> => {
  try {
    const data = await client.fetch<NavDataType>(`*[_type == "nav"][0]{
      logo {
        "url": asset->url,
        alt
      },
      title,
      pages
    }`);

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const Navbar = async () => {
  const data = await getData();
  if (!data) return <></>;

  return (
    <>
      <div className="hidden lg:block">
        <ComputerNavBar {...data} />
      </div>
      <div className="block lg:hidden">
        <MobileNavBar {...data} />
      </div>
    </>
  );
};

export default Navbar;
