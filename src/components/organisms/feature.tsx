import Image from "next/image";
import React, { Fragment } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

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
    <section className="container mx-auto flex flex-col gap-y-[100px]">
      <div className="space-y-5">
        <h2 className="text-center text-5xl font-semibold leading-tight text-white">
          Reasons to Choose DigitX for <br />
          <span className="text-stone-500">Your Digital Journey</span>
        </h2>
        <p className="mx-auto max-w-screen-xl text-center text-lg text-stone-500">
          Partnering with DigitX offers a multitude of advantages. Experience
          increased brand visibility, improved customer engagement, and higher
          ROI. Our tailored solutions are designed to meet your unique business
          needs, ensuring lasting success.
        </p>
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-[50px]">
        {features.map((item, index) => (
          <Fragment key={index}>
            <div className="flex flex-col gap-y-[50px]">
              <Image
                src={`/features/feature-${index + 1}.svg`}
                alt={`feature-icon-${index + 1}`}
                width={92}
                height={92}
                className="mx-auto"
                draggable={false}
              />
              <div className="space-y-5">
                <h3 className="text-center text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-center text-lg text-stone-500">
                  {item.description}
                </p>
              </div>
              <Button
                variant={"outline"}
                className="mx-auto w-fit rounded-full text-lg font-normal"
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
              <div className="col-span-5">
                <Separator orientation="horizontal" className="bg-stone-900" />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};
