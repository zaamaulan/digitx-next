import { HomeFeature } from "@/components/organisms/feature";
import { HomeHero } from "@/components/organisms/hero";
import { HomeProject } from "@/components/organisms/project";
import { HomeService } from "@/components/organisms/service";
import { HomeTestimonial } from "@/components/organisms/testimonial";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-y-[150px]">
      <HomeHero />
      <HomeFeature />
      <HomeService />
      <HomeProject />
      <HomeTestimonial />
    </div>
  );
};

export default HomePage;
