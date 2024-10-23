// App.js
import React from "react";
import HeroSection from "./components/HeroSection";
import TrustedBySection from "./components/TrustedBySection";
import FeaturesSection from "./components/FeaturesSection";
import DemoSection from "./components/DemoSection";
import Footer from "./components/Footer";
import { FaAngleDown } from "react-icons/fa6";
import logo from "./assets/logo.png"; // Updated: import logo

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-md mx-auto max-w-[100vw] px-[170px] z-50">
        <nav className="flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Unscript Logo" className="h-8 w-auto" />
          </div>

          {/* Navigation Links */}
          <div>
            <ul className="flex space-x-10 items-center">
              <li>
                <a
                  href="#"
                  className="flex items-center"
                  role="button"
                  aria-label="Use Cases"
                >
                  Use Cases <FaAngleDown />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center"
                  role="button"
                  aria-label="Features"
                >
                  Features <FaAngleDown />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center"
                  role="button"
                  aria-label="Resources"
                >
                  Resources <FaAngleDown />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center"
                  role="button"
                  aria-label="Company"
                >
                  Company <FaAngleDown />
                </a>
              </li>
            </ul>
           
          </div>
          <div>
                <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded">
                  Contact Sales
                </button>
            </div>
        </nav>
      </header>

      {/* Main Sections */}
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <DemoSection />
      <Footer />
    </div>
  );
}

export default App;
