import React from "react";
import { ComboBox } from "./ComboBox";
import Link from "next/link";
import { Github } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full flex items-center justify-between px-8 border-b h-16 fixed z-10 top-0 bg-slate-100 sm:h-14">
      <ComboBox />
      <Link href={"https://github.com/cryptomafiaPB/yes-sports-api"}>
        <Github />
      </Link>
    </div>
  );
}
