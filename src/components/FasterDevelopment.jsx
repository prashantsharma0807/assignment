import teamImage from "../assets/team.png";
import icon from "../assets/icon.png";

const cards = [
  {
    title: "Expert Team",
    desc: "Senior engineers and designers with proven delivery experience across 20+ industries.",
  },
  {
    title: "Governed Process",
    desc: "Milestone-based delivery with defined accountability at every stage of the project.",
  },
  {
    title: "Proven Excellence",
    desc: "2,500+ projects delivered across six continents with a 98% on-time completion rate.",
  },
  {
    title: "Design Excellence",
    desc: "Every interface is built to the highest visual and UX standards — not just functional, but exceptional.",
  },
  {
    title: "Guaranteed Satisfaction",
    desc: "We don't close a project until you're fully satisfied with the output — no exceptions.",
  },
  {
    title: "End-to-End Support",
    desc: "From initial scoping through to post-launch maintenance — we're with you at every stage.",
  },
];

export default function FasterDevelopment() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-semibold">
            Faster Web Development for Foreword
            <br />
            <span className="italic text-blue-500">Thinking Brands</span>
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5">
            <img
              src={teamImage}
              alt=""
              className="rounded-3xl w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map((card) => (
              <div
                key={card.title}
                className="border border-gray-200 rounded-3xl p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
                  <img src={icon} alt="" className="w-5" />
                </div>

                <h3 className="text-2xl font-semibold mt-6">{card.title}</h3>

                <p className="text-gray-600 mt-4 leading-7">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
