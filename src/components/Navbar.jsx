import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="max-w-360 mx-auto h-22 flex items-center justify-between px-14">
        <img src={logo} className="h-12 w-auto" />

        <ul className="hidden md:flex items-center gap-14">
          {["Services", "Hire", "For Agencies", "Industries", "Company"].map(
            (item) => (
              <li
                key={item}
                className="text-base font-medium text-gray-900 hover:text-blue-500 cursor-pointer transition-colors"
              >
                {item}
              </li>
            ),
          )}
        </ul>

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
          Get Started
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
