import React from "react";
import roseImg from "../../assets/SignatureScents/roseImage.jpg";
import jasmineImg from "../../assets/SignatureScents/jasmine2.jpg";
import lavenderImg from "../../assets/SignatureScents/Lavender.jpg";
import floralBottleImg from "../../assets/SignatureScents/Floral.jpg";
import peonyImg from "../../assets/SignatureScents/peony.jpg";
import gardenImg from "../../assets/SignatureScents/garden.jpg";

function SignatureScents() {
  return (
    <div>
      <section
        className="text-gray-700 body-font bg-gradient-to-r from-pink-50 via-rose-100 to-amber-50 py-10 px-1 border-2"
        style={{ fontFamily: 'Dancing Script', fontStyle: 'italic', letterSpacing: 4, fontSize: '20px' }}
      >
        <div className="container mx-auto flex flex-col items-center">
          {/* Section Heading */}
          <h1 className="sm:text-4xl text-3xl font-bold title-font text-pink-700 text-center mb-8 mt-5 animate__animated animate__animated animate__animated animate__lightSpeedInRight">
            Our Floral Signature Scents
          </h1>
        </div>

        {/* Image Gallery */}
        <div className="flex flex-wrap md:-m-2 -m-1">
          {/* Left Column */}
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="Peony perfume"
                className="w-full object-cover h-full object-center block rounded-xl shadow-md hover:scale-105 transition duration-500"
                src={peonyImg}
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
                alt="Floral essence bottle"
                className="w-full object-cover h-full object-center block rounded-xl shadow-md hover:scale-105 transition duration-500"
                src={floralBottleImg}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="Lavender perfume bottle"
                className="w-full object-cover h-full object-center block rounded-xl shadow-md hover:scale-105 transition duration-500"
                src={lavenderImg}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="Rose perfume"
                className="w-full object-cover h-full object-center block rounded-xl shadow-md hover:scale-105 transition duration-500"
                src={roseImg}
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
    </div>
  );
}

export default SignatureScents;
