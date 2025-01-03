import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to complete a web development project?",
    answer:
      "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    question:
      "Can you create a responsive website design that looks great on all devices?",
    answer:
      "Yes, we specialize in responsive website design to ensure your site looks and performs beautifully across all devices, from desktops to smartphones.",
  },
  {
    question:
      "What digital marketing strategies do you employ to drive website traffic?",
    answer:
      "We use a combination of SEO, social media marketing, content marketing, and pay-per-click (PPC) advertising to drive targeted traffic to your website.",
  },
  {
    question: "Can you handle large-scale mobile app development projects?",
    answer:
      "Absolutely! Our experienced development team is equipped to handle projects of any scale, ensuring robust and scalable solutions.",
  },
  {
    question: "Can you integrate third-party APIs into our mobile app?",
    answer:
      "Yes, we can seamlessly integrate third-party APIs to enhance your app's functionality and provide a superior user experience.",
  },
  {
    question:
      "Do you offer maintenance services for websites and apps developed by other companies?",
    answer:
      "Yes, we provide comprehensive maintenance and support services, even for projects developed by other companies, to ensure optimal performance and reliability.",
  },
  {
    question: "How do you ensure cross-platform compatibility for mobile apps?",
    answer:
      "We use advanced tools and frameworks to develop cross-platform apps that deliver consistent performance and user experience on all devices.",
  },
  {
    question:
      "How do you ensure the security of user data in your web applications?",
    answer:
      "We implement industry-standard security measures, including encryption, secure coding practices, and regular audits, to protect user data and prevent breaches.",
  },
];

export const HomeFAQ = () => {
  return (
    <section className="container mx-auto flex flex-col gap-y-[50px] lg:gap-y-[80px]">
      <div className="space-y-3.5 lg:space-y-5">
        <h2 className="text-center text-2xl font-semibold leading-tight text-white lg:text-5xl">
          <span className="text-stone-500">Frequently </span>
          Asked Questions
        </h2>
        <p className="mx-auto max-w-screen-xl text-center text-sm text-stone-500 lg:text-lg">
          Got questions? {"We've"} got answers. Check out our frequently asked
          questions section to find valuable insights into our processes,
          pricing, and more. Transparency is at the core of our client
          interactions.
        </p>
      </div>
      <Accordion
        type="multiple"
        className="flex flex-col gap-x-[50px] lg:grid lg:grid-cols-2"
      >
        {faqs.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="flex flex-col gap-y-4 border-b-neutral-900 p-6 lg:gap-y-[30px] lg:p-[34px]"
          >
            <AccordionTrigger className="flex gap-x-7 !p-0 text-left font-semibold hover:no-underline lg:text-xl">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="!p-0 text-sm text-neutral-400 lg:text-lg">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {/* <CustomAccordion /> */}
    </section>
  );
};
