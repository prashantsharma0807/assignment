import ecommerce from "../assets/ecommerce.png";
import saas from "../assets/saas.png";
import lead from "../assets/lead.png";
import local from "../assets/local.png";
import nextbutton from "../assets/next-button.png";

const industries = [
  {
    title: "E-commerce",
    image: ecommerce,
    description:
      "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo",
  },
  {
    title: "SaaS",
    image: saas,
    description:
      "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo",
  },
  {
    title: "Lead Generation",
    image: lead,
    description:
      "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo",
  },
  {
    title: "Local Services",
    image: local,
    description:
      "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo",
  },
];

export default function Industries() {
  return (
    <section className="py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-semibold">Industries</h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Deep expertise across the sectors that matter most — with a track
            record of measurable outcomes in each.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className=" group relative h-105 rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={industry.image}
                alt=""
                className=" absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent " />

              <div className="absolute bottom-8 left-6 right-6 text-white">
                <h3 className=" text-4xl font-semibold transition-all duration-300 group-hover:-translate-y-2 ">
                  {industry.title}
                </h3>

                <div
                  className=" max-h-0 opacity-0 overflow-hidden transition-all duration-500
                  group-hover:max-h-40
                  group-hover:opacity-100
                  "
                >
                  <p className="mt-4 text-sm leading-6">
                    {industry.description}
                  </p>

                  <button className=" mt-6  flex  items-center  gap-3  font-medium">
                    Learn More
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <img src={nextbutton} className="w-5" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
