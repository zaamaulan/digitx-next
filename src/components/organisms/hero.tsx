import Image from "next/image"
import React from "react"
import { Button } from "../ui/button"

export const HomeHero = () => {
  return (
    <section className="grid grid-cols-2 container mx-auto h-screen">
      <div className="space-y-16 place-self-center">
        <div className="space-y-5">
          <h1 className="text-[3.625rem] text-white font-semibold leading-tight">
            Digital Solutions{" "}
            <span className="text-stone-500">That Drive Success</span>
          </h1>
          <p className="text-stone-500 text-lg">
            At DigitX, we believe in the transformative power of digital
            solutions. Our team of experts is dedicated to helping businesses
            like yours thrive in the fast-paced digital landscape. From
            captivating web design to data-driven marketing strategies, we are
            committed to delivering results that exceed expectations.
          </p>
        </div>
        <div className="space-y-5">
          <p className="text-white text-xl">
            Unlock Your Digital Potential Today
          </p>
          <div className="flex items-center gap-x-5">
            <Button className="rounded-full">Get Started</Button>
            <Button variant={"secondary"} className="rounded-full">
              Free Consultation
            </Button>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center flex-col">
        <Image src={"/hero.png"} alt="hero" width={603} height={570} />
        <div className="absolute flex translate-y-[17rem] w-full flex-grow">
          {Array.from({ length: 16 }).map((_, index) => (
            <span key={index} className="backdrop-blur-xl h-80 w-[78px] flex-grow bg-stone-950/20"></span>
          ))}
        </div>
      </div>
    </section>
  )
}
