"use client"

import { TNavLink } from "@/lib/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

interface NavLinkProps {
  className?: string
  navLinks: TNavLink
}

export const NavLink = ({ className, navLinks }: NavLinkProps) => {
  const pathname = usePathname()

  return (
    <>
      {navLinks.map((item) => {
        const active = item.href === "/" ? pathname === '/' : pathname.startsWith(item.href)
        return (
          <li key={item.label}>
            <Link href={item.href}>
              <Button
                variant={"ghost"}
                className={cn(
                  "hover:bg-zinc-900/90 text-white hover:text-white text-lg py-4 px-6 h-fit",
                  className,
                  active && "bg-zinc-900"
                )}
              >
                {item.label}
              </Button>
            </Link>
          </li>
        )
      })}
    </>
  )
}
