import React from "react"
import { NavLink } from "../molecules/navlink"
import { navLinks } from "@/lib/constants"
import Image from "next/image"

export const Navigation = () => {
  return (
    <header className="backdrop-filter backdrop-blur-md bg-stone-950/20 border-b py-6 border-b-stone-900 fixed top-0 w-full z-50">
      <div className="flex justify-between container mx-auto">
        <Image src={"/logo.svg"} alt="logo" width={75} height={34} />
        <nav>
          <ul className="flex items-center gap-x-2">
            <NavLink navLinks={navLinks} className="rounded-full" />
          </ul>
        </nav>
      </div>
    </header>
  )
}
