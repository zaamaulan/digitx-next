"use client";

import { navLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "../molecules/navlink";
import { Button } from "../ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const handleMobileNav = () => {
    setOpen(!open);
  };

  return (
    <header className="_backdrop-blur-md _backdrop-filter sticky top-0 z-50 w-full border-b border-b-stone-900 bg-stone-950 py-6 max-lg:px-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={75}
            height={34}
            className="h-[28px] w-[39px] lg:h-[34px] lg:w-[75px]"
          />
        </Link>
        <nav>
          <ul
            className={cn(
              "flex gap-x-2 transition-all duration-300 ease-in-out max-lg:fixed max-lg:top-20 max-lg:w-full max-lg:flex-col max-lg:bg-stone-950 lg:items-center",
              open ? "max-lg:left-0" : "max-lg:-left-full",
            )}
          >
            <NavLink navLinks={navLinks} className="rounded-full" />
          </ul>
        </nav>
        <Button
          onClick={handleMobileNav}
          variant={"secondary"}
          className="size-[52px] rounded-full p-0 md:hidden"
        >
          <Image src={"/menu.svg"} alt="menu-icon" width={28} height={28} />
        </Button>
      </div>
    </header>
  );
};
