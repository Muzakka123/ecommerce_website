'use client';

import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from 'react-icons/fa';
import { IoLogoSkype } from 'react-icons/io';
import Image from 'next/image';

const page: React.FC = () => {
  return (
    <div>
       {/* Title Section with Background Image */}
       <section
        style={{
            width: "1920px", // Full width
            height: "209px", // Fixed height
            backgroundImage: "url('/images/product.png')",
            backgroundSize: "cover", // Ensures image covers the area
            backgroundPosition: "center", // Centering the image
            display: "flex",
            alignItems: "center", // Vertically center the content
            justifyContent: "flex-start", // Align content to the left
            paddingLeft: "80px", // Left padding for positioning
            paddingRight: "40px", // Right padding, reduced for less space
            boxSizing: "border-box", // Include padding and borders in the width/height
            position: "relative", // Positioning content relative to its parent
          }}
      >
        <h2
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "36px",
            lineHeight: "50.4px",
            position: "absolute",
            top: "123px",
            left: "80px",
            color: "white",
          }}
        >
          {/* Title can be added here */}
        </h2>
      </section>

      {/* Filters */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <select>
          <option>Category</option>
        </select>
        <select>
          <option>Product type</option>
        </select>
        <select>
          <option>Price</option>
        </select>
        <select>
          <option>Brand</option>
        </select>
        <select>
          <option>Sorting by</option>
          <option>Date added</option>
        </select>
      </div>

      {/* Product Grid */}
      <section className="w-[1440px] h-[510px] mx-auto bg-white text-[#2A254B]">
        <div className="px-6 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3" style={{ marginTop: '40px', paddingBottom: '24px' }}>
            {/* Product 1 */}
            <div className="w-[305px] h-[462px] flex flex-col items-center">
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
            <div className="w-[305px] h-[462px] flex flex-col items-center">
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
            <div className="w-[305px] h-[462px] flex flex-col items-center">
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
            <div className="w-[305px] h-[462px] flex flex-col items-center">
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
        </div>
      </section>

      <section className="w-[1440px] h-[510px] mx-auto bg-white text-[#2A254B]">
        <div className="px-6 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3" style={{ marginTop: '40px', paddingBottom: '24px' }}>
            {/* Product 1 */}
            <div className="w-[305px] h-[462px] flex flex-col items-center">
              <Image
                src="/images/lamp.png"
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
            <div className="w-[305px] h-[462px] flex flex-col items-center">
              <Image
                src="/images/cup.png"
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
            <div className="w-[305px] h-[462px] flex flex-col items-center">
              <Image
                src="/images/yellow tabel.png"
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
            <div className="w-[305px] h-[462px] flex flex-col items-center">
              <Image
                src="/images/3 chair.png"
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
        </div>
      </section>

      <section className="w-[1440px] h-[634px] mx-auto bg-white text-[#2A254B]">
        <div className="px-6 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3" style={{ marginTop: '40px', paddingBottom: '24px' }}>
            {/* Product 1 */}
            <div className="w-[305px] h-[462px] flex flex-col items-center">
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
            <div className="w-[305px] h-[462px] flex flex-col items-center">
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
            <div className="w-[305px] h-[462px] flex flex-col items-center">
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
            <div className="w-[305px] h-[462px] flex flex-col items-center">
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
        </div>
      </section>

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
