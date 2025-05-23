import Image from "next/image"
import { FC } from "react"

export interface EventType {
  cover: {
    url: string
    alt: string
  }
  name: string
  phone?: string
  description: string
  location: string
}

const EventCard: FC<EventType> = ({ name, phone, cover, description, location }) => {
  return (
    <div className="border drop-shadow-md container flex flex-col md:flex-row overflow-hidden h-[300px] rounded-2xl md:w-[800px]">
      <div className="w-full md:w-1/2 overflow-hidden">
        <Image src={cover.url} alt={cover.alt} width={200} height={300} className="w-full h-full object-cover" />
      </div>
      <div className="p-[20px] flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <h6>{name}</h6>
          <div className="flex gap-4 text-gray-400">
            <p>{location}</p>
            <p>{phone}</p>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default EventCard
