import Image from "next/image";

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
    <section className="container mx-auto flex flex-col gap-y-[50px] lg:gap-y-[80px]">
      <div className="space-y-3.5 lg:space-y-5">
        <h2 className="text-center text-2xl font-semibold leading-tight text-white lg:text-5xl">
          <span className="text-stone-500">Our </span>
          Partners and Clients
        </h2>
        <p className="mx-auto max-w-screen-xl text-center text-sm text-stone-500 lg:text-lg">
          We are grateful for the opportunity to work with esteemed partners and
          clients. Our strong relationships are a testament to our dedication
          and expertise in the digital realm.
        </p>
      </div>
      <div className="flex flex-col gap-[30px] lg:grid lg:grid-cols-3">
        {partners.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-[60px] rounded-[20px] border border-neutral-900 p-6 pt-[50px] lg:px-[50px] lg:py-[80px]"
          >
            <div className="flex items-center justify-center gap-x-3.5 lg:gap-x-5">
              <Image
                src={"/partners/partner-1.svg"}
                alt="partner-1"
                width={138}
                height={138}
                className="size-[110px] lg:size-[138px]"
              />
              <Image src={"/plus.svg"} alt="plus-icon" width={40} height={40} />
              <Image
                src={`/partners/partner-${index + 2}.svg`}
                alt={`partner-${index + 2}`}
                width={138}
                height={138}
                className="size-[110px] lg:size-[138px]"
              />
            </div>
            <div className="space-y-3.5 lg:space-y-5">
              <p className="text-center text-xl font-semibold text-white">
                {item.name}
              </p>
              <p className="text-center text-sm text-stone-500 lg:text-lg">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
