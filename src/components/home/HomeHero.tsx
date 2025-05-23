"use client";
import { FC } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { HeroData } from "@/app/(main)/page";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Autoplay from "embla-carousel-autoplay";

const HomeHero: FC<HeroData> = ({ images, buttons, description, title }) => {
  return (
    <div className="w-full min-h-[70vh] flex justify-center-safe items-center-safe relative">
      <Carousel
        opts={{
          loop: true,
          duration: 25,
          active: true,
          align: "start",
        }}
        className="w-full h-[70vh] m-0 p-0"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="w-full h-[70vh] m-0 p-0">
          {images.map((image, index) => (
            <CarouselItem className="w-full h-[70vh] m-0 p-0" key={index}>
              <Image
                src={image.url}
                alt={image.alt}
                width={500}
                height={500}
                className="min-h-full min-w-full object-cover brightness-50"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="mt-4 text-lg">{description}</p>
          <div className="mt-6 flex justify-center">
            {buttons.map(
              (button, index) =>
                button.isActive && (
                  <Button key={index} className="mx-2 bg-blue-500">
                    <Link key={index} href={button.url}>
                      {button.label}
                    </Link>
                  </Button>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
