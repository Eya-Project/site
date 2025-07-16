import { ImamType } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const ImamCard: FC<ImamType> = ({ imamId, name, email, phone, profileImage, description, country, specials }) => {
  return (
    <Link href={`/woman-imam/${imamId}`}>
    <div className="border drop-shadow-md container flex flex-col md:flex-row overflow-hidden h-[300px] rounded-2xl md:w-[800px]">
      <div className="w-full md:w-1/2 overflow-hidden">
        <Image src={profileImage.url} alt={profileImage.alt} width={200} height={300} className="w-full h-full object-cover" />
      </div>
      <div className="p-[20px] flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <h6>{name}</h6>
          <div className="flex gap-4 text-gray-400">
            <p>{email}</p>
            <p>{phone}</p>
            <p>{country.name}</p>
          </div>
          <p>{description}</p>
          <p>{specials.join(", ")}</p>
        </div>
      </div>
    </div>
  </Link>
  )
}

export default ImamCard
