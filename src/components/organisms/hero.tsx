import Image from "next/image";
import { Button } from "../ui/button";

export const HomeHero = () => {
  return (
    <section className="container mx-auto flex lg:h-screen flex-col-reverse max-lg:gap-y-20 lg:grid lg:grid-cols-2">
      <div className="space-y-[50px] lg:space-y-16 place-self-center">
        <div className="space-y-3.5 lg:space-y-5">
          <h1 className="text-[34px] font-semibold leading-tight text-white max-lg:text-center lg:text-[58px]">
            Digital Solutions{" "}
            <span className="text-stone-500">That Drive Success</span>
          </h1>
          <p className="text-sm text-stone-500 max-lg:text-center lg:text-lg">
            At DigitX, we believe in the transformative power of digital
            solutions. Our team of experts is dedicated to helping businesses
            like yours thrive in the fast-paced digital landscape. From
            captivating web design to data-driven marketing strategies, we are
            committed to delivering results that exceed expectations.
          </p>
        </div>
        <div className="space-y-3.5 lg:space-y-5 max-lg:flex max-lg:flex-col justify-center">
          <p className="text-sm text-white max-lg:text-center lg:text-xl">
            Unlock Your Digital Potential Today
          </p>
          <div className="flex items-center gap-x-2 lg:gap-x-5 max-lg:mx-auto">
            <Button className="rounded-full">Get Started</Button>
            <Button variant={"secondary"} className="rounded-full">
              Free Consultation
            </Button>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <Image src={"/hero.png"} alt="hero" width={603} height={570} />
        <div className="absolute flex w-full flex-grow translate-y-[17rem]">
          {Array.from({ length: 16 }).map((_, index) => (
            <span
              key={index}
              className="lg:h-80 w-[78px] flex-grow bg-stone-950/20 backdrop-blur-xl"
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};
