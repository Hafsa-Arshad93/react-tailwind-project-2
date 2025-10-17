import React from "react";

function ContactSection() {
  return (
    <section
      className="min-h-screen bg-gradient-to-r from-rose-100 via-pink-100 to-amber-50 flex items-center justify-center py-16 px-6 border-2"
      style={{ fontFamily: "Dancing Script", letterSpacing: "1px", fontStyle: "italic" }}
    >
      <div className="container mx-auto max-w-2xl bg-white rounded-3xl shadow-xl p-10 relative">

        <h2 className="text-4xl font-bold text-pink-700 mb-6 text-center">
          Contact Us
        </h2>
        <p className="text-gray-700 text-center mb-10 text-2xl">
          Reach out for perfume inquiries, collaborations, or just to share your love for fragrance! 💞
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-400 transition duration-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-400 transition duration-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Message</label>
            <textarea
              placeholder="Write your message..."
              rows={5}
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-400 transition duration-300"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-10 text-center text-2xl text-gray-700">
          <p>Email: <span className="text-pink-600 font-semibold">floralLoveperfumes40@gmail.com</span></p>
          <p>Phone: <span className="text-pink-600 font-semibold">+92-300-1234567</span></p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
