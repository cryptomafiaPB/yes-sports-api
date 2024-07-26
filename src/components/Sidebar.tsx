import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Switch } from "./ui/switch";
import { ScrollArea } from "./ui/scroll-area";

export default function Sidebar() {
  return (
    <div className="bg-white border-r  fixed z-20 overflow-x-hidden left-0 top-0 hidden sm:flex gap-2 flex-col sm:w-52 h-screen md:w-56">
      <Link
        href={"/"}
        className="logo p-4 pb-0 flex justify-between items-center"
      >
        <Image
          src={"/Logo.png"}
          alt="logo"
          width={130}
          height={130}
          className="block"
        />
        <Switch className="bg-black-500" />
      </Link>
      <ScrollArea className="rounded-md w-full flex items-center justify-center">
        <div className="p-4 flex flex-col">
          <Link
            href={"#introduction"}
            className="text-lg mb-0.5 font-medium pl-6 hover:bg-slate-100  hover:text-violet-700 transition-all p-2 rounded-md"
          >
            Introduction
          </Link>
          <Link
            href={"#authentication"}
            className="text-lg my-0.5 font-medium pl-6 hover:bg-slate-100  hover:text-violet-700 transition-all p-2 rounded-md"
          >
            Authentication
          </Link>
          <Link
            href={"#endpoints"}
            className="text-lg my-0.5 font-medium  pl-6 hover:bg-slate-100  hover:text-violet-700 transition-all p-2 rounded-md"
          >
            Endpoints
          </Link>
          <Link
            href={"#sports"}
            className="text-lg my-0.5 font-medium pl-10 hover:bg-slate-100  hover:text-violet-700 transition-all p-2 rounded-md"
          >
            Sports
          </Link>
          <Link
            href={"#teams"}
            className="text-lg my-0.5 font-medium pl-10 hover:bg-slate-100  hover:text-violet-700 transition-all p-2 rounded-md"
          >
            Teams
          </Link>
          <Link
            href={"#players"}
            className="text-lg my-0.5 font-medium pl-10 hover:bg-slate-100  hover:text-violet-700 transition-all p-2 rounded-md"
          >
            Players
          </Link>
          <Link
            href={"#errorhandling"}
            className="text-lg my-0.5 font-medium pl-6 hover:bg-slate-100  hover:text-violet-700 transition-all p-2 rounded-md"
          >
            Error Handling
          </Link>
          <Link
            href={"#examples"}
            className="text-lg my-0.5 font-medium pl-6 hover:bg-slate-100  hover:text-violet-700 transition-all p-2 rounded-md"
          >
            Example usage
          </Link>
          <Link
            href={"#contact"}
            className="text-lg my-0.5 font-medium pl-6 hover:bg-slate-100  hover:text-violet-700 transition-all p-2 rounded-md"
          >
            Contact
          </Link>
        </div>
      </ScrollArea>
    </div>
  );
}
