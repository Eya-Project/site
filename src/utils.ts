import { client } from "@/sanity/lib/client";
import { HeroBannerData } from "./components/HeroBanner";
import { ImamType } from "./types";

export const getHeroData = async (type: "Find-Woman-Imam" | "Education-Hub" | "Events"): Promise<HeroBannerData | null> => {
  try {
    const data = await client.fetch<HeroBannerData>(
      `*[_type == "page" && type == "${type}"][0] {
        "img": image.asset->url,
        "alt": image.alt,
        title
      }`
    )

    return data
  } catch (error) {
    console.log(error)
    return null
  }
}



export const getImams = async (): Promise<Array<ImamType> | null> => {
  try {
    const data = await client.fetch<Array<ImamType>>(`*[_type == "imam"]{
      name,
      profileImage{
        alt,
        "url": asset->url
      },
      description,
      email,
      phone,
      country -> {
        name,
        latitude,
        longitude
      },
    "specials": Speciality
    }`)

    return data
  } catch (error) {
    console.log(error)
    return null
  }
}
