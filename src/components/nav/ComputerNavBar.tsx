import Image from "next/image";
import { FC } from "react";
import { NavDataType } from "./Navbar";
import Link from "next/link";
import { Button } from "../ui/button";

const ComputerNavBar: FC<NavDataType> = ({ logo, pages, title }) => {
  return (
    <nav className="w-full border-b drop-shadow-md h-[40px] flex items-center justify-between bg-white py-[30px] px-[20px]">
      <div className="flex items-center gap-4">
        <Image src={logo.url} alt={logo.alt} width={40} height={40} />
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      </div>
      <div className="flex gap-4">
        {pages
          .filter((p) => p.isActive)
          .map((page) => (
            <Link key={page.label} href={page.url}>
              {page.label}
            </Link>
          ))}
      </div>
      <Button variant={"outline"} asChild>
        <Link href={"/#contact"} className="text-2xl font-bold">
          Contact Us
        </Link>
      </Button>
    </nav>
  );
};

export default ComputerNavBar;
