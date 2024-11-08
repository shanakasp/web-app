import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-80 bg-[#172b4d] relative rounded-bl-[20px] rounded-br-[20px] text-[#979797]">
      <div className="max-w-[1440px] mx-auto px-4 h-full">
        {/* Main Section */}
        <div className="flex justify-between items-start py-6">
          {/* Find Your Way */}
          <div className="space-y-3 text-white">
            <h2 className="text-2xl font-['Sansita Swashed']">Find your way</h2>
            <p className="text-[#979797] text-xl font-['Poppins']">Home</p>
            <p className="text-[#979797] text-xl font-['Poppins']">Jobs</p>
            <p className="text-[#979797] text-xl font-['Poppins']">About Us</p>
            <p className="text-[#979797] text-xl font-['Poppins']">
              Contact Us
            </p>
          </div>

          {/* Apps */}
          <div className="w-[211px] space-y-3">
            <h2 className="text-white text-2xl font-['Sansita Swashed']">
              Apps
            </h2>
            <p className="text-[#979797] text-xl font-['Poppins']">
              Download the Careers Central app for your Desktop or Mobile
              devices.
            </p>
          </div>

          {/* Contact Us */}
          <div className="w-[271px] space-y-3">
            <h2 className="text-white text-2xl font-['Sansita Swashed']">
              Contact Us
            </h2>
            <p className="text-[#979797] text-xl font-['Poppins']">
              Need anything? Get in touch and we can help.
            </p>
          </div>

          {/* Newsletter */}
          <div className="w-[375px]">
            <h2 className="text-white text-2xl font-['Sansita Swashed']">
              <span className="text-[#979797] font-['Poppins']">
                Subscribe to our{" "}
              </span>
              <span>Newsletter</span>
            </h2>
            <div className="mt-4 relative">
              <input
                type="email"
                placeholder="Enter your Email ID"
                className="w-full h-14 px-4 bg-transparent border-b border-[#979797] border-solid text-[#979797] text-xl font-['Poppins'] outline-none"
              />
              <button className="absolute top-2 right-2 w-10 h-10 bg-[#049c64] rounded-full text-white">
                <span className="sr-only">Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center mt-4 px-4 border-t border-[#979797] pt-4">
          <div className="flex items-center gap-6 text-white text-lg font-medium font-['Poppins']">
            <img
              className="w-8 h-8"
              src="https://via.placeholder.com/30x30"
              alt="Logo"
            />
            <span>Careers Central 2024. All Rights Reserved</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <FaFacebook className="text-white w-10 h-10 cursor-pointer hover:text-[#046b4b] transition-colors" />
            <FaTwitter className="text-white w-10 h-10 cursor-pointer hover:text-[#046b4b] transition-colors" />
            <FaInstagram className="text-white w-10 h-10 cursor-pointer hover:text-[#046b4b] transition-colors" />
            <FaLinkedin className="text-white w-10 h-10 cursor-pointer hover:text-[#046b4b] transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
