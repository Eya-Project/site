"use client"

import { FC, useState, useMemo } from "react"
import { Input } from "../ui/input"
import EventCard, { EventType } from "./EventCard"

const EventList: FC<{ events: Array<EventType> }> = ({ events }) => {
  const [search, setSearch] = useState("")

  const sortedEvents = useMemo(() => {
    if (!search) return events;

    const searchLower = search.toLowerCase();
    const startsWithMatches: Array<EventType> = [];
    const includesMatches: Array<EventType> = [];

    events.forEach(event => {
      const eventLower = event.name.toLowerCase();
      if (eventLower.startsWith(searchLower)) {
        startsWithMatches.push(event);
      } else if (eventLower.includes(searchLower)) {
        includesMatches.push(event);
      }
    });

    return [...startsWithMatches, ...includesMatches];
  }, [events, search]);


  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center container pb-[20px]">
      <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter the name of the event" className="w-full md:w-[850px]" />
      {sortedEvents.map((event, i) => <EventCard key={i} {...event} />)}
    </div>
  )
}

export default EventList
