import partnerImg from "../assets/partner.png";
import bgPattern from "../assets/pattern.png";
import icon from "../assets/icon.png";

const cards = [
  {
    title: "NDA-Backed",
    shortDesc: "Every project is protected by a comprehensive NDA.",
    hoverDesc:
      "The water rush down the wash and into the slot canyon below. Two hikers had started the day to sunny weather without a cloud in the sky.",
  },
  {
    title: "Seamless Sync",
    shortDesc: "We plug directly into your workflows.",
    hoverDesc:
      "The water rush down the wash and into the slot canyon below. Two hikers had started the day to sunny weather without a cloud in the sky.",
  },
  {
    title: "Scalable",
    shortDesc: "Scale delivery capacity on demand.",
    hoverDesc:
      "The water rush down the wash and into the slot canyon below. Two hikers had started the day to sunny weather without a cloud in the sky.",
  },
  {
    title: "Your Brand, Our Work",
    shortDesc: "Scale delivery capacity on demand.",
    hoverDesc: "The water rush down the wash and into the slot canyon below.",
  },
];

export default function WhyPartner() {
  return (
    <section className="relative overflow-hidden bg-blue-500 py-24">
      <img
        src={bgPattern}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        <h2 className="text-5xl font-semibold text-white">
          Why Businesses
          <span className="ml-2 italic font-serif">Partner With Us</span>
        </h2>

        <p className="mt-5 text-lg text-white/80 max-w-2xl">
          We combine technical depth, process discipline, and senior-level
          talent to deliver outcomes that move your business forward.
        </p>

        <div className="mt-16 grid lg:grid-cols-2 gap-7">
          <img
            src={partnerImg}
            alt=""
            className="h-full w-full rounded-3xl object-cover"
          />

          <div className="grid sm:grid-cols-2 gap-5">
            {cards.map((card, index) => {
              const isDark = index === 1 || index === 2;

              return (
                <div
                  key={card.title}
                  className={`  group relative  h-65  rounded-3xl  p-8  overflow-hidden cursor-pointer
                    transition-all  duration-500

                    ${
                      isDark
                        ? "bg-[#080A24] hover:bg-white"
                        : "bg-white hover:bg-[#080A24]"
                    }
                  `}
                >
                  <div className="  transition-all  duration-500  group-hover:-translate-y-10 ">
                    <div
                      className={`  mb-6  flex  h-12  w-12  items-center  justify-center  rounded-xl
                        transition-all  duration-500 group-hover:opacity-0  group-hover:-translate-y-4

                        ${isDark ? "bg-white/10" : "bg-sky-100"}
                      `}
                    >
                      <img src={icon} alt="" className="w-5" />
                    </div>

                    <h3
                      className={`  text-2xl  font-semibold  transition-colors  duration-500

                        ${
                          isDark
                            ? "text-white group-hover:text-black"
                            : "text-black group-hover:text-white"
                        }
                      `}
                    >
                      {card.title}
                    </h3>

                    <p
                      className={`  mt-4 leading-7  transition-all  duration-500
                        group-hover:opacity-0  group-hover:translate-y-4

                        ${isDark ? "text-gray-300" : "text-gray-600"}
                      `}
                    >
                      {card.shortDesc}
                    </p>
                  </div>

                  <div
                    className="  absolute  left-8  right-8  bottom-6   opacity-0  translate-y-8
                      transition-all  duration-500
                      group-hover:opacity-100 group-hover:translate-y-0
                    "
                  >
                    <p
                      className={`
                        leading-7
                        ${isDark ? "text-gray-600" : "text-gray-300"}
                      `}
                    >
                      {card.hoverDesc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
