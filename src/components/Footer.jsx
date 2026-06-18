import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#EDF6FF] pt-16">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src={logo} alt="" className="h-10" />

            <p className="mt-6 text-gray-600">
              Architectural excellence for the digital enterprise. Built for
              performance, designed for clarity.
            </p>

            <div className="flex gap-3 mt-6">
              <button className="w-9 h-9 rounded border"> X </button>

              <button className="w-9 h-9 rounded border"> in </button>

              <button className="w-9 h-9 rounded border"> G </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-5"> SERVICES </h4>

            <ul className="space-y-3 text-gray-600">
              <li>Engineering</li>

              <li>Design Systems</li>

              <li>Growth Marketing</li>

              <li>Data & Analytics</li>

              <li>DevOps & Cloud</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5"> COMPANY </h4>

            <ul className="space-y-3 text-gray-600">
              <li>About Us</li>

              <li>Portfolio</li>

              <li>Insights</li>

              <li>Careers</li>

              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5"> LEGAL & SUPPORT </h4>

            <ul className="space-y-3 text-gray-600">
              <li>Privacy Policy</li>

              <li>Terms of Service</li>

              <li>Cookie Policy</li>

              <li>Compliance</li>

              <li>Sitemap</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#168BF2] mt-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              {" "}
              © 2025 Digital Liquid. Built for structural clarity.{" "}
            </p>

            <div className="flex gap-8 text-sm text-gray-600">
              <span> English (US) </span>
              <span> USD ($) </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
