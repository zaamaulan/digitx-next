import Image from "next/image";
import { Button } from "../ui/button";

const projects = [
  {
    title: "Innovative E-commerce Platform",
    description:
      "Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.",
    category: "Web Development",
    date: "January 2022",
  },
  {
    title: "Mobile App for Enhanced Fitness",
    description:
      "Our fitness app helps users stay fit and motivated with personalized workout plans and progress tracking. Its user-friendly design and comprehensive features make staying healthy an enjoyable experience.",
    category: "Mobile App Development",
    date: "March 2022",
  },
  {
    title: "Modern Corporate Website",
    description:
      "Check out our sleek and modern corporate website that showcases the client's brand and services. Its responsive design ensures a consistent experience across devices.",
    category: "Web Design",
    date: "April 2022",
  },
  {
    title: "Digital Marketing Success Story",
    description:
      "Discover how our data-driven digital marketing strategies boosted a client's online presence, resulting in a significant increase in website traffic and leads.",
    category: "Digital Marketing",
    date: "May 2022",
  },
];

export const HomeProject = () => {
  return (
    <section className="container mx-auto flex flex-col gap-y-5 lg:gap-y-[50px]">
      <div className="flex flex-col gap-y-[50px] lg:gap-y-[80px]">
        <div className="space-y-3.5 lg:space-y-5">
          <h2 className="text-center text-2xl font-semibold leading-tight text-white lg:text-5xl">
            <span className="text-stone-500">Our </span>
            Works
          </h2>
          <p className="mx-auto max-w-screen-xl text-center text-sm text-stone-500 lg:text-lg">
            Witness the brilliance of our previous projects. Our portfolio
            showcases the successful collaborations {"we've"} had with diverse
            clients across various industries. Let our work speak for itself.
          </p>
        </div>
        <div className="flex flex-col gap-[30px] lg:grid lg:grid-cols-2">
          {projects.map((item, index) => (
            <figure
              key={index}
              className="flex flex-col gap-y-11 rounded-[20px] border border-neutral-800 bg-gradient-to-b from-stone-900 via-transparent p-6 lg:gap-y-[50px] lg:p-[50px]"
            >
              <div className="relative flex min-h-[200px] flex-col items-center justify-center rounded-[20px] border border-neutral-800 bg-gradient-to-b from-neutral-800 via-transparent lg:min-h-[411px]">
                <Image
                  src={`/projects/project-${index + 1}.svg`}
                  alt={`project-icon-${index + 1}`}
                  width={200}
                  height={200}
                  className="mx-auto size-[100px] lg:size-[200px]"
                  draggable={false}
                />
                <Button
                  variant={"outline"}
                  className="absolute -bottom-[calc(66px/2)] mx-auto w-fit rounded-full bg-stone-950"
                >
                  View Projects Details
                </Button>
              </div>
              <figcaption className="mt-4 space-y-4 lg:mt-10 lg:space-y-6">
                <p className="text-lg font-semibold text-white lg:text-2xl">
                  {item.title}
                </p>
                <div className="flex max-lg:flex-col max-lg:gap-y-3.5 lg:items-center lg:justify-between">
                  <p className="text-sm text-white lg:text-lg">
                    Category: {item.category}
                  </p>
                  <p className="text-sm text-white lg:text-lg">{item.date}</p>
                </div>
                <p className="text-sm text-stone-500 lg:text-lg">
                  {item.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <Button variant={"outline"} className="mx-auto w-fit rounded-full">
        View Projects Details
      </Button>
    </section>
  );
};
