import React from "react";
import { NavLink } from "../molecules/navlink";
import { navLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export const Navigation = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-b-stone-900 bg-stone-950/20 py-6 backdrop-blur-md backdrop-filter">
      <div className="container mx-auto flex justify-between">
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="logo" width={75} height={34} />
        </Link>
        <nav>
          <ul className="flex items-center gap-x-2">
            <NavLink navLinks={navLinks} className="rounded-full" />
          </ul>
        </nav>
      </div>
    </header>
  );
};
