'use client';

import React from "react";
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";
import Image from "next/image";


const page: React.FC = () => {
  return (
    <div>
      {/* Banner Section */}
      <section className="relative">
        <Image
          src="/images/banner.png"
          alt="Banner Image"
          width={1440}
          height={704}
          className="object-cover w-full h-auto"
        />
        <div className="absolute top-1/4 left-1/4 md:left-1/3 w-full md:w-[630px] h-[444px] bg-white p-6 flex flex-col justify-start gap-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-ClashDisplay text-black">
            Luxury Homeware for People Who Love Timeless Design Quality
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black">
            Shop from the New Spring 2022 Collection
          </p>
          <button className="h-12 w-40 mt-10 bg-gray-300 text-white rounded-sm hover:bg-gray-400">
            View Collection
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative w-full max-w-[1440px] h-[355px] mx-auto bg-white mt-[40px] text-[#2A254B]">
        <div className="text-center pt-16">
          <h3 className="text-[24px] leading-[33.6px] font-[Clash Display] mx-auto w-[366px]">
            What makes our brand different
          </h3>
        </div>
        <div className="flex justify-center gap-8 mt-12 px-4 flex-wrap">
          {[ 
            { icon: "/images/icon1.png", title: "Next day as standard", desc: "Order before 3pm and get your order the next day at standard." },
            { icon: "/images/icon2.png", title: "Made by true artisans", desc: "Handmade crafted goods made with real passion and craftsmanship." },
            { icon: "/images/icon3.png", title: "Unbeatable prices", desc: "For our materials and quality, you won’t find better prices anywhere." },
            { icon: "/images/icon4.png", title: "Recycled packaging", desc: "We use 100% recycled packaging to ensure our footprint is manageable." }
          ].map((item, index) => (
            <div key={index} className="text-center w-full sm:w-[250px] lg:w-[200px] mb-8">
              <Image src={item.icon} alt={item.title} width={24} height={24} className="mx-auto mb-4" />
              <h3 className="text-lg mb-2">{item.title}</h3>
              <p className="text-sm leading-[20px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Section */}
      <section className="w-full max-w-[1440px] h-[761px] mx-auto bg-white text-[#2A254B]">
        <div className="px-6 md:px-8 py-12">
          <h1 className="font-ClashDisplay text-[32px] font-weight-400 leading-[39.36px] text-[#2A254B]" style={{ width: '217px', height: '39px', marginTop: '40px', marginLeft: '80px' }}>
            New Ceramics
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {/* Product 1 */}
            <div className="w-full max-w-[305px] h-[462px] flex flex-col items-center">
              <Image
                src="/images/main chair.png"
                alt="chair"
                width={305}
                height={375}
                className="object-cover w-full h-[80%]"
              />
              <div className="mt-4 text-center">
                <p className="font-medium">The Dendy Chair</p>
                <p className="text-sm">$250</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="w-full max-w-[305px] h-[462px] flex flex-col items-center">
              <Image
                src="/images/ceramics1.png"
                alt="vase"
                width={305}
                height={375}
                className="object-cover w-full h-[80%]"
              />
              <div className="mt-4 text-center">
                <p className="font-medium">Rustic Vase Set</p>
                <p className="text-sm">$155</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="w-full max-w-[305px] h-[462px] flex flex-col items-center">
              <Image
                src="/images/ceramics2.png"
                alt="silky vase"
                width={305}
                height={375}
                className="object-cover w-full h-[80%]"
              />
              <div className="mt-4 text-center">
                <p className="font-medium">The Silky Vase</p>
                <p className="text-sm">$125</p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="w-full max-w-[305px] h-[462px] flex flex-col items-center">
              <Image
                src="/images/ceramics4.png"
                alt="lamp"
                width={305}
                height={375}
                className="object-cover w-full h-[80%]"
              />
              <div className="mt-4 text-center">
                <p className="font-medium">The Lucky Lamp</p>
                <p className="text-sm">$399</p>
              </div>
            </div>
          </div>
          <div>
            <button className="w-[192px] h-[56px] bg- #F9F9F9">
              View our products
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="w-full mx-auto px-8 sm:px-16 md:px-32 py-[60px] space-y-[60px] bg-[#F9F9F9]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
          <div className="bg-[#2A254B] text-white px-[64px] py-[88px] flex flex-col justify-between">
            <div>
              <h1 className="font-[Clash Display] text-[32px] font-medium leading-[39.36px] mb-[12px]">
                It started with a small idea
              </h1>
              <p className="font-[Satoshi] text-[18px] leading-[24.3px]">
                A global brand with local beginnings, our story began in a small studio in South London in early 2014.
              </p>
            </div>
            <button className="bg-gray-500 text-white w-[170px] h-[56px]">
              View collection
            </button>
          </div>
          <div>
            <Image src="/images/yellow sofa.png" alt="Yellow Chair" width={600} height={600} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="w-full h-[444px] flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/images/image1.png')" }}>
        <div className="w-full h-full flex flex-col justify-center items-center text-white px-4 py-0">
          <h1 className="text-[28px] sm:text-[36px] font-[Clash Display] text-center leading-[40px] sm:leading-[50.4px]">
            Join the club and get the benefits
          </h1>
          <h2 className="mt-4 text-[14px] sm:text-[16px] font-[Satoshi] text-center leading-[20px] sm:leading-[24px]">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </h2>
          <div className="mt-[40px] flex flex-col md:flex-row items-center gap-[10px]">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full sm:w-[472px] h-[56px] p-4 bg-[#F9F9F9] text-[#2A254B] outline-none"
            />
            <button className="w-full sm:w-[118px] h-[56px] bg-[#2A254B] text-white text-[16px]">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <div className="px-8 py-8 bg-[#2A254B] w-full">
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
