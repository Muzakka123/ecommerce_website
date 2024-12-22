'use client';

import React from 'react';
import { FaLinkedin, FaFacebookSquare, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import { IoLogoSkype } from 'react-icons/io';
import Image from 'next/image'; // Import Image component from Next.js

const page: React.FC = () => {
  return (
    <div>
      {/* Cart Section */}
      <div className="bg-white w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 h-auto text-gray-800">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl text-center font-medium">
          Your shopping cart
        </h1>

        {/* Table-like Layout */}
        <div className="mt-10">
          {/* Header Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-semibold border-b pb-2 text-sm">
            <p>Product</p>
            <p className="text-center">Quantity</p>
            <p className="text-right hidden sm:block">Total</p>
          </div>

          {/* Product 1 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center mt-6">
            <div className="flex items-start">
              <Image
                src="/images/pot.png"
                alt="Graystone vase"
                width={80} // Adjust width
                height={80} // Adjust height
                className="w-20 h-20"
              />
              <div className="ml-4">
                <h2 className="font-medium">Graystone vase</h2>
                <p className="text-sm text-gray-500 mt-1">
                  A timeless ceramic vase with a tri-color grey glaze.
                </p>
                <p className="mt-2 font-semibold">£85</p>
              </div>
            </div>
            <p className="text-center">1</p>
            <p className="text-right hidden sm:block font-semibold">£85</p>
          </div>

          {/* Product 2 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center mt-6">
            <div className="flex items-start">
              <Image
                src="/images/plant.png"
                alt="Basic white vase"
                width={80} // Adjust width
                height={80} // Adjust height
                className="w-20 h-20"
              />
              <div className="ml-4">
                <h2 className="font-medium">Basic white vase</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Beautiful and simple, this is one for the classics.
                </p>
                <p className="mt-2 font-semibold">£125</p>
              </div>
            </div>
            <p className="text-center">1</p>
            <p className="text-right hidden sm:block font-semibold">£125</p>
          </div>
        </div>

        {/* Subtotal and Checkout */}
        <div className="flex flex-col items-end mt-10">
          <div className="text-lg font-medium">
            <span className="mr-4">Subtotal</span>
            <span className="font-semibold">£210</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Taxes and shipping are calculated at checkout
          </p>
          <button className="bg-[#2A254B] text-white py-2 px-6 mt-4">
            Go to checkout
          </button>
        </div>
      </div>

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
            {/* Social Media Icons */}
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
