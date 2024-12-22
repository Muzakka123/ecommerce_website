'use client'; // Add this line at the top

import React from "react";
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";
import Image from "next/image";  // Import next/image for optimized image usage

const page: React.FC = () => {
  return (
    <div>
      <div className="relative w-full h-[277px] mx-auto bg-[#FFFFFF] flex items-center px-8 sm:px-16 md:px-32 lg:px-40 xl:px-80">
        {/* Left-aligned Text */}
        <div className="text-left">
          <h1
            style={{
              fontFamily: "Clash Display",
              fontSize: "36px",
              fontWeight: "400",
              lineHeight: "50.4px",
              textDecorationSkipInk: "none",
              textUnderlinePosition: "from-font",
            }}
            className="leading-[50.4px]"
          >
            A brand built on the love of craftsmanship, quality, and outstanding customer service
          </h1>
        </div>

        {/* Right-aligned Button */}
        <div>
          <button className="w-[192px] h-[56px] bg-gray-300">
            View our products
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full mx-auto px-8 sm:px-16 md:px-32 py-[60px] space-y-[60px] bg-[#F9F9F9]">
        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
          {/* Text Block */}
          <div className="bg-[#2A254B] text-white px-[64px] py-[88px] flex flex-col justify-between">
            <div>
              <h1 className="font-[Clash Display] text-[32px] font-medium leading-[39.36px] mb-[12px]">
                It started with a small idea
              </h1>
              <p className="font-[Satoshi] text-[18px] leading-[24.3px]">
                A global brand with local beginnings, our story began in a small studio in South London in early 2014.
              </p>
            </div>
            <button className="bg-gray-500 text-white  w-[170px] h-[56px]">
              View collection
            </button>
          </div>
          {/* Image */}
          <div>
            <Image src="/images/yellow sofa.png" alt="Yellow Sofa" width={500} height={500} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
          <div>
            <Image src="/images/sofa.png" alt="Black Sofa" width={500} height={500} className="w-full h-full object-cover" />
          </div>
          <div className="bg-white text-[#2A254B] px-[64px] py-[88px] flex flex-col justify-between">
            <div>
              <h1 className="font-[Clash Display] text-[32px] font-medium leading-[39.36px] mb-[12px]">
                Our service isn’t just personal, it’s actually hyper personally exquisite
              </h1>
              <p className="font-[Satoshi] text-[18px] leading-[24.3px]">
                Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so
                our Chelsea boutique became the hotbed for the London interior design community.
              </p>
            </div>
            <button className="bg-[#2A254B] text-white px-[32px] py-[16px] w-[170px] h-[56px] rounded-md mt-[24px]">
              Get in touch
            </button>
          </div>
        </div>
      </div>


            {/* Features Section */}
            <section className="relative w-full mx-auto bg-white mt-[40px] text-[#2A254B] py-16 px-8 sm:px-16 md:px-32">
        <div className="text-center mb-8">
          <h3 className="text-[24px] leading-[33.6px] font-[Clash Display] mx-auto w-[366px]">
            What makes our brand different
          </h3>
        </div>
        <div className="flex justify-center gap-8 mt-12">
          {[ 
            { icon: "/images/icon1.png", title: "Next day as standard", desc: "Order before 3pm and get your order the next day at standard." },
            { icon: "/images/icon2.png", title: "Made by true artisans", desc: "Handmade crafted goods made with real passion and craftsmanship." },
            { icon: "/images/icon3.png", title: "Unbeatable prices", desc: "For our materials and quality, you won’t find better prices anywhere." },
            { icon: "/images/icon4.png", title: "Recycled packaging", desc: "We use 100% recycled packaging to ensure our footprint is manageable." },
          ].map((item, index) => (
            <div key={index} className="text-center w-[250px]">
              <Image src={item.icon} alt={item.title} width={24} height={24} className="mx-auto mb-4" />
              <h3 className="text-lg mb-2">{item.title}</h3>
              <p className="text-sm leading-[20px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full max-w-[1273px] h-[364px] bg-white mx-auto px-[16px] sm:px-[93px] py-[52px] flex flex-col items-center text-[#2A254B]">
        <h1 className="w-full sm:w-[571px] text-[28px] sm:text-[36px] font-[Clash Display] text-center leading-[40px] sm:leading-[50.4px]">
          Join the club and get the benefits
        </h1>
        <h2 className="w-full sm:w-[470px] mt-4 text-[14px] sm:text-[16px] font-[Satoshi] text-center leading-[20px] sm:leading-[24px]">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
        </h2>
        <div className="mt-[40px] flex flex-col sm:flex-row items-center gap-[10px]">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full sm:w-[472px] h-[56px] p-4 bg-[#F9F9F9] text-[#2A254B] outline-none"
          />
          <button className="w-full sm:w-[118px] h-[56px] bg-[#2A254B] text-white mt-4 sm:mt-0">
            Signup
          </button>
        </div>
      </div>

      <div className="px-8 py-8 bg-[#2A254B] mt-8 w-full">
        <div className="flex flex-wrap gap-4 md:gap-[82px] lg:gap-[200px]">
          {/* Menu Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg sm:text-xl font-bold">Menu</h1>
            <div className="space-y-2">
              <h1><a href="#">New Arrivals</a></h1>
              <h1><a href="#">Best sellers</a></h1>
              <h1><a href="#">Recently viewed</a></h1>
              <h1><a href="#">Popular this week</a></h1>
              <h1><a href="#">All Products</a></h1>
            </div>
          </div>

          {/* Categories Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg sm:text-xl font-bold">Categories</h1>
            <div className="space-y-2">
              <h1><a href="#">Crockery</a></h1>
              <h1><a href="#">Furniture</a></h1>
              <h1><a href="#">Homeware</a></h1>
              <h1><a href="#">Plant pots</a></h1>
              <h1><a href="#">Chairs</a></h1>
            </div>
          </div>

          {/* Company Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg sm:text-xl font-bold">Our Company</h1>
            <div className="space-y-2">
              <h1><a href="/about">About us</a></h1>
              <h1><a href="#">Vacancies</a></h1>
              <h1><a href="#">Contact us</a></h1>
              <h1><a href="#">Privacy</a></h1>
              <h1><a href="#">Return policy</a></h1>
            </div>
          </div>

          {/* Mailing List Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg sm:text-xl font-bold">Join our mailing list</h1>
            <div className="mt-4 flex flex-col sm:flex-row items-center">
              <input
                type="text"
                placeholder="your@email.com"
                className="w-full sm:w-[350px] h-[48px] p-2 bg-transparent border border-white rounded-md text-white"
              />
              <button className="mt-2 sm:mt-0 sm:ml-2 w-[100px] h-[48px] bg-white text-[#2A254B] rounded-md">
                Sign up
              </button>
            </div>
          </div>
        </div>

        <hr className="my-4 border-t border-[#4E4D93]" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-white gap-4 sm:gap-8">
          <div>
            <h1 className="text-sm">Copyright 2022 Avion LTD</h1>
          </div>
          <div className="flex gap-4">
            <a href="#"><FaLinkedin size={20} /></a>
            <a href="#"><FaFacebookSquare size={20} /></a>
            <a href="#"><FaInstagram size={20} /></a>
            <a href="#"><IoLogoSkype size={20} /></a>
            <a href="#"><FaTwitter size={20} /></a>
            <a href="#"><FaPinterest size={20} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
