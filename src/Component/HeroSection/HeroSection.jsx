import React from 'react'
import heroBg from '../../assets/Hero/heroImage1.jpg'


function HeroSection() {
  return (
 
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white h-[80vh] flex items-center justify-center border border-solid border-black  "
      style={{
        backgroundImage: `url(${heroBg})`, 
       fontFamily: 'Dancing Script', fontStyle: 'italic', letterSpacing: 1 ,    fontSize: '20px' }}
    >
      {/* Overlay for dark shade (optional) */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl  mb-4 animate-bounce ">
          Welcome to <span className="text-pink-500 font-bold">Floral Love </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-3xl  max-w-xl mx-auto text-gray-100 mb-6 font-italic animate__animated animate__jackInTheBox ">
         Let Your Fragrance Tell Your Love Story♡</p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full font-medium transition duration-300 ">
          Explore Now
        </button>
      </div>
    </section>


  
  )
}

export default HeroSection


