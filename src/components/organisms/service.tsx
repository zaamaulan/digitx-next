import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const services = [
  {
    title: "Web Development",
    description:
      "Unlock Your Online Potential. In today's digital age, a powerful web presence is essential for any business. At DigitX, our web development services empower you to stand out in the crowded online landscape. We create responsive and dynamic websites tailored to your unique needs, ensuring seamless user experiences across all devices. From e-commerce platforms to interactive web applications, our expert developers bring your vision to life, making your online journey a resounding success.",
  },
  {
    title: "Mobile App Development",
    description:
      "Embrace Mobility with Confidence. Mobile devices have revolutionized the way we interact with the world. Our mobile app development services enable you to harness this mobility to your advantage. We design and build intuitive and high-performance mobile applications that captivate your audience and boost engagement. Whether it's iOS, Android, or cross-platform development, we ensure that your app delivers a seamless experience, leaving a lasting impression on your users.",
  },
  {
    title: "Web Design",
    description:
      "Elevate Your Brand Aesthetics. Your website's design is a reflection of your brand's identity and values. DigitX's web design services focus on creating visually striking and user-friendly interfaces that leave a lasting impact. Our creative team blends aesthetics with functionality, delivering a captivating user experience that keeps visitors coming back for more. Let us transform your online presence into an immersive journey that showcases your brand's true essence.",
  },
  {
    title: "Digital Marketing",
    description:
      "Drive Your Business Forward. In the vast digital landscape, standing out from the competition is crucial. Our digital marketing services help you rise above the noise and connect with your target audience effectively. From search engine optimization (SEO) to social media marketing and pay-per-click (PPC) campaigns, our data-driven strategies ensure that your message reaches the right people at the right time.",
  },
];

export const HomeService = () => {
  return (
    <section className="container mx-auto flex flex-col gap-y-[100px]">
      <div className="space-y-5">
        <h2 className="text-center text-5xl font-semibold leading-tight text-white">
          <span className="text-stone-500">Our </span>
          Service
        </h2>
        <p className="mx-auto max-w-screen-xl text-center text-lg text-stone-500">
          Our comprehensive range of services includes web design, mobile app
          development, SEO, social media marketing, and more. Whether {"you're"}{" "}
          a startup or an established enterprise, our experts will craft
          solutions that drive results.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[30px]">
        {services.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-[50px] rounded-[20px] border border-neutral-800 p-[80px]"
          >
            <Image
              src={`/services/service-${index + 1}.svg`}
              alt={`service-icon-${index + 1}`}
              width={172}
              height={172}
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
              variant={"secondary"}
              className="mx-auto w-fit rounded-full"
            >
              Learn More
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};
