import {
  WandSparkles,
  SearchCode,
  Palette,
  Mail,
  RefreshCw,
  ShoppingBag,
} from "lucide-react";

import Cap_Frontend from "../assets/Cap_Frontend.png";
import Cap_Backend from "../assets/Cap_Backend.png";
import Cap_cms from "../assets/Cap_cms.png";
import Cap_ecommerce from "../assets/Cap_ecommerce.png";
import Cap_API from "../assets/Cap_API.png";
import Cap_UiUX from "../assets/Cap_UiUX.png";

const capabilities = [
  {
    title: "Frontend",
    icon: Cap_Frontend,
    items: ["React & Next.js", "Vue & Nuxt", "Typescript Systems"],
  },
  {
    title: "Backend",
    icon: Cap_Backend,
    items: ["Node.js / Go / Python", "Microservices", "REST & GraphQL APIs"],
  },
  {
    title: "CMS",
    icon: Cap_cms,
    items: [
      "Headless (Strapi, Contentful)",
      "Enterprise WordPress",
      "Drupal Migration",
    ],
  },
  {
    title: "eCommerce",
    icon: Cap_ecommerce,
    items: ["Shopify Plus", "Custom Checkout Flows", "B2B Portals"],
  },
  {
    title: "API Integration",
    icon: Cap_API,
    items: ["CRM Sync (Salesforce)", "Payment Gateways", "Legacy Bridge"],
  },
  {
    title: "UI/UX",
    icon: Cap_UiUX,
    items: [
      "Figma Design Systems",
      "Interactive Prototyping",
      "Accessibility Audit",
    ],
  },
];

export default function Capabilities() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-Black">
            Comprehensive Tech{" "}
            <span className="italic text-blue-500">Capabilities</span>
          </h2>

          <p className="mt-4 text-gray-400">
            From pixel-perfect frontends to resilient backend systems — our
            engineers operate across the full technology stack with senior-level
            precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <div
                key={capability.title}
                className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-blue-500 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
                  <img src={Icon} />
                </div>

                <hr className="my-5 text-gray-200" />

                <h3 className="text-3xl font-semibold">{capability.title}</h3>

                <ul className="mt-5 space-y-3 text-gray-600">
                  {capability.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
