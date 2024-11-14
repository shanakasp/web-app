import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#172b4d] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Find your way section */}
          <div>
            <h3 className="text-white font-semibold text-lg italic mb-4">
              Find your way
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/jobs" className="hover:text-white transition-colors">
                  Jobs
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Apps section */}
          <div>
            <h3 className="text-white font-semibold text-lg italic mb-4">
              Apps
            </h3>
            <p className="text-sm">
              Download the Careers Central app for your Desktop or Mobile
              devices.
            </p>
          </div>

          {/* Contact Us section */}
          <div>
            <h3 className="text-white font-semibold text-lg italic mb-4">
              Contact Us
            </h3>
            <p className="text-sm">
              Need anything? Get in touch and we can help.
            </p>
          </div>

          {/* Newsletter section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Subscribe to our <span className="italic">Newsletter</span>
            </h3>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your Email ID"
                className="bg-transparent border-b border-gray-600 border-solid focus:border-white outline-none py-1 pr-10 w-full text-sm transition-colors"
              />
              <button className="ml-2 text-white hover:text-gray-300 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-800">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-sm">
              © Careers Central 2024. All Rights Reserved
            </span>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
