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
        <div className="text-gray-800 w-full lg:w-1/2 object-cover mt-8 lg:mt-0">
          <p className="text-lg leading-relaxed mb-2 text-justify [text-justify:inter-word]">
            Born from a deep passion for elegance and scent,{" "}
            <span className="font-semibold text-rose-700">Floral Love</span>{" "}
            began as a dream — where every drop of perfume whispers a love story.
            We blend nature’s soft petals with rare essences to capture{" "}
            <span className="font-semibold text-rose-700">
              emotions, memories, and moments
            </span>{" "}
            meant to last forever.
          </p>

          <p className="text-lg leading-relaxed mb-1 text-justify [text-justify:inter-word]">
            Each fragrance is more than a scent —{" "}
            <span className="font-semibold text-rose-700">
              it’s a heartbeat of romance,
            </span>{" "}
            a memory, a warm embrace. Our artisans pour love into every bottle,
            creating timeless expressions of beauty and passion.
          </p>

          <p className="text-lg leading-relaxed text-justify [text-justify:inter-word]">
            At{" "}
            <span className="font-semibold text-rose-700">Floral Love</span>, perfume
            isn’t just worn — it’s felt. It wraps your soul in elegance and leaves
            behind a trace of pure affection.
          </p>

          <p className="text-xl text-pink-700 font-semibold mt-2 italic text-justify [text-justify:inter-word]">
            Let every spray remind you — love is the fragrance of the heart.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
