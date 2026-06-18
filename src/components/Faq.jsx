import { useState } from "react";

const faqs = [
  {
    question: "What types of projects does Digital Liquid handle?",
    answer:
      "We work across web development, mobile apps, SaaS products, eCommerce platforms, cloud infrastructure, and digital marketing — from early-stage MVPs to enterprise-scale platforms.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Most projects can start within one week after finalizing requirements and engagement terms.",
  },
  {
    question: "What engagement models do you offer?",
    answer:
      "We offer dedicated teams, fixed-price projects, and time & material engagement models.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. We provide ongoing maintenance, monitoring, feature enhancements and technical support.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  const toggleAccordion = (index) => {
    if (open === index) {
      setOpen(null);
      return;
    }
    setOpen(index);
  };

  return (
    <section className="py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-5xl font-semibold leading-tight">
              Frequently Asked
              <span className="block italic text-blue-500">Questions</span>
            </h2>

            <p className="mt-5 text-gray-600 max-w-md">
              Here are some questions our clients frequently ask about working
              with Digital Liquid.
            </p>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className={`rounded-2xl overflow-hidden transition-all duration-300

                              ${open === index ? "bg-blue-500" : "bg-white border border-gray-200"}
                              `}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="  w-full  p-6  flex  justify-between  items-center text-left "
                >
                  <h3
                    className={` font-semibold text-lg
                    ${open === index ? "text-white" : "text-slate-900"}
                    `}
                  >
                    {faq.question}
                  </h3>

                  <span
                    className={` text-2xl
                    ${open === index ? "text-white" : "text-gray-500"}
                    `}
                  >
                    {open === index ? "×" : "+"}
                  </span>
                </button>

                <div
                  className={`  transition-all  duration-300  overflow-hidden
                  ${open === index ? "max-h-40" : "max-h-0"}
                  `}
                >
                  <p
                    className={` px-6 pb-6 leading-7
                    ${open === index ? "text-white" : "text-gray-600"}
                    `}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
