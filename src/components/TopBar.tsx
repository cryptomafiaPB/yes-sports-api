import React from "react";
import { ComboBox } from "./ComboBox";
import Link from "next/link";
import { Github } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full  flex items-center justify-between px-8 border-b h-16 fixed z-10 top-0 bg-zinc-100 sm:h-20">
      <ComboBox />
      <p className="pl-6 leading-5 font-mono text-sm [&:not(:first-child)] hidden sm:ml-52 lg:block  md:ml-56 pr-16">
        Note : All the data belongs to cricbuzz.com. Please do not use it for
        commercial purposes. This project is only for educational purposes.
      </p>
      <Link href={"https://github.com/cryptomafiaPB/yes-sports-api"}>
        <Github />
      </Link>
    </div>
  );
}
