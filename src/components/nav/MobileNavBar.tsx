"use client";
import { FC, useState } from "react";
import { NavDataType } from "./Navbar";
import Image from "next/image";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";

const MobileNavBar: FC<NavDataType> = ({ logo, pages, title }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center p-[20px] border-b drop-shadow-md bg-white">
      <div className="flex items-center gap-2">
        <Image src={logo.url} alt={logo.alt} width={30} height={30} />
        <h1 className="text-lg font-bold text-gray-800">{title}</h1>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger onClick={() => setOpen(true)}>
          <Menu />
        </SheetTrigger>
        <SheetContent className="p-[20px]">
          <SheetTitle>Menu</SheetTitle>
          <div className="flex flex-col gap-4">
            {pages
              .filter((p) => p.isActive)
              .map((page) => (
                <Link
                  key={page.label}
                  href={page.url}
                  onClick={() => setOpen(false)}
                >
                  {page.label}
                </Link>
              ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavBar;
