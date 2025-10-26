import React from "react";
import perfumeImg from "../../assets/About/aboutimage2.jpg";

function About() {
  return (
    <section
      className="w-full relative bg-gradient-to-r from-rose-100 via-pink-100 to-amber-100 border-2 py-16 px-6 md:px-12 lg:px-20"
      style={{
        fontFamily: "Dancing Script",
        fontStyle: "italic",
        letterSpacing: 1,
        fontSize: "20px",
      }}
    >
      {/*  Heading centered above both columns */}
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-pink-700 text-center w-full animate__animated animate__lightSpeedInRight">
        What is Floral Love ???
      </h2>

      {/* ✅ Image & text stack below lg, side-by-side at lg */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:space-x-6 p-4">

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={perfumeImg}
            alt="Floral perfume bottles"
            className="rounded-2xl h-auto shadow-lg hover:scale-105 transition duration-500 w-full"
          />
        </div>

        {/* Text Section */}
        {/* Text Section */}
<div className="text-gray-800 w-full lg:w-1/2 object-cover mt-8 lg:mt-0">
  <p className="text-lg leading-relaxed mb-2 text-justify [text-justify:inter-word]">
    Inspired by a passion for comfort and craftsmanship,{" "}
    <span className="font-semibold text-rose-700">Tehzeeb Furniture</span>{" "}
    began with a vision — to create spaces that reflect warmth, beauty, and harmony.
    We blend traditional artistry with modern design to craft{" "}
    <span className="font-semibold text-rose-700">
      furniture that speaks of elegance, strength, and timeless charm
    </span>{" "}
    for every home.
  </p>

  <p className="text-lg leading-relaxed mb-1 text-justify [text-justify:inter-word]">
    Each piece is more than decor —{" "}
    <span className="font-semibold text-rose-700">
      it’s a story of skill and dedication,
    </span>{" "}
    shaped by hands that value perfection and hearts that understand comfort.
    Our craftsmen bring life to wood, turning imagination into enduring beauty.
  </p>

  <p className="text-lg leading-relaxed text-justify [text-justify:inter-word]">
    At{" "}
    <span className="font-semibold text-rose-700">Tehzeeb Furniture</span>, we believe
    furniture isn’t just placed — it’s cherished. It fills your home with
    warmth, style, and a sense of belonging that lasts for generations.
  </p>

  <p className="text-xl text-pink-700 font-semibold mt-2 italic text-center">
    Let every piece remind you — comfort is the true art of living.
  </p>
</div>


      </div>
    </section>
  );
}

export default About;
