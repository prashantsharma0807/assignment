import { useState } from "react";

import reactLogo from "../assets/react.png";
import vueLogo from "../assets/vue.png";
import angularLogo from "../assets/angular.png";
import tsLogo from "../assets/typescript.png";
import svelteLogo from "../assets/svelte.png";
import froalaLogo from "../assets/froala.png";

const techStack = {
  Backend: [reactLogo, vueLogo, angularLogo, tsLogo, svelteLogo, froalaLogo],

  Frontend: [reactLogo, vueLogo, angularLogo, tsLogo, svelteLogo, froalaLogo],

  Mobile: [reactLogo, vueLogo, angularLogo, tsLogo],

  Cloud: [reactLogo, vueLogo, angularLogo, tsLogo, svelteLogo],
};

const tabs = ["Backend", "Frontend", "Mobile", "Cloud"];

export default function ModernTechStack() {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-semibold">
            Modern <span className="italic text-blue-500">Tech Stack</span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            We build on proven, modern technologies — chosen for performance,
            maintainability, and long-term scalability.
          </p>
        </div>

        <div className="mt-16 rounded-3xl overflow-hidden border border-blue-400">
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-5 bg-slate-950 p-8">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="w-full py-6  border-b border-slate-700 flex items-center gap-4 text-left"
                >
                  <span
                    className={` rounded-lg px-2 py-1 text-sm font-medium

                    ${
                      activeTab === tab
                        ? "bg-white text-blue-500"
                        : "bg-slate-700 text-blue-400"
                    }
                    `}
                  >
                    0{index + 1}
                  </span>

                  <h3
                    className={`  text-3xl  transition-all  duration-300

                    ${activeTab === tab ? "text-white" : "text-slate-400"}
                    `}
                  >
                    {tab}
                  </h3>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 bg-white p-8 flex items-center justify-center">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {techStack[activeTab].map((logo, index) => (
                  <div
                    key={index}
                    className="  h-24  w-44  rounded-2xl  border  border-gray-200  flex  items-center  justify-center
                    hover:border-blue-400  transition-all  duration-300  "
                  >
                    <img src={logo} alt="" className="max-h-10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
