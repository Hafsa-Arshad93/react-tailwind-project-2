import React from 'react'

function Testimonials() {
  return (
    <section className="text-gray-700 mt-3 py-10 bg-pink-50">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-10 text-pink-600">
          What Our Customers Say
        </h2>

        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white shadow-lg rounded-2xl p-6 w-72 hover:scale-105 transition duration-300">
            <p className="italic">
              “Floral Love perfumes are pure magic! The floral scent lingers softly all day and feels heavenly.”
            </p>
            <h4 className="mt-4 font-semibold text-pink-500">— Banem E.</h4>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 w-72 hover:scale-105 transition duration-300">
            <p className="italic">
              “Each perfume feels like a new memory. My favorite — Rose Bloom — smells like romance in a bottle.”
            </p>
            <h4 className="mt-4 font-semibold text-pink-500">— Sarah R.</h4>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="bg-white shadow-lg rounded-2xl p-6 w-72 hover:scale-105 transition duration-300">
            <p className="italic">
              “Every drop of Floral Love tells a story of elegance and charm. I feel confident every time I wear it!”
            </p>
            <h4 className="mt-4 font-semibold text-pink-500">— Akshaat K.</h4>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 w-72 hover:scale-105 transition duration-300">
            <p className="italic">
              “A perfect blend of beauty and scent — Floral Love captures the feeling of romance perfectly.”
            </p>
            <h4 className="mt-4 font-semibold text-pink-500">— Samainj M.</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
