"use client"
import { ImamType } from "@/types"
import { FC, useState, useMemo } from "react"
import ImamCard from "./ImamCard"
import { Input } from "../ui/input"

const ImamList: FC<{ imams: Array<ImamType> }> = ({ imams }) => {
  const [search, setSearch] = useState("")

  const filteredImams = useMemo(() => {
    // Start with all imams
    let result = imams;

    // Filter by name if search query exists
    if (search) {
      const nameSearchLower = search.toLowerCase();
      const startsWithMatches: Array<ImamType> = [];
      const includesMatches: Array<ImamType> = [];

      // Categorize imams by name match type
      imams.forEach(imam => {
        const imamNameLower = imam.name.toLowerCase();
        if (imamNameLower.startsWith(nameSearchLower)) {
          startsWithMatches.push(imam);
        } else if (imamNameLower.includes(nameSearchLower)) {
          includesMatches.push(imam);
        }
      });

      // Combine results with priority order
      result = [...startsWithMatches, ...includesMatches];
    }

    // Apply specialty filter if selected
    // if (specialtyFilter && specialtyFilter !== "all") {
    //   result = result.filter(imam => 
    //     imam.Speciality && imam.Speciality.includes(specialtyFilter)
    //   );
    // }

    return result;
  }, [imams, search]);


  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center container pb-[20px]">
      <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter the name of the imam" className="w-full md:w-[850px]" />
      {filteredImams.map((imam, i) => <ImamCard key={i} {...imam} />)}
    </div>
  )
}

export default ImamList
