import Image from "next/image";
import { Avatar, AvatarImage } from "../ui/avatar";

const testimonials = [
  {
    name: "Sarah Thompson",
    position: "CEO of BlueBloom Fashion",
    feedback:
      "DigitX turned our business around! Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
  },
  {
    name: "Mark Roberts",
    position: "Founder of GreenEarth Eco Store",
    feedback:
      "Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
  },
  {
    name: "Lisa Williams",
    position: "Head of Product at HealthTech Innovations",
    feedback:
      "The mobile app DigitX developed for us exceeded our expectations. Its user-friendly interface and seamless functionality have earned us rave reviews from our users.",
  },
  {
    name: "Michael Johnson",
    position: "Marketing Manager at GlobalTech Solutions",
    feedback:
      "DigitX transformed our outdated website into a modern, responsive platform. Their attention to detail and ability to understand our vision made the entire process smooth and hassle-free.",
  },
];

export const HomeTestimonial = () => {
  return (
    <section className="flex flex-col gap-y-[50px] lg:gap-y-[80px]">
      <div className="container mx-auto space-y-3.5 lg:space-y-5">
        <h2 className="text-center text-2xl font-semibold leading-tight text-white lg:text-5xl">
          <span className="text-stone-500">Our </span>
          Testimonials
        </h2>
        <p className="mx-auto max-w-screen-xl text-center text-sm text-stone-500 lg:text-lg">
          {"Don't"} just take our word for it; hear what our satisfied clients
          have to say about their experience with DigitX. We take pride in
          building lasting relationships and delivering exceptional results.{" "}
        </p>
      </div>
      <div className="flex gap-x-[30px] overflow-x-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex min-w-[32rem] flex-1 flex-col gap-y-10"
          >
            <div className="relative flex h-full flex-col gap-y-[30px] rounded-[20px] border border-neutral-800 p-[30px] lg:p-[40px]">
              <div className="grid h-14 w-14 place-items-center rounded-lg border border-neutral-800 bg-zinc-900">
                <Image
                  src={"/twitter.svg"}
                  alt="twitter-icon"
                  width={30}
                  height={30}
                />
              </div>
              <p className="text-sm text-white max-lg:text-center lg:text-lg">
                {item.feedback}
              </p>
              {/* <span className="triangle absolute bottom-0 left-[20px]"></span> */}
            </div>

            <div className="flex items-center gap-x-3.5 max-lg:flex-col">
              <Avatar className="size-[60px] lg:size-[70px]">
                <AvatarImage
                  src={`/avatars/avatar-${index + 1}.png`}
                  alt={`avatar-${index + 1}`}
                />
              </Avatar>
              <div className="space-y-0.5">
                <p className="text-lg text-white max-lg:text-center">
                  {item.name}
                </p>
                <p className="text-zinc-500 max-lg:text-center lg:text-lg">
                  {item.position}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
