import Image from "next/image"
import { FC } from "react"

export interface HeroBannerData {
  img: string
  alt: string
  title: string
}

const HeroBanner: FC<HeroBannerData> = ({ img, alt, title }) => {
  return (
    <div className="w-full relative">
      <Image src={img} alt={alt} height={300} width={300} className="w-full h-[300px] brightness-50 object-center object-cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
      </div>
    </div>
  )
}

export default HeroBanner
