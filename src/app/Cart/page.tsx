'use client'; // Add this line at the top

import React, { useState } from "react";
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";

const Page: React.FC = () => { // Changed "page" to "Page"
  const [quantity, setQuantity] = useState(1);
  const [isCartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!isCartVisible);
  };

  // Increase quantity
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  // Decrease quantity
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      {/* Button to toggle cart visibility */}
      <button
        onClick={toggleCart}
        className="fixed top-4 right-4 bg-[white] text-white px-4 py-2 rounded-md z-10"
      >
        {isCartVisible ? "Hide Cart" : "Show Cart"}
      </button>

      {/* Conditional rendering of cart */}
      {isCartVisible && (
        <div className="fixed top-16 right-4 w-[300px] bg-white shadow-lg rounded-md p-4 z-10">
          <h3 className="text-lg font-bold mb-2">Your Cart</h3>
          <p>No items in your cart.</p>
        </div>
      )}

      {/* Product Details Section */}
      <div
        className="relative w-full max-w-[1440px] h-[759px] bg-white"
        style={{
          backgroundImage: "url('/images/danty chair.png')",
          backgroundSize: "721px 759px",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left Section: Product Image */}
        <div
          className="absolute top-0 left-0 w-[721px] h-[759px]"
          style={{
            backgroundImage: "url('/images/danty chair.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Right Section: Product Details */}
        <div
          className="absolute top-[51px] left-[783px] w-[602px] h-[657px] text-[#2A254B] flex flex-col justify-start px-8 py-8 gap-8"
        >
          <h1 className="text-[36px] font-ClashDisplay leading-[44.28px]">The Dandy Chair</h1>
          <p className="text-[16px] leading-[21.6px]">
            A timeless design, with premium materials features as one of our most
            popular and iconic pieces. The dandy chair is perfect for any stylish
            living space with beech legs and lambskin leather upholstery.
          </p>

          {/* Feature List */}
          <ul className="text-[16px] leading-[21.6px] list-none">
            <li>• Premium material</li>
            <li>• Handmade upholstery</li>
            <li>• Quality timeless classic</li>
          </ul>

          {/* Dimensions */}
          <div>
            <h3 className="text-[16px] leading-[19.68px]">Dimensions</h3>
            <p className="text-[16px] leading-[21.6px]">
              Height: 110cm | Width: 75cm | Depth: 50cm
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="flex flex-col sm:flex-row justify-between items-center p-4">
            <span className="text-[16px]">Amount</span>
            <div className="flex items-center gap-4 border border-gray-300 rounded-lg p-2">
              <button className="text-[20px] font-bold" onClick={handleDecrease}>
                -
              </button>
              <span className="text-[16px]">{quantity}</span>
              <button className="text-[20px] font-bold" onClick={handleIncrease}>
                +
              </button>
            </div>
            <button className="bg-[#2A254B] text-white px-6 py-2 rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative w-full max-w-[1440px] h-[355px] mx-auto bg-white mt-[40px] text-[#2A254B]">
        <div className="text-center pt-16">
          <h3 className="text-[24px] leading-[33.6px] font-[Clash Display] mx-auto w-[366px]">
            What makes our brand different
          </h3>
        </div>
        <div className="flex justify-center gap-8 mt-12 px-4">
          {[{
              icon: "/images/icon1.png",
              title: "Next day as standard",
              desc: "Order before 3pm and get your order the next day at standard."
            },
            {
              icon: "/images/icon2.png",
              title: "Made by true artisans",
              desc: "Handmade crafted goods made with real passion and craftsmanship."
            },
            {
              icon: "/images/icon3.png",
              title: "Unbeatable prices",
              desc: "For our materials and quality, you won’t find better prices anywhere."
            },
            {
              icon: "/images/icon4.png",
              title: "Recycled packaging",
              desc: "We use 100% recycled packaging to ensure our footprint is manageable."
            }]
            .map((item, index) => (
              <div key={index} className="text-center w-[250px]">
                <Image src={item.icon} alt={item.title} width={24} height={24} className="mx-auto mb-4" />
                <h3 className="text-lg mb-2">{item.title}</h3>
                <p className="text-sm leading-[20px]">{item.desc}</p>
              </div>
            ))}
        </div>
      </section>

      {/* Footer Section */}
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

export default Page; // Exporting with the correct component name
