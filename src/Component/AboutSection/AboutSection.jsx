import React from "react";
import perfumeImg from "../../assets/About/aboutimage2.jpg";

function About() {
  return (
    <section
      className="relative bg-gradient-to-r from-rose-100 via-pink-100 to-amber-100 border py-16 px-6 md:px-12 lg:px-20"
      style={{
        fontFamily: "Dancing Script",
        fontStyle: "italic",
        letterSpacing: 1,
        fontSize: "20px",
      }}
    >
      {/*  Heading centered above both columns */}
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-pink-700 text-center w-full">
        What is Floral Love ???
      </h2>

      {/*  Equal width image & text section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">

        {/* Image Section */}
        <div className="md:w-1/2 w-full">
          <img
            src={perfumeImg}
            alt="Floral perfume bottles"
            className="rounded-2xl w-full h-auto shadow-lg hover:scale-105 transition duration-500"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full text-gray-800">
          <p className="text-lg leading-relaxed mb-2">
            Born from a deep passion for elegance and scent,{" "}
            <span className="font-semibold text-rose-700">Floral Love</span>{" "}
            began as a tender dream — a place where every drop of perfume
            whispers a love story. Blending nature’s softest petals with rare
            essences, we craft fragrances that capture{" "}
            <span className="font-semibold text-rose-700">
              emotions, memories, and moments
            </span>{" "}
            meant to be cherished forever.
          </p>
          <p className="text-lg leading-relaxed mb-1">
            Each fragrance is more than a scent —   <span className="font-semibold text-rose-700">it’s a heartbeat of romance,</span>
            a memory of a stolen glance, or the warmth of a lingering embrace. Our
            artisans pour love into every bottle, turning delicate blooms into
            timeless expressions of beauty and passion.
          </p>

          <p className="text-lg leading-relaxed">
            At{" "}
            <span className="font-semibold text-rose-700">Floral Love</span>, we
            believe a perfume isn’t just worn — it’s felt. It’s the invisible
            poetry that stays with you, wrapping your soul in elegance and
            leaving behind a trace of pure affection.
          </p>

          <p className="text-xl text-pink-700 font-semibold mt-2 italic">
            Let every spray remind you — love is the fragrance of the heart.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
