import React from "react";
import roseImg from "../../assets/FloralCategories/roseImage.jpg";
import jasmineImg from "../../assets/FloralCategories/jasmine.jpg";
import lavenderImg from "../../assets/FloralCategories/Lavender.jpg";
import floralBottleImg from "../../assets/FloralCategories/Floral.jpg";
import peonyImg from "../../assets/FloralCategories/peony.jpg";
import gardenImg from "../../assets/FloralCategories/garden.jpg";

function FloralCategories() {
  return (
    <section
      className="w-full text-gray-700 body-font bg-gradient-to-r from-pink-50 via-rose-100 to-amber-50 py-10 px-1 border-2"
      style={{ fontFamily: 'Dancing Script', fontStyle: 'italic', letterSpacing: 4, fontSize: '20px' }}>
      <div className="container mx-auto flex flex-col items-center">
        {/* 🌸 Section Heading */}
        <h1 className="sm:text-4xl text-3xl pb-4 font-bold title-font text-pink-700 text-center mb-3 animate__animated animate__flip">
          Our Floral Fragrance Collection
        </h1>

        {/* 🌼 Paragraph */}
        <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-800 text-base lg:text-2xl text-center mb-4">
          Explore the enchanting perfumes of <span className="font-semibold text-rose-700">Floral Love</span>.
          Each fragrance is inspired by nature’s most delicate blooms, capturing the essence of<span className="font-semibold text-rose-700"> beauty, romance, and elegance </span>  in every bottle.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="flex flex-wrap md:-m-2 -m-1">
        {/* Left Column */}
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="Rose perfume"
              className="w-full object-cover h-full object-center block rounded-xl shadow-md hover:scale-105 transition duration-500"
              src={roseImg}
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="Jasmine essence"
              className="w-full object-cover h-full object-center block rounded-xl shadow-md hover:scale-105 transition duration-500"
              src={jasmineImg}
            />
          </div>
          <div className="md:p-2 p-1 w-full">
            <img
              alt="Lavender perfume bottle"
              className="w-full object-cover h-full object-center block rounded-xl shadow-md hover:scale-105 transition duration-500"
              src={lavenderImg} />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-2 p-1 w-full">
            <img
              alt="Floral essence bottle"
              className="w-full object-cover h-full object-center block rounded-xl shadow-md hover:scale-105 transition duration-500"
              src={floralBottleImg}
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="Peony perfume"
              className="w-full object-cover h-full object-center block rounded-xl shadow-md hover:scale-105 transition duration-500"
              src={peonyImg}
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="Blooming garden scent"
              className="w-full object-cover h-full object-center block rounded-xl shadow-md hover:scale-105 transition duration-500"
              src={gardenImg}
            />
          </div>
        </div>
      </div>

    </section>
  );
}

export default FloralCategories;
