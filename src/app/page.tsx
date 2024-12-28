import { HomeCTA } from "@/components/organisms/cta";
import { HomeFAQ } from "@/components/organisms/faq";
import { HomeFeature } from "@/components/organisms/feature";
import { HomeHero } from "@/components/organisms/hero";
import { HomePartner } from "@/components/organisms/partner";
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
      <HomeFAQ />
      <HomePartner />
      <HomeCTA />
    </div>
  );
};

export default HomePage;
