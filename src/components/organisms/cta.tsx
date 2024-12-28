import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export const HomeCTA = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col gap-y-20 rounded-[20px] border border-neutral-900 px-[150px] pt-[130px]">
        <div className="flex flex-col gap-y-[60px]">
          <div className="space-y-5">
            <h2 className="text-center text-5xl font-semibold text-white">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-center text-lg text-stone-500">
              Take the first step towards digital success with DigitX by your
              side. Our team of experts is eager to craft tailored solutions
              that drive growth for your business. Whether you need a stunning
              website, a powerful mobile app, or a data-driven marketing
              campaign, {"we've"} got you covered. {"Let's"} embark on this
              transformative journey together.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-5">
            <p className="text-center text-xl text-white">
              Unlock Your Digital Potential Today
            </p>
            <div className="flex items-center justify-center gap-x-5">
              <Button className="rounded-full">Get Started</Button>
              <Button variant={"secondary"} className="rounded-full">
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <Image
            src={"/footer.png"}
            alt="footer"
            width={834}
            height={409}
            draggable={false}
          />
          <div className="absolute flex w-full flex-grow translate-y-[9.5rem]">
            {Array.from({ length: 16 }).map((_, index) => (
              <span
                key={index}
                className="h-80 w-[78px] flex-grow bg-stone-950/20 backdrop-blur-xl"
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
