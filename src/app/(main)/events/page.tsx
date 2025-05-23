import { EventType } from "@/components/event/EventCard";
import EventList from "@/components/event/EventList";
import HeroBanner from "@/components/HeroBanner";
import { client } from "@/sanity/lib/client";
import { getHeroData } from "@/utils";

const getEventData = async (): Promise<Array<EventType> | null> => {
  try {
    const data = await client.fetch<Array<EventType>>(`*[_type == "event"] {
        cover {
          "url": asset->url,
          alt
        },
        name,
        description,
        location
    }`)

    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

const page = async () => {
  const heroData = await getHeroData("Events")
  const eventData = await getEventData()
  if (!eventData) return <></>
  if (!heroData) return <></>

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <HeroBanner {...heroData} />
      <EventList events={eventData} />
    </div>
  )
};

export default page;
