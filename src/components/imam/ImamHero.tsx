import Image from "next/image";
import { FC } from "react";

interface ImamHeroProps {
  background: { img: string; alt: string };
  profile: { img: string; alt: string };
  name: string;
  phone?: string;
  email?: string;
  description: string;
  country: string;
}

export const ImamHero: FC<ImamHeroProps> = ({
  background,
  name,
  description,
  email,
  phone,
  country,
}) => {
  return (
    <div className="w-full relative">
      <Image
        src={background.img}
        alt={background.alt}
        height={300}
        width={300}
        className="w-full h-[300px] brightness-50 object-center object-cover blur-[2px]"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white border p-4 rounded-lg border-black bg-black/50">
        <div className="flex w-[300px]">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white">
            <Image
              src={background.img}
              alt={background.alt}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-4">
            <h1 className="text-2xl md:text-3xl font-bold">{name}</h1>
            <p className="text-xs text-gray-400">{`${email || ""} ${email && phone ? "|" : ""} ${phone != null ? phone : ""}`}</p>
            <p className="text-sm mt-2">{description}</p>
            <p className="text-sm mt-2 text-gray-400">{country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
