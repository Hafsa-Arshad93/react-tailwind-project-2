import React from "react";
import { Link } from "react-router-dom";
import logo1 from '../../assets/logo/logo1.png'
import logo2 from '../../assets/logo/logo2.png'
import logo3 from '../../assets/logo/logo3.png'
import logo4 from '../../assets/logo/logo4.png'
import logo5 from '../../assets/logo/logo5.png'
import logo6 from '../../assets/logo/logo6.png'
import logo8 from '../../assets/logo/logo8.png'
import logo9 from '../../assets/logo/logo9.png'
import logo10 from '../../assets/logo/logo10.png'
import logo11 from '../../assets/logo/logo11.png'
import logo12 from '../../assets/logo/logo12.png'
import logo13 from '../../assets/logo/logo13.png'

function Navbar() {
  return (
    
      <header className=" w-full text-gray-950 body-font bg-gradient-to-r from-amber-200 via-pink-200 to-rose-300 border-1 border-solid border-black "
        style={{ fontFamily: 'Dancing Script', fontStyle: 'italic', letterSpacing: 4, fontSize: '20px' }}>

        {/* Logos Section */}
        <div className="w-full flex flex-wrap md:flex-row  justify-between items-center p-1 ">

          {/* ✅ Logo 1 */}
          <div className="w-1/4  sm:w-1/6 md:w-1/12  flex items-center justify-center mb-4  md:mb-0 transform transition duration-500 hover:scale-105 shadow-lg rounded-xl border-2">
            <img
              src={logo1}
              alt="Logo 1"
              className="w-full h-full bg-orange-200 rounded-xl object-contain"
            />
          </div>


          {/* ✅ Logo 2 */}
          <div className=" w-1/4 sm:w-1/6 md:w-1/12 flex items-center justify-center mb-4 md:mb-0 transform transition duration-500 hover:scale-105 shadow-lg rounded-xl border-2">
            <img
              src={logo2}
              alt="Logo 2"
              className="w-full h-full p-2 bg-stone-300 rounded-xl"
            />
          </div>

          {/* ✅ Logo 3 */}
          <div className=" w-1/4 sm:w-1/6 md:w-1/12 flex items-center justify-center mb-4 md:mb-0 transform transition duration-500 hover:scale-105 shadow-lg rounded-xl border-2">
            <img
              src={logo3}
              alt="Logo 3"
              className="w-full h-full p-2 bg-red-300 rounded-xl"
            />
          </div>

          {/* ✅ Logo 4 */}
          <div className=" w-1/4 sm:w-1/6 md:w-1/12 flex items-center justify-center mb-4 md:mb-0 transform transition duration-500 hover:scale-105 shadow-lg rounded-xl border-2">
            <img
              src={logo4}
              alt="Logo 4"
              className="w-full h-full p-2 bg-emerald-200 rounded-xl"
            />
          </div>

          {/* ✅ Logo 5 */}
          <div className="w-1/4 sm:w-1/6 md:w-1/12  flex items-center justify-center mb-4 md:mb-0 transform transition duration-500 hover:scale-105 shadow-lg rounded-xl border-2">
            <img
              src={logo5}
              alt="Logo 5"
              className="w-full h-full p-2 bg-teal-100 rounded-xl "
            />
          </div>

          {/* ✅ Logo 6 */}
          <div className=" w-1/4 sm:w-1/6 md:w-1/12 flex items-center justify-center mb-4 md:mb-0 transform transition duration-500 hover:scale-105 shadow-lg rounded-xl border-2">
            <img
              src={logo6}
              alt="Logo 6"
              className="w-full h-full p-2 bg-yellow-100 rounded-xl"
            />
          </div>
          {/* ✅ Logo 8 */}
          <div className="w-1/4 sm:w-1/6 md:w-1/12 flex items-center justify-center mb-4 md:mb-0 transform transition duration-500 hover:scale-105 shadow-lg rounded-xl border-2">
            <img
              src={logo8}
              alt="Logo 8"
              className="w-full h-full p-2 bg-rose-100 rounded-xl"
            />
          </div>

          {/* ✅ Logo 9 */}
          <div className=" w-1/4 sm:w-1/6 md:w-1/12 flex items-center justify-center mb-4 md:mb-0 transform transition duration-500 hover:scale-105 shadow-lg rounded-xl border-2">
            <img
              src={logo9}
              alt="Logo 9"
              className="w-full h-full p-2 bg-indigo-200 rounded-xl"
            />
          </div>

          {/* ✅ Logo 10 */}
          <div className="w-1/4 sm:w-1/6 md:w-1/12 flex items-center justify-center mb-4 md:mb-0 transform transition duration-500 hover:scale-105 shadow-lg rounded-xl border-2">
            <img
              src={logo10}
              alt="Logo 10"
              className="w-full h-full p-2 bg-sky-300 rounded-xl"
            />
          </div>

          {/* ✅ Logo 11 */}
          <div className=" w-1/4 sm:w-1/6 md:w-1/12 flex items-center justify-center mb-4 md:mb-0 transform transition duration-500 hover:scale-105 shadow-lg rounded-xl border-2">
            <img
              src={logo11}
              alt="Logo 11"
              className="w-full h-full p-2 bg-violet-100 rounded-xl"
            />
          </div>

          {/* ✅ Logo 12 */}
          <div className="w-1/4 sm:w-1/6 md:w-1/12 flex items-center justify-center mb-4 md:mb-0 transform transition duration-500 hover:scale-105 shadow-lg rounded-xl border-2">
            <img
              src={logo12}
              alt="Logo 12"
              className="w-full h-full p-2 bg-lime-200 rounded-xl"
            />
          </div>

          {/* ✅ Logo 13 */}
          <div className=" w-1/4 sm:w-1/6 md:w-1/12 flex items-center justify-center mb-4 md:mb-0 transform transition duration-500 hover:scale-105 shadow-lg rounded-xl border-2">
            <img
              src={logo13}
              alt="Logo 13"
              className="w-full h-full p-2 bg-yellow-100 rounded-xl"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div>
<nav className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 w-full justify-items-center items-center
 text-gray-900 font-semibold  py-0">

  <Link 
    to="/" 
    className="flex items-center justify-center w-full h-full px-4 py-2 text-center  border border-black ">
    Home
  </Link>

  <Link 
    to="/about" 
    className="flex items-center justify-center w-full h-full px-4 py-2 text-center border border-black ">
    About
  </Link>

  <Link 
    to="/floral-categories" 
    className="flex items-center justify-center w-full h-full px-4 py-2 text-center border border-black ">
    Floral Categories
  </Link>

  <Link 
    to="/signature-scents" 
    className="flex items-center justify-center w-full h-full px-4 py-2 text-center  border border-black ">
    Signature Scents
  </Link>

  <Link 
    to="/contact" 
    className="flex items-center justify-center w-full h-full px-4 py-2 text-center  border border-black ">
    Contact
  </Link>

</nav>

</div>

    

      </header>
  
  )
}

export default Navbar;
