import Image from "next/image";
import React from "react";

const partners = [
  {
    name: "ABC Tech Solutions",
    description:
      "A leading technology firm that trusted DigitX to develop their responsive website, showcasing their cutting-edge products and services.",
  },
  {
    name: "GreenEarth Eco Store",
    description:
      "DigitX collaborated with GreenEarth Eco Store to create an engaging e-commerce platform that promotes sustainable living and eco-friendly products.",
  },
  {
    name: "HealthTech Innovations",
    description:
      "DigitX developed a user-centric mobile app for HealthTech Innovations, helping them revolutionize the way people track and manage their health.",
  },
  {
    name: "GlobalTech Solutions",
    description:
      "GlobalTech Solutions partnered with DigitX for a website redesign, resulting in a modern interface that elevates their online presence.",
  },
  {
    name: "TechGuru Inc.",
    description:
      "DigitX's digital marketing strategies boosted TechGuru Inc.'s online visibility and customer engagement, driving significant business growth.",
  },
  {
    name: "ArtScape Gallery",
    description:
      "DigitX brought ArtScape Gallery's artistic vision to life with a visually stunning website, showcasing the work of talented artists.",
  },
];

export const HomePartner = () => {
  return (
    <section className="container mx-auto flex flex-col gap-y-[100px]">
      <div className="space-y-5">
        <h2 className="text-center text-5xl font-semibold leading-tight text-white">
          <span className="text-stone-500">Our </span>
          Partners and Clients
        </h2>
        <p className="mx-auto max-w-screen-xl text-center text-lg text-stone-500">
          We are grateful for the opportunity to work with esteemed partners and
          clients. Our strong relationships are a testament to our dedication
          and expertise in the digital realm.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[30px]">
        {partners.map((item, index) => (
          <div
            key={index}
            className="rounded-[20px] border border-neutral-900 px-[50px] py-[80px] flex flex-col gap-y-[60px]"
          >
            <div className="flex items-center justify-center gap-x-5">
              <Image
                src={"/partners/partner-1.svg"}
                alt="partner-1"
                width={138}
                height={138}
              />
              <Image src={"/plus.svg"} alt="plus-icon" width={40} height={40} />
              <Image
                src={`/partners/partner-${index + 2}.svg`}
                alt={`partner-${index + 2}`}
                width={138}
                height={138}
              />
            </div>
            <div className="space-y-5">
              <p className="font-semibold text-xl text-white text-center">{item.name}</p>
              <p className="text-stone-500 text-lg text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
