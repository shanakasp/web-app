import { ArrowRight } from "lucide-react";
import React from "react";
import CopyrightIcon from "../Images/Copyright.png";
import instagramIcon from "../Images/Instagram Circle.png";
import linkedinIcon from "../Images/LinkedIn Circled.png";
import twitterIcon from "../Images/Twitter Circled.png";
import facebookIcon from "../Images/fb.png";

const Footer = () => {
  return (
    <footer className="bg-[#172b4d] text-[#979797] font-poppins pb-2">
      <div className="w-full max-w-4xl xl:max-w-7xl mx-auto py-2 px-4 opacity-90">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Find your way section */}
          <div>
            <h3 className="text-white font-semibold text-2xs sm:text-xs italic mb-2 font-sansita">
              Find your way
            </h3>
            <ul className="space-y-1 text-3xs sm:text-2xs  lg:text-xs">
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
            <h3 className="text-white font-semibold text-xxs sm:text-xs italic mb-2 font-sansita">
              Apps
            </h3>
            <p className="text-3xs sm:text-2xs leading-relaxed lg:text-xs">
              Download the Careers Central app for your Desktop or Mobile
              devices.
            </p>
          </div>

          {/* Contact Us section */}
          <div>
            <h3 className="text-white font-semibold text-2xs sm:text-xs italic mb-2 font-sansita">
              Contact Us
            </h3>
            <p className="text-3xs sm:text-2xs leading-relaxed lg:text-xs">
              Need anything? Get in touch and we can help.
            </p>
          </div>

          {/* Newsletter section */}
          <div>
            <span className="text-2xs sm:text-xs leading-relaxed opacity-90">
              Subscribe to our{" "}
              <span className="italic font-sansita text-white opacity-100 text-2xs sm:text-xs ml-1">
                Newsletter
              </span>
            </span>
            <div className="flex items-center border-b border-gray-600 pb-1 pt-3 sm:pt-6">
              <input
                type="email"
                placeholder="Enter your Email ID"
                className="bg-transparent outline-none w-full text-3xs sm:text-2xs lg:text-xs placeholder-[#979797] text-[#979797]"
              />
              <button className="ml-2 text-white hover:text-gray-300 transition-colors">
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-2 sm:mt-4 pt-2 sm:pt-4 border-t border-[#b0b0b0]">
          <div className="flex items-center mb-2 sm:mb-0 text-white">
            <a href="#">
              <img
                src={CopyrightIcon}
                alt="Copyright"
                className="w-2 h-2 sm:w-3 sm:h-3 mr-1"
              />
            </a>
            <span className="text-4xs sm:text-3xs lg:text-xxs">
              Careers Central 2024. All Rights Reserved
            </span>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-2 sm:space-x-4">
            <a href="#">
              <img
                src={facebookIcon}
                alt="Facebook"
                className="w-3 h-3 sm:w-5 sm:h-5"
              />
            </a>
            <a href="#">
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-3 h-3 sm:w-5 sm:h-5"
              />
            </a>
            <a href="#">
              <img
                src={twitterIcon}
                alt="Twitter"
                className="w-3 h-3 sm:w-5 sm:h-5"
              />
            </a>
            <a href="#">
              <img
                src={instagramIcon}
                alt="Instagram"
                className="w-3 h-3 sm:w-5 sm:h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
