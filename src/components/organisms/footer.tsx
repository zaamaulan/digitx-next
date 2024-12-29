import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const footers = [
  {
    category: "Home",
    links: [
      {
        name: "Benefits",
        href: "#",
      },
      {
        name: "Our Testimonials",
        href: "#",
      },
      {
        name: "Partners",
        href: "#",
      },
    ],
  },
  {
    category: "Services",
    links: [
      { name: "Web Design", href: "/services/web-design" },
      { name: "Website Development", href: "/services/website-development" },
      { name: "App Development", href: "/services/app-development" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
    ],
  },
  {
    category: "Projects",
    links: [
      { name: "ABC Tech Solutions", href: "/partners/abc-tech-solutions" },
      { name: "GreenEarth Eco Store", href: "/partners/greenearth-eco-store" },
      {
        name: "HealthTech Innovations",
        href: "/partners/healthtech-innovations",
      },
      { name: "GlobalTech Solutions", href: "/partners/globaltech-solutions" },
      { name: "TechGuru Inc.", href: "/partners/techguru-inc" },
    ],
  },
  {
    category: "About Us",
    links: [
      { name: "Our Team", href: "#" },
      { name: "Achievements", href: "#" },
      { name: "Awards", href: "#" },
    ],
  },
  {
    category: "Careers",
    links: [
      { name: "Job Openings", href: "/careers/job-openings" },
      { name: "Benefits & Perks", href: "/careers/benefits-perks" },
      { name: "Employee Referral", href: "/careers/employee-referral" },
    ],
  },
  {
    category: "Blogs",
    links: [{ name: "Our Blogs", href: "/blog" }],
  },
];

export const Footer = () => {
  return (
    <footer className="container mx-auto mt-[150px] px-4">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="logo" width={75} height={54} />
        </Link>
        <div className="flex items-center gap-x-5 gap-y-2.5 max-lg:flex-col">
          <p className="max-lg:text-center max-lg:text-sm">
            Follow Us On Social Media
          </p>
          <div className="flex items-center gap-x-3.5">
            <Button
              variant={"secondary"}
              size={"icon"}
              className="size-14 rounded-full lg:size-16"
            >
              <Link href={"#"}>
                <Image
                  src={"/linkedin.svg"}
                  alt="linkedin-icon"
                  width={24}
                  height={24}
                />
              </Link>
            </Button>
            <Button
              variant={"secondary"}
              size={"icon"}
              className="size-14 rounded-full lg:size-16"
            >
              <Link href={"#"}>
                <Image
                  src={"/instagram.svg"}
                  alt="instagram-icon"
                  width={24}
                  height={24}
                />
              </Link>
            </Button>
            <Button
              variant={"secondary"}
              size={"icon"}
              className="size-14 rounded-full lg:size-16"
            >
              <Link href={"#"}>
                <Image
                  src={"/twitter.svg"}
                  alt="twitter-icon"
                  width={24}
                  height={24}
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Separator className="my-6 bg-neutral-900 lg:my-[30px]" />
      <div className="grid grid-cols-2 flex-wrap justify-between py-20 max-lg:gap-[30px] lg:flex">
        {footers.map((item, index) => (
          <div key={index} className="space-y-6">
            <p className="font-semibold text-white lg:text-lg">
              {item.category}
            </p>
            <ul className="space-y-3.5">
              {item.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-500 transition-colors duration-150 ease-in-out hover:text-white lg:text-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Separator className="my-6 bg-neutral-900 lg:my-[30px]" />
      <div className="flex items-center justify-between gap-3.5 max-lg:flex-col pb-6 lg:pb-[30px] ">
        <p className="font-light text-stone-500">
          @2023 Digitax. All Rights Reserved.
        </p>
        <p className="font-light text-stone-500">Version 1.0</p>
        <div className="flex flex-wrap items-center gap-x-5 max-lg:justify-center">
          <p>
            <Link
              href={"#"}
              className="font-light text-stone-500 hover:text-white max-lg:text-sm"
            >
              Privacy Policy
            </Link>
          </p>
          <p>
            <Link
              href={"#"}
              className="font-light text-stone-500 hover:text-white max-lg:text-sm"
            >
              Terms & Conditions
            </Link>
          </p>
          <p>
            <Link
              href={"#"}
              className="font-light text-stone-500 hover:text-white max-lg:text-sm"
            >
              Cookie Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
