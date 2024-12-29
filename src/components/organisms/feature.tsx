import Image from "next/image";
import { Fragment } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

// import feature1 from "/public/features/feature-1.svg";
// import feature2 from "/public/features/feature-2.svg";
// import feature3 from "/public/features/feature-3.svg";
// import feature4 from "/public/features/feature-4.svg";
// import feature5 from "/public/features/feature-5.svg";
// import feature6 from "/public/features/feature-6.svg";

const features = [
  {
    title: "Expertise That Drives Results",
    description:
      "Our team of seasoned professionals brings years of experience and expertise to the table.",
  },
  {
    title: "Tailored Business Solutions",
    description:
      "We understand that every business is unique. That's why our solutions are customized.",
  },
  {
    title: "Cutting-Edge Web Design",
    description:
      "Leave a lasting impression on your audience with our top-notch web design services.",
  },
  {
    title: "Mobile-First Approach",
    description:
      "In today's mobile-centric world, we prioritize mobile-first design to ensure your website performs seamlessly.",
  },
  {
    title: "Marketing Strategies",
    description:
      "Our data-driven marketing strategies allow us to target the right audience with precision.",
  },
  {
    title: "Search Engine Optimization (SEO) Mastery",
    description: "Boost your online visibility with our expert SEO techniques.",
  },
];

export const HomeFeature = () => {
  return (
    <section className="container mx-auto flex flex-col gap-y-[50px] lg:gap-y-[80px]">
      <div className="space-y-3.5 lg:space-y-5">
        <h2 className="text-center text-2xl font-semibold leading-tight text-white lg:text-5xl">
          Reasons to Choose DigitX for <br />
          <span className="text-stone-500">Your Digital Journey</span>
        </h2>
        <p className="mx-auto max-w-screen-xl text-center text-sm text-stone-500 lg:text-lg">
          Partnering with DigitX offers a multitude of advantages. Experience
          increased brand visibility, improved customer engagement, and higher
          ROI. Our tailored solutions are designed to meet your unique business
          needs, ensuring lasting success.
        </p>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-[50px]">
        {features.map((item, index) => (
          <Fragment key={index}>
            <div className="flex flex-col gap-y-6 lg:gap-y-[50px]">
              <Image
                src={`/features/feature-${index + 1}.svg`}
                alt={`feature-icon-${index + 1}`}
                width={92}
                height={92}
                className="mx-auto size-[60px] lg:size-[92px]"
                draggable={false}
              />
              <div className="space-y-3.5 lg:space-y-5">
                <h3 className="text-center text-lg font-semibold text-white lg:text-2xl lg:text-[30px]">
                  {item.title}
                </h3>
                <p className="text-center text-sm text-stone-500 lg:text-lg">
                  {item.description}
                </p>
              </div>
              <Button
                variant={"outline"}
                className="mx-auto w-fit rounded-full text-sm font-normal lg:text-lg"
              >
                Learn More
              </Button>
            </div>

            {/* col separator */}
            {index % 3 !== 2 && (
              <Separator orientation="vertical" className="bg-stone-900" />
            )}

            {/* row separator */}
            {index % 3 === 2 && index !== features.length - 1 && (
              <Separator
                orientation="horizontal"
                className={cn("bg-stone-900 max-lg:hidden lg:col-span-5")}
              />
            )}

            {index !== features.length - 1 && (
              <Separator className="bg-stone-900 max-xl:my-[40px] lg:hidden" />
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};
